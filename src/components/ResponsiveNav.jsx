import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

export default function ResponsiveNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <nav className="bg-gray-400 px-2 md:px-4 py-1 dark:bg-darkerBackground">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to='/' className="flex items-center">
          <img src="logo.png" className="mr-3 h-6 md:h-7" alt="snapcaster logo" />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ringdarkerBackground"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${isOpen ? '' : 'hidden'}  w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:border-0 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-white">
            <li>
              <Link
                to="/"
                className="nav-link"
              >
                Home
              </Link>{' '}
            </li>

            <li>
              <Link
                to="/sealed-search"
                className="nav-link"
              >
                Sealed Search
              </Link>
            </li>
            <li>
              <Link
                to='/multi-search'
                className="nav-link"
              >
                Multi Search
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="nav-link"
              >
                About
              </Link>
            </li>
            {/* <li>
              <div className="nav-link">
              <DarkModeToggle />
              </div>
            </li> */}
   
          </ul>
        </div>
      </div>
    </nav>
  );
}
