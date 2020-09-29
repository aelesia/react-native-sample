import React, { useEffect } from 'react'
import { SafeAreaView, ScrollView, Text } from 'react-native'

import { useLinkedState } from '../../../lib/linkedstate/LinkedState'
import { AsyncRefreshControl } from '../../components/general/AsyncRefreshControl'
import { MyScrollView } from '../../components/general/MyScrollView'
import { NoNotch, Notch } from '../../components/general/NoNotch'
import { Photo, Post } from '../../models/Models'
import { sp } from '../../style/Style'
import { PictureCard } from './PictureCard/PictureCard'
import { PictureWallState, Posts } from './PictureWallState'

export const PictureWallPage = () => {
  const [posts] = useLinkedState(Posts)
  useEffect(() => {
    PictureWallState.refresh()
  }, [])
  return <PictureWall posts={posts} />
}

export const PictureWall = (p: { posts: Post[] }) => {
  return (
    <>
      <MyScrollView
        scrollBottomThreshold={1000}
        onScrollBottom={() => PictureWallState.fetchMorePhotos()}
        refreshControl={<AsyncRefreshControl onRefresh={() => PictureWallState.refresh()} />}>
        <Notch style={{ height: sp.xl }} />
        {p.posts.map((post, index) => (
          <PictureCard key={index} style={{ marginVertical: sp.xs }} post={post} />
        ))}
      </MyScrollView>
      <Text style={{ position: 'absolute', top: sp.md, left: sp.md }}>{p.posts.length}</Text>
    </>
  )
}
