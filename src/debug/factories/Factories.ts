import { FakerFactory, Rand } from '@aelesia/commons'
import Faker from 'faker'

import { TPostIndex, TUser } from '../../models/Models'
import { fakerFace, fakerImage, random, randomArray } from '../faker/Faker'

export const PostFactory = new FakerFactory(
  (): TPostIndex => {
    const width = randomArray([300, 400]) as 300 | 400
    const height = randomArray([300, 400]) as 300 | 400
    return {
      id: Faker.random.uuid(),
      likes: Rand.num(0, 100),
      photo: {
        url: fakerImage({
          width,
          height
        }),
        height,
        width,
        aspectRatio: width / height
      },
      user: UserFactory.new(),
      description: Faker.lorem.sentences(random(1, 3))
    }
  }
)

export const UserFactory = new FakerFactory(
  (): TUser => {
    return {
      username: Faker.internet.userName(),
      profile_image: fakerFace()
    }
  }
)
