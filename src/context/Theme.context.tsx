import { createContext, useState } from 'react'
import { Theme, ThemeContextType } from '../interfaces'

/**
 * Contexto que se encarga de proveer a todos los componentes de la aplicación el tema actual
 * @description No lo implemente en todos los componentes para mostrar diferentes practicas al
 * aplicar estilos. Usando .css se declararon variables, y usando .js se uso el contexto
 */

const initialTheme: Theme = {
  colors: {
    // main colors
    primary: '#164B60',
    secondary: '#1B6B93',

    // additional colors
    lightBlue: '#d6eaf8',
    lightGreen: '#a2ff86',
    lightGray: '#C5C5C5',
  },
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: initialTheme,
  updateTheme: () => {},
})

// Proveedor de tema que envuelve la aplicación
export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState(initialTheme)

  const updateTheme = (updatedTheme: Partial<Theme>) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      ...updatedTheme,
    }))
  }

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
