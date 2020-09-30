import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'

import { useLinkedState } from '../../../lib/linkedstate/LinkedState2'
import { Modal } from '../../../lib/modal/Modal'
import { AsyncRefreshControl } from '../../components/general/AsyncRefreshControl'
import { IfNotch } from '../../components/general/IfNoNotch'
import { MyScrollView } from '../../components/general/MyScrollView'
import { TPostIndex } from '../../models/Models'
import { sp } from '../../style/Style'
import { PictureCard } from './PictureCard/PictureCard'
import { PictureDetailsPage } from './PictureDetails/PictureDetails'
import { PictureWallState, Posts } from './PictureWallState'
import { SearchBar } from './SearchBar/SearchBar'

export const PictureWallPage = () => {
  const [posts] = useLinkedState(Posts)
  useEffect(() => {
    PictureWallState.searchPhotos('nature')
  }, [])
  return <PictureWall posts={posts} />
}

export const PictureWall = (p: { posts: TPostIndex[] }) => {
  return (
    <>
      <IfNotch style={{ height: sp.lg }} />
      <SearchBar onSearch={text => PictureWallState.searchPhotos(text)} />
      <MyScrollView
        style={{ overflow: 'visible' }}
        scrollBottomThreshold={1000}
        onScrollBottom={() => PictureWallState.fetchMorePhotos()}
        refreshControl={<AsyncRefreshControl onRefresh={() => PictureWallState.refresh()} />}>
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
