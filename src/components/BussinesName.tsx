import { useTheme } from '../hooks'

export const BussinesName = () => {
  const { theme } = useTheme()

  const styles: Record<string, React.CSSProperties> = {
    container: {
      color: theme.colors.primary,
      fontSize: 30,
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
    },
    background: {
      borderRadius: 17,
      background: theme.colors.lightGreen,
      padding: '5px 12px',
    },
  }

  return (
    <h1 style={styles.container}>
      Creative <span style={styles.background}>jungle</span>
    </h1>
  )
}
