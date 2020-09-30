import React from 'react'
import { ActivityIndicator, TouchableOpacity, ViewStyle } from 'react-native'
import { SvgProps } from 'react-native-svg'
import { withLoading } from 'reactjs-commons'

import { sz } from '../../style/Style'

type P = {
  svg: React.FC<SvgProps>
  hitSlop?: number
  style?: ViewStyle
  disabled?: boolean
  onPress?: () => any
  loading?: boolean
  size?: number
  fill?: string
}
const _IconButton: React.FC<P> = p => {
  const style: any = { flexDirection: 'row', alignItems: 'center', ...p.style }
  // const props = { ...p, ...{ style: { padding: sp.xxs } } }
  const hitSlop = p.hitSlop ?? 10
  return (
    <TouchableOpacity
      hitSlop={{ top: hitSlop, bottom: hitSlop, left: hitSlop, right: hitSlop }}
      style={style}
      disabled={p.disabled}
      onPress={p.onPress}>
      {p.loading ? (
        <ActivityIndicator size={p.size ? p.size * 1.7 : sz.sm * 1.7} />
      ) : (
        <p.svg fill={p.fill} />
      )}
    </TouchableOpacity>
  )
}
export const IconButton = withLoading(_IconButton, { asyncHandler: 'onPress' })
