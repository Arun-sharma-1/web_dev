import React, {useState, createContext, useContext } from 'react'

export const ThemeContext = createContext();
const ThemeProvider = ({children}) => {

    const [themeMode, setThemeMode] = useState("light")

    const lightTheme = () => {
        setThemeMode("light")
    }

    const darkTheme = () => {
        setThemeMode("dark")
    }

    const value = {
        themeMode,
        darkTheme,
        lightTheme
    }
    return <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
        {children}
    </ThemeContext.Provider>
}
export default ThemeProvider;
// export const ThemeContext = createContext({
//     themeMode:"light",
//     darkTheme:()=>{},
//     lightTheme:()=>{},
// })
// export const ThemeProvider = ThemeContext.Provider

// export default function useTheme() {
//     return useContext(ThemeContext)
// }

