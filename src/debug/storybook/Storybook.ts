import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { View } from 'react-native'

import { cl } from '../../style/Style'

export function myStoriesOf(name: string) {
  return storiesOf(name, module).addDecorator((storyFn: any) => {
    return React.createElement(
      View,
      { style: { backgroundColor: cl.background, flex: 1, flexGrow: 1 } },
      storyFn()
    )
  })
}
