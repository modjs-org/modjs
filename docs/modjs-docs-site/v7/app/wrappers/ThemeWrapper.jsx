import React, { useEffect, useState } from 'react'
import { ModThemeProvider } from '@modjs/utils'

import ThemeContext from '../context/ThemeContext'
// import darkTheme from '../../public/assets/themes/darkTheme'
import lightTheme from '../../public/assets/themes/lightTheme'

const ThemeWrapper = ({ children }) => {
    const [theme, setTheme] = useState(lightTheme) //TODO: change theme based on time of day

    const value = {
        theme,
        setTheme,
    }

    useEffect(() => {
        const currentTheme = JSON.parse(localStorage.getItem('theme'))
        setTheme(currentTheme)
        if (!currentTheme) {
            setTheme(lightTheme) //TODO: change theme based on time of day
        }
    }, [])
    return (
        <ThemeContext.Provider value={value}>
            <ModThemeProvider theme={theme}>{children}</ModThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeWrapper
