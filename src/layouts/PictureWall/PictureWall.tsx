import React, { useEffect } from 'react'
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'

import { useLinkedState } from '../../../lib/linkedstate/LinkedState'
import { Modal } from '../../../lib/modal/Modal'
import { AsyncRefreshControl } from '../../components/general/AsyncRefreshControl'
import { IfNotch } from '../../components/general/IfNoNotch'
import { MyScrollView } from '../../components/general/MyScrollView'
import { TPostIndex } from '../../models/Models'
import { sp, sz, thm } from '../../style/Style'
import { PictureCard } from './PictureCard/PictureCard'
import { PictureDetailsPage } from './PictureDetails/PictureDetails'
import { PictureWallState, Posts } from './PictureWallState'

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
      {/* FIXME: Should use FlatList */}
      <MyScrollView
        scrollBottomThreshold={1000}
        onScrollBottom={() => PictureWallState.fetchMorePhotos()}
        refreshControl={<AsyncRefreshControl onRefresh={() => PictureWallState.refresh()} />}>
        <IfNotch style={{ height: sp.xl }} />
        {p.posts.map((post, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => Modal.sheet(<PictureDetailsPage postID={post.id} post={post} />)}>
            <PictureCard style={{ marginVertical: sp.xs }} post={post} />
          </TouchableOpacity>
        ))}
      </MyScrollView>
      <Text style={{ position: 'absolute', top: sp.md, left: sp.md }}>{p.posts.length}</Text>
    </>
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
      <Text style={{ fontSize: sz.sm, color: thm.sec, ...p.titleStyle }}>{p.title}</Text>
      <Text
        style={{ fontSize: sz.md, marginTop: sp.xs, textTransform: 'uppercase', ...p.labelStyle }}>
        {p.value ?? '--'}
      </Text>
    </View>
  )
}
