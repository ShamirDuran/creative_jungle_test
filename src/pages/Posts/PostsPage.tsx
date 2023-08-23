import { createContext } from 'react'
import { InputFilter, BussinesName, Footer } from '../../components'
import { usePosts } from '../../hooks'
import { PostsContextType } from '../../interfaces'
import { CardGrid } from './components/CardGrid'
import './styles.css'

export const PostsContext = createContext({} as PostsContextType)
const { Provider } = PostsContext

export const PostsPage = () => {
  const { posts, removePost, handleChangeFilterValue } = usePosts()

  return (
    <div
      style={{
        paddingTop: 35,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        margin: '0 auto',
      }}
    >
      <BussinesName />

      <Provider
        value={{
          posts,
          removePost,
          filterPostsById: handleChangeFilterValue,
        }}
      >
        <div style={{ marginTop: 24, marginBottom: '1.5rem', padding: '0px 5px' }}>
          <InputFilter />
        </div>

        <CardGrid />
      </Provider>

      <Footer />
    </div>
  )
}
