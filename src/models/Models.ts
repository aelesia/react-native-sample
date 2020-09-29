type Photo = {
  url: string
}
type User = {}

export type Post = {
  photo: Photo
  user: User
  likes: number
  description: string
}
