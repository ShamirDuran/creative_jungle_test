import { useContext } from 'react'
import { Card } from './Card'
import { PostsContext } from '../PostsPage'

/**
 * Componente que renderiza el listado de Cards
 * @returns Listado de Cards
 */
export const CardGrid = () => {
  const { posts } = useContext(PostsContext)

  if (!posts.length) {
    return (
      <div
        style={{
          flex: 1,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h3>No hay posts</h3>
      </div>
    )
  }

  return (
    <div className='home__card_grid container'>
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  )
}
