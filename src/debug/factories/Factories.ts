import { FakerFactory, Rand } from '@aelesia/commons'
import Faker from 'faker'

import { TPost, TPostIndex, TUser } from '../../models/Models'
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

export const PostDetailsFactory = new FakerFactory(
  (): TPost => {
    return {
      ...PostFactory.new(),
      createdAt: Faker.date.recent(),
      description: Faker.lorem.sentence(),
      downloads: Faker.random.number(100000),
      exif: {
        aperture: '5.6',
        exposure_time: '1/250',
        focal_length: '35.0',
        iso: 125,
        make: 'Sony',
        model: 'ILCE-7M2'
      },
      location: Faker.address.country(),
      views: Faker.random.number(1000000)
    }
  }
)
