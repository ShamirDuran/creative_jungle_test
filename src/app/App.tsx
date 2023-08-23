import { ThemeProvider } from '../context'
import { HomePage } from '../pages'

const App = () => {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  )
}

export default App
