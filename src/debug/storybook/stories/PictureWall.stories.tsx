import React from 'react'

import { PictureCard } from '../../../layouts/PictureWall/PictureCard/PictureCard'
import { PostFactory } from '../../factories/Factories'
import { myStoriesOf } from '../Storybook'

myStoriesOf('Main').add('Post', () => <PictureCard post={PostFactory.fixture('')} />)
