import Toast from '../../../lib/toast/Toast'
import { Post } from '../../models/Models'
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
    async (req: Req<SearchPhotosReq>): Promise<Post[]> => {
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
}
