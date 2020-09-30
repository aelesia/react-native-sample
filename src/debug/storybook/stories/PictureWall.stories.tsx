import React, { ReactElement } from 'react'
import { Button, SafeAreaView } from 'react-native'

import { Modal } from '../../../../lib/modal/Modal'
import { PictureCard } from '../../../layouts/PictureWall/PictureCard/PictureCard'
import { PictureDetails } from '../../../layouts/PictureWall/PictureDetails/PictureDetails'
import { PictureWall } from '../../../layouts/PictureWall/PictureWall'
import { PostDetailsFactory, PostFactory } from '../../factories/Factories'
import { myStoriesOf } from '../Storybook'

export const StorybookModal: React.FC<{ children: ReactElement }> = p => {
  return (
    <SafeAreaView style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Modal" onPress={() => Modal.sheet(p.children)} />
    </SafeAreaView>
  )
}

myStoriesOf('Main').add('Wall', () => <PictureWall posts={PostFactory.array(10)} />)

myStoriesOf('Main').add('Post', () => <PictureCard post={PostFactory.fixture('')} />)

myStoriesOf('Main').add('Details', () => (
  <StorybookModal>
    <PictureDetails post={PostDetailsFactory.fixture('')} />
  </StorybookModal>
))
