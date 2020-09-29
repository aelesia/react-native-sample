import React from 'react'
import { ScrollView } from 'react-native'

import { Post } from '../../models/Models'
import { sp } from '../../style/Style'
import { PictureCard } from './PictureCard/PictureCard'

export const PictureWall = (p: { posts: Post[] }) => {
  return (
    <ScrollView>
      {p.posts.map(post => (
        <PictureCard style={{ marginVertical: sp.xs }} post={post} />
      ))}
    </ScrollView>
  )
}
