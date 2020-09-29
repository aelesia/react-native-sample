import React from 'react'
import { View, ViewProps } from 'react-native'
import deviceInfoModule from 'react-native-device-info'

export const NoNotch = (p: ViewProps) => {
  return <>{!deviceInfoModule.hasNotch() && <View {...p} />}</>
}

export const Notch = (p: ViewProps) => {
  return <>{deviceInfoModule.hasNotch() && <View {...p} />}</>
}
