import React from 'react'
import { Image, Text, ViewStyle } from 'react-native'

import { WIDTH } from '../../../app/consts/Consts'
import { SvgHeart } from '../../../assets/svg/SvgHeart'
import { Card, CircleImage, Row } from '../../../components/general/General'
import { TPostIndex, TUser } from '../../../models/Models'
import { sp, sz } from '../../../style/Style'

export const PictureCard = (p: { post: TPostIndex; style?: ViewStyle }) => {
  return (
    <Card style={p.style}>
      <UserThumbnail style={{ marginBottom: sp.xs }} user={p.post.user} />
      <Image
        source={{ width: WIDTH, height: WIDTH / p.post.photo.aspectRatio, uri: p.post.photo.url }}
        style={{ marginHorizontal: -sp.sm }}
      />
      {p.post.description && (
        <Text style={{ marginTop: sp.sm, fontSize: sz.md }}>{p.post.description}</Text>
      )}
      <Row style={{ alignItems: 'center', marginTop: sp.sm }}>
        <SvgHeart />
        <Text style={{ marginLeft: sp.xs }}>{p.post.likes}</Text>
      </Row>
    </Card>
  )
}

export const UserThumbnail = (p: { user: TUser; style?: ViewStyle }) => {
  return (
    <Row style={{ ...p.style, alignItems: 'center' }}>
      <CircleImage size={36} source={{ uri: p.user.profile_image }} />
      <Text style={{ marginLeft: sp.xs }}>{p.user.username}</Text>
    </Row>
  )
}
