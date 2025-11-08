import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const activeLinkClass = 'text-indigo-600 border-b-2 border-indigo-600';
  const inactiveLinkClass = 'text-gray-500 hover:text-indigo-600 border-b-2 border-transparent';

  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    `${isActive ? activeLinkClass : inactiveLinkClass} transition-all duration-300 font-medium py-2 text-sm md:text-base`;

  return (
    <header className="bg-white/80 shadow-md sticky top-0 z-10 backdrop-blur-md">
      <nav className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-indigo-700">
            <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span className="hidden sm:inline">React SPA</span>
            </div>
        </NavLink>
        <ul className="flex space-x-4 md:space-x-8">
          <li>
            <NavLink to="/" className={linkStyle}>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink to="/info" className={linkStyle}>
              Info
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkStyle}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
