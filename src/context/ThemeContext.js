import {useState, createContext, useContext} from 'react'

const ThemeContext = createContext()

const ThemeProvider =({children})=>{//destructuring
    const [theme, setTheme]= useState('light')

    return (
      //It will change dynamically
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
}

// Custom hook
const useTheme=()=> useContext(ThemeContext)

export {useTheme, ThemeProvider};