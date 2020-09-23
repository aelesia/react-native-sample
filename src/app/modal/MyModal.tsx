import React, { forwardRef, ReactElement, useImperativeHandle, useState } from 'react'
import { Text, View } from 'react-native'
import Modal from 'react-native-modal'

import { MyModalInterface } from './MyModalInterface'

export const MyModal = forwardRef((props, ref) => {
  const [visibility, setVisibility] = useState<boolean>(false)
  const [reactElement, setReactElement] = useState<ReactElement>(<Text>{'{modal}'}</Text>)
  const [style, setStyle] = useState<'alert' | 'sheet' | 'no_wrapper'>('alert')

  useImperativeHandle(
    ref,
    (): MyModalInterface => ({
      async startForResult<T>(
        style_: 'alert' | 'sheet' | 'no_wrapper',
        element: ReactElement
      ): Promise<T> {
        if (visibility) {
          console.warn('[Modal]: Modal render was called before it was closed')
        }
        return new Promise((res, rej) => {
          const ok = (result: T | undefined) => {
            setVisibility(false)
            res(result)
          }
          const cancel = () => {
            setVisibility(false)
            rej()
          }
          const props_ = { ...element.props, ...{ modal: { ok, cancel } } }
          setReactElement(React.createElement(element.type, props_))
          setStyle(style_)
          setVisibility(true)
        })
      }
    })
  )

  return (
    <>
      {style === 'alert' && (
        <Modal
          isVisible={visibility}
          animationIn={'fadeIn'}
          animationOut={'fadeOut'}
          avoidKeyboard={true}
          onBackdropPress={() => setVisibility(false)}
          backdropTransitionOutTiming={0} // https://github.com/react-native-community/react-native-modal#the-modal-enterexit-animation-flickers
          onDismiss={() => setVisibility(false)}>
          <View style={{ width: '100%', alignSelf: 'center' }}>{reactElement}</View>
        </Modal>
      )}
      {style === 'no_wrapper' && (
        <Modal
          style={{ margin: 0 }}
          isVisible={visibility}
          animationIn={'fadeIn'}
          animationOut={'fadeOut'}
          avoidKeyboard={true}
          onBackdropPress={() => setVisibility(false)}
          backdropTransitionOutTiming={0} // https://github.com/react-native-community/react-native-modal#the-modal-enterexit-animation-flickers
          onDismiss={() => setVisibility(false)}>
          {reactElement}
        </Modal>
      )}
      {style === 'sheet' && (
        // FIXME: Handle swipe down OR scrollview inside Modal
        <Modal
          // swipeDirection={'down'}
          style={{ justifyContent: 'flex-end', margin: 0 }}
          isVisible={visibility}
          animationIn={'slideInUp'}
          animationOut={'slideOutDown'}
          // onSwipeComplete={() => setVisibility(false)}
          onBackdropPress={() => setVisibility(false)}
          onDismiss={() => setVisibility(false)}>
          {reactElement}
        </Modal>
      )}
    </>
  )
})
