import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto max-w-[95%] h-20 flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        
        {/* Logo */}
        <Link to="/">
          <img 
            src={assets.logo} 
            alt="logo" 
            className="w-[140px] h-auto md:w-[180px]" 
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 text-xl gap-8">
          <li><Link to="/" className="hover:text-gray-400">Buteegdehuun</Link></li>
          <li><Link to="/about" className="hover:text-gray-400">kompany</Link></li>
          <li><Link to="/projects" className="hover:text-gray-400">Niitlel</Link></li>
        
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-6 py-3 bg-gray-100 rounded-full hover:bg-gray-200 text-lg font-medium">
            Songoh
          </button>
          <Link to="/contact" className="px-6 py-3 bg-customGreen shadow-md rounded-full hover:bg-emerald-500 text-customGray text-lg font-medium">
            Holboh
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4">
          <ul className="space-y-4 text-gray-700 font-medium">
            <li><Link to="/" className="block py-2" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" className="block py-2" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/projects" className="block py-2" onClick={() => setMenuOpen(false)}>Projects</Link></li>
            <li><Link to="/testimonials" className="block py-2" onClick={() => setMenuOpen(false)}>Testimonials</Link></li>
            <li>
              <Link to="/contact" className="block py-3 text-center bg-customGreen rounded-full text-white hover:bg-emerald-500" onClick={() => setMenuOpen(false)}>
                Holboh
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
