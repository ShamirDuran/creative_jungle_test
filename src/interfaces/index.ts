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
