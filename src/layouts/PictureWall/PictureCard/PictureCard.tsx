import React from 'react'
import { Image, Text, ViewStyle } from 'react-native'

import { WIDTH } from '../../../app/consts/Consts'
import { SvgHeart } from '../../../assets/svg/SvgHeart'
import { SvgInfo } from '../../../assets/svg/SvgInfo'
import { Card, Row } from '../../../components/general/General'
import { TPostIndex } from '../../../models/Models'
import { sp, sq, sz } from '../../../style/Style'
import { UserThumbnail } from './UserThumbnail/UserThumbnail'

export const PictureCard = (p: { post: TPostIndex; style?: ViewStyle }) => {
  return (
    <Card style={p.style}>
      <UserThumbnail style={{ marginBottom: sp.xs }} user={p.post.user} />
      <Image
        source={{ width: WIDTH, height: WIDTH / p.post.photo.aspectRatio, uri: p.post.photo.url }}
        style={{ marginHorizontal: -sp.sm }}
      />
      {p.post.description && (
        <Text style={{ marginTop: sp.md, fontSize: sz.md }}>{p.post.description}</Text>
      )}
      <Row style={{ alignItems: 'center', marginTop: sp.md }}>
        <SvgHeart />
        <Text style={{ marginLeft: sp.xs }}>{p.post.likes}</Text>
      </Row>
    </Card>
  )
}
