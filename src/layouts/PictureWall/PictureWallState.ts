import { Rand } from '@aelesia/commons'

import { LinkedState, MultiLinkedState } from '../../../lib/linkedstate/LinkedState'
import { Unsplash } from '../../app/dependencies/Spring'
import { TPostIndex } from '../../models/Models'

export const Posts = new LinkedState<TPostIndex[]>([])
export const Post = MultiLinkedState

export const PictureWallState = new (class {
  page: number = 1
  query: string = 'nature'

  async fetchMorePhotos() {
    const photos = await Unsplash.searchPhotos({
      page: this.page,
      query: this.query
    })
    Posts.set(prev => [...prev, ...photos])
    this.page = this.page + 1
  }

  async refresh() {
    this.page = Rand.num(1, 5)
    const photos = await Unsplash.searchPhotos({
      page: this.page,
      query: this.query
    })
    Posts.set([...photos])
  }

  async searchPhotos(query: string) {
    this.page = 1
    this.query = query.length > 0 ? query : 'nature'
    const photos = await Unsplash.searchPhotos({
      page: this.page,
      query: this.query
    })
    Posts.set([...photos])
  }

  async fetchPost(id: string) {
    const post = await Unsplash.photo({ id })
    Post(id).set(post)
  }
})()
