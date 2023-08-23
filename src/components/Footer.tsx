import { useTheme } from '../hooks'

export const Footer = () => {
  const { theme } = useTheme()
  // current year
  const currentYear = new Date().getFullYear()

  return (
    <div
      style={{
        backgroundColor: theme.colors.primary,
        width: '100%',
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
        fontWeight: 400,
        lineHeight: 4,
        letterSpacing: 0,
        color: '#fff',
      }}
    >
      {`Creative jungle - ${currentYear}`}
    </div>
  )
}
