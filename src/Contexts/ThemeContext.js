import { createContext, useState } from "react"
// import { FaRegMoon, FaSun  } from "react-icons/fa";

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')
    // const [icon, setIcon] = useState('FaRegMoon')

    const toggleTheme = () =>  {        
        setTheme(prev => (prev === 'light' ? 'dark': 'light'))
    }

    return (
        <ThemeContext.Provider value = {{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext