import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { IoClose } from 'react-icons/io5';
import { FiMenu } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    if (isOpen) {
      // Disable vertical scrolling
      document.body.style.overflowY = 'hidden';
    } else {
      // Enable vertical scrolling
      document.body.style.overflowY = 'auto';
    }

    return () => {
      // Clean up - enable vertical scrolling when component unmounts
      document.body.style.overflowY = 'auto';
    };
  }, [isOpen]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  const navItems = (
    <div
      className={clsx(
        'navs flex flex-col items-center md:flex-row gap-6 p-[15%] md:p-0 shadow-md md:shadow-none absolute md:static w-full md:w-auto duration-500 md:duration-0 ease-linear nav-items navbar-for-mob z-10',
        isOpen ? 'top-18 left-0' : '-top-full left-0',
      )}
    >
      <NavLink
        to="/dashboard"
        onClick={() => handleLinkClick('dashboard')}
        className={
          activeLink === 'dashboard'
            ? 'md:border-b-2 md:border-purple-700 text-white'
            : 'border-2 border-orange-500 text-white px-4 py-2 rounded-xl'
        }
      >
        <p className="text-orange-700">Become a Dealer</p>
      </NavLink>
    </div>
  );

  return (
    <nav className="top-0 left-0 right-0 z-20 p-2 bg-white">
      <div className="wrapper h-[10vh] flex items-center justify-between">
        {/* title */}
        <a href="/">
          <img src={logo} alt="Floor Plan" className="w-50" />
        </a>

        {/* toggle nav */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-[5%] top-[3%] md:hidden text-2xl"
        >
          {isOpen ? <IoClose /> : <FiMenu />}
        </button>

        {/* links */}
        {navItems}
      </div>
    </nav>
  );
};

export default Navbar;
