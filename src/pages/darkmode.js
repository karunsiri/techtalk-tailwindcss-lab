import React, { useContext, useEffect } from "react"
import { GlobalContext } from "../components/GlobalContextProvider"

const DarkModePage = () => {
  const { mode, setMode } = useContext(GlobalContext)

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
      <div className="container mx-auto rounded w-1/2 p-8 bg-white shadow-lg dark:shadow-slate-400 text-slate-600 dark:bg-slate-800 dark:text-slate-200">
        <h1 className="text-3xl font-semibold mb-4">
          Hello Tailwind
        </h1>

        <p className="p-4 border border-pink-400 rounded-lg mb-4">
          This is the test text. Interesting, isn't it?
        </p>

        <button
          className={`
            p-4 rounded bg-slate-600 text-slate-50 transition ease-in-out duration-150
            hover:bg-slate-300 hover:text-slate-700
          `}
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        >
          Click Me!
        </button>
      </div>
    </div>
  )
}

export default DarkModePage
