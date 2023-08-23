import { MdOutlineClose } from 'react-icons/md'
import { Post } from '../../../api/models'
import { useContext } from 'react'
import { PostsContext } from '../PostsPage'
const SaladImage = require('../../../assets/images/salad.jpg')

interface Props {
  post: Post
}

export const Card = ({ post }: Props) => {
  const { removePost } = useContext(PostsContext)

  return (
    <div className='home__card'>
      <div className='home__card_header'>
        <img src={SaladImage} alt='Salad' />
        <button onClick={() => removePost(post.id.toString())}>
          <MdOutlineClose />
        </button>
      </div>

      <div className='home__card_content'>
        <h3>
          {post.id} - {post.title}
        </h3>
        <p>{post.body}</p>
      </div>
    </div>
  )
}
