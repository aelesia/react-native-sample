import { View } from 'react-native'
import { withStyle } from 'reactjs-commons'

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
