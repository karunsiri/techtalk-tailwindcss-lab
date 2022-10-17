import { useState, useEffect } from "react"

export const useStickyState = (name, defaultValue) => {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    const storedValue = localStorage.getItem(name)

    if (storedValue !== null) {
      setValue(storedValue)
    }
    else {
      localStorage.setItem(name, defaultValue)
      setValue(defaultValue)
    }

  }, [name, defaultValue])

  return [
    value,
    (newValue) => {
      localStorage.setItem(name, newValue)
      setValue(newValue)
    }
  ]
}
