import { FakerFactory, Rand } from '@aelesia/commons'
import Faker from 'faker'

import { Post } from '../../models/Models'
import { fakerImage, random } from '../faker/Faker'

export const PostFactory = new FakerFactory(
  (): Post => {
    return {
      likes: Rand.num(0, 100),
      photo: {
        url: fakerImage({
          width: 400,
          height: 400
        })
      },
      user: {},
      description: Faker.lorem.sentences(random(1, 3))
    }
  }
)
