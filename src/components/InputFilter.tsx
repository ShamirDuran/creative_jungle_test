import { useContext } from 'react'
import SearchIcon from '../assets/icons/iconamoon_search.svg'
import { useTheme } from '../hooks'
import { PostsContext } from '../pages/Posts'

/**
 * Componente que renderiza el input de búsqueda
 * @description Se dejo componente porque puede ser usado en diferentes vistas?
 */
export const InputFilter = () => {
  const { theme } = useTheme()
  const { filterPostsById } = useContext(PostsContext)

  const styles: Record<string, React.CSSProperties> = {
    container: {
      borderRadius: 41,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.colors.lightBlue,
      background: '#FFF',
      boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      position: 'relative',
      padding: '0 15px',
    },
    input: {
      border: 0,
      outline: 'none',
      fontSize: 15,
      flex: 1,
      marginRight: 5,
      width: '100%',
    },
    iconButton: {
      border: 0,
      background: 'transparent',
    },
  }

  return (
    <div style={styles.container} className='input_search'>
      <input
        type='text'
        placeholder='Buscar'
        style={styles.input}
        onChange={(e) => filterPostsById(e.target.value)}
      />

      <button style={styles.iconButton}>
        <img src={SearchIcon} alt='Search icon' />
      </button>
    </div>
  )
}
