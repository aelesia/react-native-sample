import httyp from 'httyp'

export async function _photo(req: PhotoReq): Promise<PhotoRes> {
  return (
    await httyp
      .url(`https://api.unsplash.com/photos/${req.id}`)
      .params({ client_id: req.client_id })
      .get<any>()
  ).data
}

export type PhotoReq = {
  id: string
  client_id: string
}

export interface PhotoRes {
  id: string
  created_at: Date
  updated_at: Date
  promoted_at: null
  width: number
  height: number
  color: string
  blur_hash: string
  description: null
  alt_description: string
  urls: Urls
  links: CommentPaginatedListLinks
  categories: any[]
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: Sponsorship
  user: SponsorClass
  exif: Exif
  location: Location
  meta: Meta
  tags: CommentPaginatedListTag[]
  related_collections: RelatedCollections
  views: number
  downloads: number
}

export interface Exif {
  make: string
  model: string
  exposure_time: string
  aperture: string
  focal_length: string
  iso: number
}

export interface CommentPaginatedListLinks {
  self: string
  html: string
  download: string
  download_location: string
}

export interface Location {
  title: null
  name: null
  city: null
  country: null
  position: Position
}

export interface Position {
  latitude: null
  longitude: null
}

export interface Meta {
  index: boolean
}

export interface RelatedCollections {
  total: number
  type: string
  results: Result[]
}

export interface Result {
  id: number
  title: string
  description: null
  published_at: Date
  last_collected_at: Date
  updated_at: Date
  curated: boolean
  featured: boolean
  total_photos: number
  private: boolean
  share_key: null | string
  tags: ResultTag[]
  links: ResultLinks
  user: ResultUser
  cover_photo: ResultCoverPhoto
  preview_photos: PreviewPhoto[]
}

export interface ResultCoverPhoto {
  id: string
  created_at: Date
  updated_at: Date
  promoted_at: Date
  width: number
  height: number
  color: string
  blur_hash: string
  description: null | string
  alt_description: string
  urls: Urls
  links: CommentPaginatedListLinks
  categories: any[]
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: null
  user: PurpleUser
}

export interface Urls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
}

export interface PurpleUser {
  id: string
  updated_at: Date
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username: null | string
  portfolio_url: string
  bio: string
  location: null | string
  links: UserLinks
  profile_image: SponsorProfileImage
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  accepted_tos: boolean
}

export interface UserLinks {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

export interface SponsorProfileImage {
  small: string
  medium: string
  large: string
}

export interface ResultLinks {
  self: string
  html: string
  photos: string
  related: string
}

export interface PreviewPhoto {
  id: string
  created_at: Date
  updated_at: Date
  urls: Urls
}

export interface ResultTag {
  type: TypeEnum
  title: string
  source?: PurpleSource
}

export interface PurpleSource {
  ancestry: PurpleAncestry
  title: string
  subtitle: string
  description: string
  meta_title: string
  meta_description: string
  cover_photo: PurpleCoverPhoto
}

export interface PurpleAncestry {
  type: TypeClass
  category: PurpleCategory
  subcategory?: SubcategoryClass
}

export interface PurpleCategory {
  slug: CategorySlug
  pretty_slug: CategoryPrettySlug
}

export enum CategoryPrettySlug {
  Animals = 'Animals',
  Color = 'Color',
  People = 'People'
}

export enum CategorySlug {
  Animals = 'animals',
  Colors = 'colors',
  People = 'people'
}

export interface SubcategoryClass {
  slug: string
  pretty_slug: string
}

export interface TypeClass {
  slug: TypeSlug
  pretty_slug: TypePrettySlug
}

export enum TypePrettySlug {
  HDWallpapers = 'HD Wallpapers',
  Images = 'Images'
}

export enum TypeSlug {
  Images = 'images',
  Wallpapers = 'wallpapers'
}

export interface PurpleCoverPhoto {
  id: string
  created_at: Date
  updated_at: Date
  promoted_at: Date | null
  width: number
  height: number
  color: string
  description: null | string
  alt_description: null | string
  urls: Urls
  links: CommentPaginatedListLinks
  categories: any[]
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: null
  user: FluffyUser
  blur_hash?: string
}

export interface FluffyUser {
  id: string
  updated_at: Date
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username: null | string
  portfolio_url: null | string
  bio: null | string
  location: null | string
  links: UserLinks
  profile_image: PurpleProfileImage
  instagram_username: null | string
  total_collections: number
  total_likes: number
  total_photos: number
  accepted_tos: boolean
}

export interface PurpleProfileImage {
  small: string
  medium: string
  large: string
}

export enum TypeEnum {
  LandingPage = 'landing_page',
  Search = 'search'
}

export interface ResultUser {
  id: string
  updated_at: Date
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username: null
  portfolio_url: null
  bio: null | string
  location: null | string
  links: UserLinks
  profile_image: PurpleProfileImage
  instagram_username: null | string
  total_collections: number
  total_likes: number
  total_photos: number
  accepted_tos: boolean
}

export interface Sponsorship {
  impression_urls: any[]
  tagline: string
  tagline_url: string
  sponsor: SponsorClass
}

export interface SponsorClass {
  id: string
  updated_at: Date
  username: string
  name: string
  first_name: string
  last_name: null
  twitter_username: string
  portfolio_url: string
  bio: string
  location: string
  links: UserLinks
  profile_image: SponsorProfileImage
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  accepted_tos: boolean
}

export interface CommentPaginatedListTag {
  type: TypeEnum
  title: string
  source?: FluffySource
}

export interface FluffySource {
  ancestry: FluffyAncestry
  title: string
  subtitle: string
  description: string
  meta_title: string
  meta_description: string
  cover_photo: FluffyCoverPhoto
}

export interface FluffyAncestry {
  type: TypeClass
  category: SubcategoryClass
  subcategory?: SubcategoryClass
}

export interface FluffyCoverPhoto {
  id: string
  created_at: Date
  updated_at: Date
  promoted_at: Date | null
  width: number
  height: number
  color: string
  description: null | string
  alt_description: string
  urls: Urls
  links: CommentPaginatedListLinks
  categories: any[]
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: null
  user: TentacledUser
  blur_hash?: string
}

export interface TentacledUser {
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
  profile_image: PurpleProfileImage
  instagram_username: null | string
  total_collections: number
  total_likes: number
  total_photos: number
  accepted_tos: boolean
}
