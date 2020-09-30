import { sleep } from '@aelesia/commons'
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
      <IfNotch style={{ height: sp.lg }} />
      <MyScrollView
        style={{ overflow: 'visible' }}
        scrollBottomThreshold={1000}
        onScrollBottom={() => PictureWallState.fetchMorePhotos()}
        refreshControl={
          <AsyncRefreshControl
            onRefresh={async () => {
              await sleep(2000) // HACK: This is simply to display the loading animation
              await PictureWallState.refresh()
            }}
          />
        }>
        {p.posts.map((post, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => Modal.sheet(<PictureDetailsPage postID={post.id} post={post} />)}>
            <PictureCard style={{ marginVertical: sp.xs }} post={post} />
          </TouchableOpacity>
        ))}
      </MyScrollView>
    </>
  )
}
