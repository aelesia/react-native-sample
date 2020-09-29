import React from 'react'
import { Image, Text, ViewStyle } from 'react-native'

import { WIDTH } from '../../../app/consts/Consts'
import { Card, CircleImage, Row } from '../../../components/general/General'
import { Post, User } from '../../../models/Models'
import { sp, sz } from '../../../style/Style'

export const PictureCard = (p: { post: Post; style?: ViewStyle }) => {
  return (
    <Card style={p.style}>
      <UserThumbnail style={{ marginBottom: sp.xs }} user={p.post.user} />
      <Image
        source={{ width: WIDTH, height: 300, uri: p.post.photo.url }}
        style={{ marginHorizontal: -sp.sm }}
      />
      <Text style={{ marginVertical: sp.sm, fontSize: sz.md }}>{p.post.description}</Text>
      <Row>
        <Text>Likes: {p.post.likes}</Text>
      </Row>
    </Card>
  )
}

export const UserThumbnail = (p: { user: User; style?: ViewStyle }) => {
  return (
    <Row style={{ ...p.style, alignItems: 'center' }}>
      <CircleImage size={36} source={{ uri: p.user.profile_image.url }} />
      <Text style={{ marginLeft: sp.xs }}>{p.user.username}</Text>
    </Row>
  )
}
