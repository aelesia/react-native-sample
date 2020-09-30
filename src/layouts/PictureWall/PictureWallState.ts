import { Rand, sleep } from '@aelesia/commons'

import { LinkedState } from '../../../lib/linkedstate/LinkedState'
import { Unsplash } from '../../app/dependencies/Spring'
import { TPost, TPostIndex } from '../../models/Models'

export const Posts = new LinkedState<TPostIndex[]>([])
export const Post = new LinkedState<TPost | undefined>(undefined)

export const PictureWallState = new (class {
  page: number = 1

  async fetchMorePhotos() {
    const photos = await Unsplash.searchPhotos({
      page: this.page,
      query: 'nature'
    })
    Posts.set(prev => [...prev, ...photos])
    this.page = this.page + 1
  }

  async refresh() {
    this.page = Rand.num(1, 5)
    const photos = await Unsplash.searchPhotos({
      page: this.page,
      query: 'nature'
    })
    Posts.set([...photos])
  }

  async fetchPost(id: string) {
    const post = await Unsplash.photo({ id })
    Post.set(post)
  }
})()
