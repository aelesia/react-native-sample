export type Photo = {
  height: number
  width: number
  aspectRatio: number
  url: string
}
export type User = {
  username: string
  profile_image: string
}

export type Post = {
  id: string
  photo: Photo
  user: User
  likes: number
  description?: string
}
