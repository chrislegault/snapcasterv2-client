import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {
  return (
      <nav className="flex items-center flex-wrap bg-darkerBackground text-white h-12 px-2">
        <Link to="/">
          <img src="logo.png" alt="logo" className="w-24" />
        </Link>

        <div className="px-2" />

        <Link to="/" className="hover:text-primary">
          Home
        </Link>

        <div className="px-2" />

        <Link to="/multi-search" className="hover:text-primary">
          Multi Search
        </Link> 
      
        <div className="px-2" />
        <Link to="/about" className="hover:text-primary">
          About
        </Link>
        <div className="px-2" />


        <DarkModeToggle />
      </nav>
  );
}
