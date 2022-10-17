import React, { useContext, useEffect } from "react"
import { GlobalContext } from "../components/GlobalContextProvider"
import ThemeSelector from "../components/ThemeSelector"

const DarkModePage = () => {
  const { mode, setMode } = useContext(GlobalContext)
  const { theme } = useContext(GlobalContext)

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }
  }, [mode])

  return (
    <div className="grid h-screen place-items-center">
      <div
        className={`
          container mx-auto rounded w-1/2 p-8
          bg-base shadow-lg shadow-base text-base
          ${mode === 'dark' && 'theme-dark'}
          theme-${theme}
        `}
      >
        <h1 className="text-3xl font-semibold mb-4">
          Hello Tailwind
        </h1>

        <p className="p-4 border border-base rounded-lg mb-4">
          This is the test text. Interesting, isn't it?
        </p>

        <button
          className={`
            p-4 rounded bg-slate-600 text-slate-50 transition ease-in-out duration-150
            hover:bg-slate-300 hover:text-slate-700
          `}
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        >
          Toggle Dark Mode
        </button>

        <ThemeSelector />
      </div>
    </div>
  )
}

export default DarkModePage
