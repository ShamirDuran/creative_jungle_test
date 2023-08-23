import SearchIcon from '../assets/icons/iconamoon_search.svg'
import { useTheme } from '../hooks'

/**
 * Componente que renderiza el input de búsqueda
 * @description Se dejo componente porque puede ser usado en diferentes vistas?
 */
export const InputFilter = () => {
  const { theme } = useTheme()

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
      width: 320,
      height: 46,
      position: 'relative',
      padding: '0 15px',
      margin: '24px 0px',
    },
    input: {
      border: 0,
      outline: 'none',
      width: '100%',
      fontSize: 15,
      marginRight: 5,
      color: theme.colors.lightGray,
    },
    iconButton: {
      border: 0,
      background: 'transparent',
    },
  }

  return (
    <div style={styles.container}>
      <input type='text' placeholder='Buscar' style={styles.input} />
      <button style={styles.iconButton}>
        <img src={SearchIcon} alt='Search icon' />
      </button>
    </div>
  )
}
