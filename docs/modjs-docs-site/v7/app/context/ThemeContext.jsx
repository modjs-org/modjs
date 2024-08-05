import { createContext } from 'react'
import darkTheme from '../../public/assets/themes/darkTheme'

const ThemeContext = createContext({
    theme: darkTheme,
    setTheme: () => {},
})

export default ThemeContext
