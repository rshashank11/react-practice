import React, { useState } from "react"

export const ThemeContext = React.createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(false)

  function toggleTheme() {
    setTheme((theme) => !theme)
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
