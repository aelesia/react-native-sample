import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { useLinkedState } from '../../../lib/linkedstate/LinkedState'
import { Modal } from '../../../lib/modal/Modal'
import { AsyncRefreshControl } from '../../components/general/AsyncRefreshControl'
import { Row } from '../../components/general/General'
import { IfNoNotch, IfNotch } from '../../components/general/IfNoNotch'
import { MyScrollView } from '../../components/general/MyScrollView'
import { TPhoto, TPost, TPostIndex } from '../../models/Models'
import { sp, sz } from '../../style/Style'
import { formatNumber } from '../../utils/Utils'
import { PictureCard } from './PictureCard/PictureCard'
import { PictureWallState, Post, Posts } from './PictureWallState'

export const PictureWallPage = () => {
  const [posts] = useLinkedState(Posts)
  useEffect(() => {
    PictureWallState.refresh()
  }, [])
  return <PictureWall posts={posts} />
}

export const PictureWall = (p: { posts: TPostIndex[] }) => {
  return (
    <>
      <MyScrollView
        scrollBottomThreshold={1000}
        onScrollBottom={() => PictureWallState.fetchMorePhotos()}
        refreshControl={<AsyncRefreshControl onRefresh={() => PictureWallState.refresh()} />}>
        <IfNotch style={{ height: sp.xl }} />
        {p.posts.map((post, index) => (
          <TouchableOpacity
            onPress={() => Modal.sheet(<PostDetailsPage postID={post.id} post={post} />)}>
            <PictureCard key={index} style={{ marginVertical: sp.xs }} post={post} />
          </TouchableOpacity>
        ))}
      </MyScrollView>
      <Text style={{ position: 'absolute', top: sp.md, left: sp.md }}>{p.posts.length}</Text>
    </>
  )
}

export const PostDetails = (p: { post: TPostIndex & Partial<TPost> }) => {
  return (
    <View style={{ backgroundColor: 'white' }}>
      <View>
        <Row>
          {p.post.views && (
            <View>
              <Text>Views</Text>
              <Text style={{ fontSize: sz.lg }}>{formatNumber(p.post.views)}</Text>
            </View>
          )}
          <View>
            <Text>Downloads</Text>
            <Text style={{ fontSize: sz.lg }}>{p.post.downloads}</Text>
          </View>
        </Row>
      </View>
    </View>
  )
}

export const PostDetailsPage = (p: { postID: string; post: TPostIndex }) => {
  const [post] = useLinkedState<TPost | undefined>(Post)
  useEffect(() => {
    // PictureWallState.fetchPost(p.postID)
  }, [p.postID])
  return <PostDetails post={{ ...post, ...p.post }} />
}
