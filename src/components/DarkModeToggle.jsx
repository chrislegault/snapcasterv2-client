import React from 'react'
import { useAtom } from 'jotai'
import { darkModeAtom } from '../atoms'

export default function DarkModeToggle() {
    const [darkMode, setDarkMode] = useAtom(darkModeAtom)
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        console.log("Darkmode atom is now: ", darkMode)
    }

  return (
    <div>
         <div className="flex items-center md:col-span-1">
              <span className="mx-2">Dark Mode</span>
              <label
                htmlFor="default-toggle"
                className="inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={darkMode}
                  id="default-toggle"
                  className="sr-only peer"
                  onClick={toggleDarkMode}
                />
                <div className="w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              </label>
            </div>
    </div>
  )
}
