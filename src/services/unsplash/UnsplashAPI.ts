import Toast from '../../../lib/toast/Toast'
import { TPost, TPostIndex } from '../../models/Models'
import { _photo, PhotoReq } from './api/_photo'
import { _searchPhotos, SearchPhotosReq } from './api/_searchPhotos'

type Req<T> = Omit<T, 'client_id'>

function tryToastError<T extends Function>(func: T): T {
  // @ts-ignore
  return async (...params: any[]) => {
    try {
      return await func(...params)
    } catch (e) {
      console.error(e)
      Toast.error(e)
    }
  }
}

export class UnsplashAPI {
  private client_id: string
  constructor(client_id: string) {
    this.client_id = client_id
  }

  searchPhotos = tryToastError(
    async (req: Req<SearchPhotosReq>): Promise<TPostIndex[]> => {
      const result = await _searchPhotos({ ...req, client_id: this.client_id })
      return result.results.map(it => ({
        id: it.id,
        description: it.description ?? undefined,
        likes: it.likes,
        user: {
          username: it.user.username,
          profile_image: it.user.profile_image.small
        },
        photo: {
          height: it.height,
          width: it.width,
          aspectRatio: it.width / it.height,
          url: it.urls.regular
        }
      }))
    }
  )

  photo = tryToastError(
    async (req: Req<PhotoReq>): Promise<TPost> => {
      const it = await _photo({ ...req, client_id: this.client_id })
      return {
        id: it.id,
        description: it.description ?? undefined,
        user: {
          username: it.user.username,
          profile_image: it.user.profile_image.small
        },
        photo: {
          height: it.height,
          width: it.width,
          aspectRatio: it.width / it.height,
          url: it.urls.regular
        },
        location: it.location?.title,
        likes: it.likes,
        views: it.views,
        downloads: it.downloads,
        createdAt: it.created_at,
        exif: it.exif
      }
    }
  )
}
