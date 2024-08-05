'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../styles/theme'

interface ThemeContextProps {
  theme: string
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  const currentTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export { ThemeProvider, useTheme }
