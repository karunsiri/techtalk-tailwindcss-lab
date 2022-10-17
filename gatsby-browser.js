import './src/styles/global.css'

import React from "react"
import { GlobalContextProvider } from "./src/components/GlobalContextProvider"

// To wrap Gatsby root element inside global-state-aware context
export const wrapRootElement = ({ element }) => {
  return (
    <GlobalContextProvider>
      {element}
    </GlobalContextProvider>
  )
}
