import React from 'react';
import Navbar from './components/Navbar';
import { useAtomValue } from 'jotai';
import { darkModeAtom } from './atoms';
export default function Layout({ children }) {
  const darkMode = useAtomValue(darkModeAtom);

  return (
    <>
      <div className={`${darkMode && 'dark'}`}>
        {/* background for whole app */}
        <div className="bg-white dark:bg-darkBackground min-h-screen h-full dark:text-white">
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
}
