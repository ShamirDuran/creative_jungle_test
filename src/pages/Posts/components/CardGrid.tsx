import { useContext } from 'react'
import { Card } from './Card'
import { PostsContext } from '../PostsPage'
import { useInfiniteScroll } from '../../../hooks'
import InfiniteScroll from 'react-infinite-scroll-component'

const itemsPerPage = 15

/**
 * Componente que renderiza el listado de Cards
 * @returns Listado de Cards
 */
export const CardGrid = () => {
  const { posts } = useContext(PostsContext)
  const { items: pageItems, hasMore, loadMore } = useInfiniteScroll(posts, itemsPerPage)

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
    <div className='container' style={{ width: '100%', flex: 1 }}>
      <InfiniteScroll
        className='home__card_grid'
        dataLength={pageItems.length}
        next={loadMore}
        hasMore={hasMore}
        loader={
          <h4
            style={{
              display: 'flex',
              justifyContent: 'center ',
              alignItems: 'center',
              gridColumn: '1 / -1',
              width: '100%',
            }}
          >
            Loading...
          </h4>
        }
      >
        {pageItems.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </InfiniteScroll>
    </div>
  )
}
