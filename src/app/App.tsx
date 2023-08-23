import { Toaster } from 'sonner'
import { ThemeProvider } from '../context'
import { PostsPage } from '../pages'

const App = () => {
  return (
    <>
      <Toaster position='top-right' richColors expand />
      <ThemeProvider>
        <PostsPage />
      </ThemeProvider>
    </>
  )
}

export default App
