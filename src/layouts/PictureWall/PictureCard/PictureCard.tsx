import React from 'react'
import { Image, Text, ViewStyle } from 'react-native'

import { WIDTH } from '../../../app/consts/Consts'
import { SvgHeart } from '../../../assets/svg/SvgHeart'
import { Card, Row } from '../../../components/general/General'
import { TPostIndex } from '../../../models/Models'
import { sp, sz, thm, wt } from '../../../style/Style'
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
        <Text style={{ marginTop: sp.md, fontSize: sz.md, fontWeight: wt._300 }}>
          {p.post.description}
        </Text>
      )}
      <Row style={{ alignItems: 'center', marginTop: sp.md }}>
        <SvgHeart fill={thm.sec} />
        <Text style={{ marginLeft: sp.xs, color: thm.sec }}>{p.post.likes}</Text>
      </Row>
    </Card>
  )
}
