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
        <button className="bg-slate-800 text-white p-2 rounded" onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  )
}
