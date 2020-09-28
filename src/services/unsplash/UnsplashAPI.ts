import { _searchPhotos, SearchPhotosReq } from './api/_searchPhotos'

type Req<T> = Omit<T, 'client_id'>

export class UnsplashAPI {
  private client_id: string
  constructor(client_id: string) {
    this.client_id = client_id
  }

  searchPhotos = (req: Req<SearchPhotosReq>) => _searchPhotos({ ...req, client_id: this.client_id })
}
