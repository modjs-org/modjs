import React, { useEffect, useState } from 'react'
import { ModThemeProvider } from '@modjs/utils'

import ThemeContext from '../context/ThemeContext'
// import darkTheme from '../../public/assets/themes/darkTheme'
import darkTheme from '../../public/assets/themes/darkTheme'

const ThemeWrapper = ({ children }) => {
    const [theme, setTheme] = useState(darkTheme) //TODO: change theme based on time of day

    const value = {
        theme,
        setTheme,
    }

    useEffect(() => {
        const currentTheme = JSON.parse(localStorage.getItem('theme'))
        setTheme(currentTheme)
        if (!currentTheme) {
            setTheme(darkTheme) //TODO: change theme based on time of day
        }
    }, [])
    return (
        <ThemeContext.Provider value={value}>
            <ModThemeProvider theme={theme}>{children}</ModThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeWrapper
