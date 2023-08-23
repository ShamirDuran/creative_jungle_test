import { Post } from '../api/models'

export type Theme = {
  colors: ThemeColors
}

type ThemeColors = {
  primary: string
  secondary: string
  lightBlue: string
  lightGreen: string
  lightGray: string
}

export type ThemeContextType = {
  theme: Theme
  updateTheme: (updatedTheme: Partial<Theme>) => void
}

export type PostsContextType = {
  posts: Post[]
  removePost: (id: string) => void
  filterPostsById: (value: string) => void
}
