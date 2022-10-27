import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="flex items-center flex-wrap bg-darkerBackground text-white h-12 px-2">
      <Link to="/">
        <img src="logo.png" alt="logo" className="w-24" />
      </Link>

      <div className="flex-grow" />
      {/* Hamburger button */}
      <button
        className="inline-flex p-3 hover:bg-darkerBackground rounded md:hidden text-white ml-auto hover:text-white outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* hamburget menu dropdown */}

      <div
        className={`${
          isOpen ? '' : 'hidden'
        }   w-full md:hidden`}
      >
        {/* background */}
        <div className="px-2 pt-2 pb-3 space-y-1 bg-darkerBackground">



        <div className="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start  flex flex-col md:h-auto">
          <Link
            to="/"
            className="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-darkerBackground hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-darkerBackground hover:text-white"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-darkerBackground hover:text-white"
          >
            Contact
          </Link>
          <DarkModeToggle />
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/" className="hover:text-primary">
          Home
        </Link>

        <Link to="/multi-search" className="hover:text-primary">
          Multi Search
        </Link>

        <Link to="/about" className="hover:text-primary">
          About
        </Link>

        <DarkModeToggle />
      </div>
    </nav>
  );
}
