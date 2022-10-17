import React, { useContext } from 'react'
import { RadioGroup } from '@headlessui/react'
import { GlobalContext } from "./GlobalContextProvider"

const options = [
  {
    value: "",
    label: "Default",
  },
  {
    value: "blackpink",
    label: "Blackpink",
  },
  {
    value: "seabreeze",
    label: "Seabreeze",
  },
]

const ThemeSelector = () => {
  let { theme, setTheme } = useContext(GlobalContext)

  return (
    <RadioGroup value={theme} onChange={setTheme} className="my-4">
      <RadioGroup.Label>Choos Theme</RadioGroup.Label>
      {options.map((opt) => (
        <RadioGroup.Option value={opt.value} key={opt.value}>
          {({ checked }) => (
            <div className="p-4 border border-base">
              {opt.label} <span className={`${!checked && 'hidden'}`}>✅</span>
            </div>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  )
}

export default ThemeSelector
