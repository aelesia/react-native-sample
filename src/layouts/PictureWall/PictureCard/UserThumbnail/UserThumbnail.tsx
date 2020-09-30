import React from 'react'
import { Text, ViewStyle } from 'react-native'

import { CircleImage, Row } from '../../../../components/general/General'
import { TUser } from '../../../../models/Models'
import { sp } from '../../../../style/Style'

export const UserThumbnail = (p: { user: TUser; style?: ViewStyle }) => {
  return (
    <Row style={{ ...p.style, alignItems: 'center' }}>
      <CircleImage size={36} source={{ uri: p.user.profile_image }} />
      <Text style={{ marginLeft: sp.xs }}>{p.user.username}</Text>
    </Row>
  )
}
