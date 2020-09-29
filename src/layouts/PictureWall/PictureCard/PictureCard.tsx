import React from 'react'
import { Image, Text, View } from 'react-native'

import { WIDTH } from '../../../app/consts/Consts'
import { Card, Row } from '../../../components/general/General'
import { Post } from '../../../models/Models'
import { sp } from '../../../style/Style'

export const PictureCard = (p: { post: Post }) => {
  return (
    <Card>
      <Image
        source={{ width: WIDTH, height: 300, uri: p.post.photo.url }}
        style={{ marginHorizontal: -sp.sm }}
      />
      <Row>
        <Text>Likes: {p.post.likes}</Text>
      </Row>
    </Card>
  )
}
