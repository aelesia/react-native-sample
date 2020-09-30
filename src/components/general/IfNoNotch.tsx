import React from 'react'
import { View, ViewProps } from 'react-native'
import deviceInfoModule from 'react-native-device-info'

/**
 * Only renders if component has no notch
 */
export const IfNoNotch = (p: ViewProps) => {
  return <>{!deviceInfoModule.hasNotch() && <View {...p} />}</>
}

/**
 * Only renders if component has notch
 */
export const IfNotch = (p: ViewProps) => {
  return <>{deviceInfoModule.hasNotch() && <View {...p} />}</>
}
