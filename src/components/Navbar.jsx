import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md p-4">
      <div className="container mx-auto max-w-[95%] h-20 flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        
        {/* Logo */}
        <Link to="/">
          <object 
            type="image/svg+xml"
            data={assets.logo} 
            alt="logo" 
            className="max-w-[140px] h-auto md:max-w-[180px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-500 text-base gap-8">
          <li>
            <Link to="/productuud" className="hover:text-gray-400">Бүтээгдэхүүн</Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-400">Компани</Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-400">Нийтлэл</Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/choose" className="inline-block rounded-full border-[1.3px] border-black px-6 py-3 bg-gray-100 hover:bg-customGreen hover:border-customGreen hover:text-white text-sm font-medium">
            Сонгох
          </Link>
          <Link to="/contact" className="px-6 py-3 bg-customGreen shadow-[0_4px_9px_-4px_#14a44d] rounded-full hover:bg-emerald-500 text-customGray text-sm font-medium">
            Хамтрах
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
