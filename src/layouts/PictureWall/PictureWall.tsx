import { sleep } from '@aelesia/commons'
import React, { useEffect, useRef, useState } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'

import { useLinkedState } from '../../../lib/linkedstate/LinkedState'
import { Modal } from '../../../lib/modal/Modal'
import { SvgSearch } from '../../assets/svg/SvgSearch'
import { AsyncRefreshControl } from '../../components/general/AsyncRefreshControl'
import { Row } from '../../components/general/General'
import { IconButton } from '../../components/general/IconButton'
import { IfNotch } from '../../components/general/IfNoNotch'
import { MyScrollView } from '../../components/general/MyScrollView'
import { TPostIndex } from '../../models/Models'
import { cl, sp } from '../../style/Style'
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
      <SearchBar onSearch={searchText => PictureWallState.searchPhotos(searchText)} />
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

export const SearchBar = (p: { onSearch: (searchText: string) => any }) => {
  const [text, setText] = useState<string>('')
  const textInput = useRef<TextInput>(null)
  return (
    <Row
      style={{
        marginHorizontal: sp.sm,
        marginVertical: sp.xs
      }}>
      <View
        style={{
          flexGrow: 1,
          backgroundColor: '#EEE',
          marginRight: sp.sm,
          paddingVertical: sp.xs,
          paddingHorizontal: sp.sm,
          borderRadius: 10
        }}>
        <TextInput
          autoCapitalize={'none'}
          autoCorrect={false}
          ref={textInput}
          clearTextOnFocus={true}
          placeholder={'Search'}
          placeholderTextColor={cl.grey2}
          value={text}
          onChangeText={t => {
            setText(t)
          }}
        />
      </View>
      <IconButton
        svg={SvgSearch}
        fill={cl.grey2}
        onPress={async () => {
          await p.onSearch(text)
          textInput.current?.blur()
        }}
      />
    </Row>
  )
}
