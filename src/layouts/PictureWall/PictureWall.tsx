import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native'
import { withStyle } from 'reactjs-commons'

import { useLinkedState } from '../../../lib/linkedstate/LinkedState'
import { Modal } from '../../../lib/modal/Modal'
import { SvgDownload } from '../../assets/svg/SvgDownload'
import { SvgView } from '../../assets/svg/SvgView'
import { AsyncRefreshControl } from '../../components/general/AsyncRefreshControl'
import { __, Divider, Row } from '../../components/general/General'
import { IfNoNotch, IfNotch } from '../../components/general/IfNoNotch'
import { MyScrollView } from '../../components/general/MyScrollView'
import { TPhoto, TPost, TPostIndex } from '../../models/Models'
import { cl, sp, sz, thm } from '../../style/Style'
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
      {/* FIXME: Should use FlatList */}
      <MyScrollView
        scrollBottomThreshold={1000}
        onScrollBottom={() => PictureWallState.fetchMorePhotos()}
        refreshControl={<AsyncRefreshControl onRefresh={() => PictureWallState.refresh()} />}>
        <IfNotch style={{ height: sp.xl }} />
        {p.posts.map((post, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => Modal.sheet(<PostDetailsPage postID={post.id} post={post} />)}>
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

const StyledLabel = withStyle(Label)({
  marginBottom: sp.lg,
  flex: 1,
  flexGrow: 1
})

export const PostDetails = (p: { post: TPostIndex & Partial<TPost> }) => {
  const { downloads, views, exif } = p.post

  return (
    <View style={{ backgroundColor: cl.background, padding: sp.md, borderRadius: 20 }}>
      <Row>
        <__ style={{ flex: 1, flexGrow: 1 }}>
          <Row>
            <SvgView />
            <Text style={{ marginLeft: sp.xs }}>Views</Text>
          </Row>
          <Text style={{ fontSize: sz.lg, marginTop: sp.sm }}>
            {views ? formatNumber(views) : '--'}
          </Text>
        </__>
        <__ style={{ flex: 1, flexGrow: 1 }}>
          <Row>
            <SvgDownload />
            <Text style={{ marginLeft: sp.xs }}>Downloads</Text>
          </Row>
          <Text style={{ fontSize: sz.lg, marginTop: sp.sm }}>
            {downloads ? formatNumber(downloads) : '--'}
          </Text>
        </__>
      </Row>
      <Divider />
      <Row>
        <StyledLabel title={'Camera Make'} value={exif?.make} />
        <StyledLabel title={'Camera Model'} value={exif?.model} />
      </Row>
      <Row>
        <StyledLabel title={'Focal Length'} value={exif?.focal_length} />
        <StyledLabel title={'Aperture'} value={exif?.aperture} />
      </Row>
      <Row>
        <StyledLabel title={'Shutter Time'} value={exif?.exposure_time} />
        <StyledLabel title={'ISO'} value={exif?.iso} />
      </Row>
    </View>
  )
}

export const PostDetailsPage = (p: { postID: string; post: TPostIndex }) => {
  const [post] = useLinkedState<TPost | undefined>(Post)
  useEffect(() => {
    PictureWallState.fetchPost(p.postID)
  }, [p.postID])
  return <PostDetails post={{ ...post, ...p.post }} />
}
