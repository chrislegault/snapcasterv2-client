import React from 'react';
import Navbar from './components/Navbar';
import { useAtomValue } from 'jotai';
import { darkModeAtom } from './atoms';
import ResponsiveNav from './components/ResponsiveNav';
export default function Layout({ children }) {
  const darkMode = useAtomValue(darkModeAtom);

  return (
    <>
      <div className={`${darkMode && 'dark'}`}>
        {/* background for whole app */}
        <div className="absolute bg-white dark:bg-darkBackground min-h-screen h-full w-full dark:text-white">
          <ResponsiveNav />
          {children}
        </div>
      </div>
    </>
  );
}
