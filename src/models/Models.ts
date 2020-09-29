export type Photo = {
  url: string
}
export type User = {
  username: string
  profile_image: Photo
}

export type Post = {
  photo: Photo
  user: User
  likes: number
  description: string
}
