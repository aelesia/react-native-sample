import { Image, View } from 'react-native'
import { withStyle } from 'reactjs-commons'

import { Css } from '../../style/Css'
import { cl, sp } from '../../style/Style'

export const __ = View

export const Row = withStyle(View)({
  flexDirection: 'row',
  alignItems: 'center'
})

export const Divider = withStyle(View)({
  marginVertical: sp.sm,
  height: 1,
  width: '100%',
  backgroundColor: cl.grey3
})

export const Card = withStyle(View)({
  ...Css.shadow,
  borderRadius: 20,
  padding: sp.sm,
  backgroundColor: cl.white
})

export const CircleImage = withStyle(Image)<{ size: number }>(p => ({
  width: p.size,
  height: p.size,
  borderRadius: p.size
}))
