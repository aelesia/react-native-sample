import React, { forwardRef, useState } from 'react'
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView } from 'react-native'

type P = {
  scrollBottomThreshold?: number
  onScrollBottom?: () => void
  children?: any
} & React.ComponentPropsWithRef<typeof ScrollView>
export const MyScrollView = forwardRef((p: P, ref) => {
  const scrollBottomThreshold = p.scrollBottomThreshold ?? 20
  const [debounce, setDebounce] = useState<boolean>(false)

  return (
    <ScrollView
      ref={ref as any}
      scrollEventThrottle={p.scrollEventThrottle ?? 100}
      onScroll={async e => {
        if (p.onScroll) {
          p.onScroll(e)
        }
        if (p.onScrollBottom && !debounce && isCloseToBottom(e, scrollBottomThreshold)) {
          setDebounce(true)
          await p.onScrollBottom()
          setTimeout(() => setDebounce(false), 1000)
        }
      }}
      {...p}
    />
  )
})

function isCloseToBottom(event: NativeSyntheticEvent<NativeScrollEvent>, threshold: number) {
  return (
    event.nativeEvent.layoutMeasurement.height + event.nativeEvent.contentOffset.y >=
    event.nativeEvent.contentSize.height - threshold
  )
}
