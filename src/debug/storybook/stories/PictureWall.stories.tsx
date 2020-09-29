import React from 'react'

import { PictureCard } from '../../../layouts/PictureWall/PictureCard/PictureCard'
import { PictureWall } from '../../../layouts/PictureWall/PictureWall'
import { PostFactory } from '../../factories/Factories'
import { myStoriesOf } from '../Storybook'

myStoriesOf('Main').add('Wall', () => <PictureWall posts={PostFactory.array(10)} />)

myStoriesOf('Main').add('Post', () => <PictureCard post={PostFactory.fixture('')} />)
