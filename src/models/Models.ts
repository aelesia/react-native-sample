export type TPhoto = {
  height: number
  width: number
  aspectRatio: number
  url: string
}
export type TUser = {
  username: string
  profile_image: string
}

export type TExif = {
  make: string
  model: string
  exposure_time: string
  aperture: string
  focal_length: string
  iso: number
}

export type TPostIndex = {
  id: string
  photo: TPhoto
  user: TUser
  likes: number
  description?: string
}

export type TPost = TPostIndex & {
  views: number
  downloads: number
  createdAt: Date
  exif: TExif
  location: string
}
