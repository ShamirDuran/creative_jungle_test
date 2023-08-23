import { ThemeProvider } from '../context'
import { PostsPage } from '../pages'

const App = () => {
  return (
    <ThemeProvider>
      <PostsPage />
    </ThemeProvider>
  )
}

export default App
