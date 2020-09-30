import * as React from 'react'
import Svg, { G, Path, SvgProps } from 'react-native-svg'
import { withProps } from 'reactjs-commons'

import { cl, sq } from '../../style/Style'

function _SvgInfo(props: SvgProps) {
  return (
    <Svg viewBox="0 0 16 16" {...props}>
      <G data-name="Layer 2" fill="#231f20">
        <Path d="M8 2a6 6 0 106 6 6 6 0 00-6-6zm0 11a5 5 0 115-5 5 5 0 01-5 5z" />
        <Path d="M8 6.85a.5.5 0 00-.5.5v3.4a.5.5 0 001 0v-3.4a.5.5 0 00-.5-.5zM8 4.8a.53.53 0 00-.51.52v.08a.47.47 0 00.51.47.52.52 0 00.5-.5v-.12A.45.45 0 008 4.8z" />
      </G>
    </Svg>
  )
}

export const SvgInfo = withProps(_SvgInfo)<{
  size?: number
}>(p => ({
  fill: cl.black,
  height: p.size ?? sq.sm,
  width: p.size ?? sq.sm
}))
