import httyp from 'httyp'

export async function _searchPhotos(req: SearchPhotosReq): Promise<SearchPhotosRes> {
  return (
    await httyp
      .url('https://api.unsplash.com/search/photos')
      .params<SearchPhotosReq>(req)
      .get<any>()
  ).data
}

export type SearchPhotosReq = {
  page: number
  query: string
  client_id: string
}

export type SearchPhotosRes = {
  total: number
  total_pages: number
  results: Result[]
}

interface Result {
  id: string
  created_at: Date
  updated_at: Date
  promoted_at: Date | null
  width: number
  height: number
  color: string
  blur_hash: string
  description: null | string
  alt_description: string
  urls: Urls
  links: ResultLinks
  categories: any[]
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: Sponsorship | null
  user: User
  tags: Tag[]
}

interface ResultLinks {
  self: string
  html: string
  download: string
  download_location: string
}

interface Sponsorship {
  impression_urls: any[]
  tagline: string
  tagline_url: string
  sponsor: User
}

interface User {
  id: string
  updated_at: Date
  username: string
  name: string
  first_name: string
  last_name: null | string
  twitter_username: null | string
  portfolio_url: null | string
  bio: null | string
  location: null | string
  links: UserLinks
  profile_image: ProfileImage
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  accepted_tos: boolean
}

interface UserLinks {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

interface ProfileImage {
  small: string
  medium: string
  large: string
}

interface Tag {
  type: Type
  title: string
  source?: Source
}

interface Source {
  ancestry: Ancestry
  title: string
  subtitle: string
  description: string
  meta_title: string
  meta_description: string
  cover_photo: CoverPhoto
}

interface Ancestry {
  type: Category
  category: Category
  subcategory?: Category
}

interface Category {
  slug: string
  pretty_slug: string
}

interface CoverPhoto {
  id: string
  created_at: Date
  updated_at: Date
  promoted_at: Date | null
  width: number
  height: number
  color: string
  blur_hash?: string
  description: null | string
  alt_description: string
  urls: Urls
  links: ResultLinks
  categories: any[]
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: null
  user: User
}

interface Urls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
}

enum Type {
  LandingPage = 'landing_page',
  Search = 'search'
}
