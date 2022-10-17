import React, { createContext } from "react"
import { useStickyState } from "../hooks/useStickyState"
import { globalContextDefaults } from "./globalContextDefaults"

export const GlobalContext = createContext(globalContextDefaults);

export const GlobalContextProvider = ({ children }) => {
  const [mode, setMode] = useStickyState('mode', 'light')
  const [theme, setTheme] = useStickyState('theme', '')

  return (
    <GlobalContext.Provider value={{ mode, setMode, theme, setTheme }}>
      { children }
    </GlobalContext.Provider>
  )
}
