import React from 'react'
import { Image, View } from 'react-native'
import { withProps, withStyle } from 'reactjs-commons'

import { Css } from '../../style/Css'
import { cl, sp } from '../../style/Style'

export const Row = withStyle(View)({
  flexDirection: 'row'
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

export const ViewIf = withProps(View)<{ if:() => boolean }>(p => {
  // @ts-ignore
  return { children: p.if() ? p.children : <></> } as any
})
