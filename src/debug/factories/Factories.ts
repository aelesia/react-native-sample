import { FakerFactory, Rand } from '@aelesia/commons'
import Faker from 'faker'

import { Post, User } from '../../models/Models'
import { fakerFace, fakerImage, random } from '../faker/Faker'

export const PostFactory = new FakerFactory(
  (): Post => {
    return {
      id: Faker.random.uuid(),
      likes: Rand.num(0, 100),
      photo: {
        url: fakerImage({
          width: 400,
          height: 400
        })
      },
      user: UserFactory.new(),
      description: Faker.lorem.sentences(random(1, 3))
    }
  }
)

export const UserFactory = new FakerFactory(
  (): User => {
    return {
      username: Faker.internet.userName(),
      profile_image: {
        url: fakerFace()
      }
    }
  }
)
