import React, { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export default function Theme() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div
        style={{
          width: "400px",
          height: "400px",
          backgroundColor: theme ? "white " : "black",
          color: theme ? "black" : "white",
        }}
      >
        {theme ? "Light" : "Dark"} theme
      </div>
    </div>
  )
}
