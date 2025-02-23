import React, { useEffect } from 'react'
import { Text, TextStyle, View, ViewStyle } from 'react-native'
import { withStyle } from 'reactjs-commons'

import { useLinkedState } from '../../../../lib/linkedstate/LinkedState'
import { SvgDownload } from '../../../assets/svg/SvgDownload'
import { SvgLocation } from '../../../assets/svg/SvgLocation'
import { SvgView } from '../../../assets/svg/SvgView'
import { __, Divider, Row } from '../../../components/general/General'
import { TPost, TPostIndex } from '../../../models/Models'
import { cl, sp, sz, thm, wt } from '../../../style/Style'
import { formatNumber } from '../../../utils/Utils'
import { PictureWallState, Post } from '../PictureWallState'

export const PictureDetailsPage = (p: { postID: string; post: TPostIndex }) => {
  const [post] = useLinkedState<TPost | undefined>(Post(p.postID))
  useEffect(() => {
    PictureWallState.fetchPost(p.postID)
  }, [p.postID])
  return <PictureDetails post={{ ...post, ...p.post }} />
}

export const PictureDetails = (p: { post: TPostIndex & Partial<TPost> }) => {
  const { downloads, views, exif } = p.post

  return (
    <View style={{ backgroundColor: cl.background, padding: sp.md, borderRadius: 20 }}>
      {p.post.location && (
        <__>
          <Row>
            <SvgLocation />
            <Text style={{ marginLeft: sp.xs, fontSize: sz.sm, fontWeight: wt._300 }}>
              {p.post.location}
            </Text>
          </Row>
          <Divider />
        </__>
      )}
      <Row>
        <__ style={{ flex: 1, flexGrow: 1 }}>
          <Row>
            <SvgView />
            <Text style={{ marginLeft: sp.xs }}>Views</Text>
          </Row>
          <Text style={{ fontSize: sz.lg, marginTop: sp.sm, fontWeight: '200' }}>
            {views ? formatNumber(views) : '--'}
          </Text>
        </__>
        <__ style={{ flex: 1, flexGrow: 1 }}>
          <Row>
            <SvgDownload />
            <Text style={{ marginLeft: sp.xs }}>Downloads</Text>
          </Row>
          <Text style={{ fontSize: sz.lg, marginTop: sp.sm, fontWeight: '200' }}>
            {downloads ? formatNumber(downloads) : '--'}
          </Text>
        </__>
      </Row>
      <Divider />
      <Row style={{ alignItems: undefined }}>
        <StyledLabel title={'Camera Make'} value={exif?.make} />
        <StyledLabel title={'Camera Model'} value={exif?.model} />
      </Row>
      <Row>
        <StyledLabel title={'Focal Length'} value={exif?.focal_length} />
        <StyledLabel title={'Aperture'} value={exif?.aperture} />
      </Row>
      <Row>
        <StyledLabel title={'Shutter Time'} value={exif?.exposure_time} />
        <StyledLabel title={'ISO'} value={exif?.iso} />
      </Row>
    </View>
  )
}

export const Label = (p: {
  title: string
  value?: string | number
  style?: ViewStyle
  titleStyle?: TextStyle
  labelStyle?: TextStyle
}) => {
  return (
    <View style={p.style}>
      <Text style={{ fontSize: sz.sm, fontWeight: wt._300, color: thm.sec, ...p.titleStyle }}>
        {p.title}
      </Text>
      <Text
        style={{ fontSize: sz.md, marginTop: sp.xs, textTransform: 'uppercase', ...p.labelStyle }}>
        {p.value ?? '--'}
      </Text>
    </View>
  )
}

const StyledLabel = withStyle(Label)({
  marginBottom: sp.lg,
  flex: 1,
  flexGrow: 1
})
