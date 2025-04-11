import { ChevronDownIcon } from '@heroicons/react/20/solid';
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
 

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductDropdown(false);
        setCompanyDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md p-4">
      <div className="container mx-auto max-w-[95%] h-20 flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={assets.logo}
            alt="Logo"
            className="max-w-[140px] h-auto cursor-pointer w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-500 text-base gap-8">
        <li className="relative"
        
         onMouseLeave={() => setDropdownOpen(false)}>
 <Link to="/productuud" 
 ref={dropdownRef}
    className="hover:text-gray-400 flex items-center"
    onClick={() => setProductDropdown((prev) => !prev)}
    onMouseEnter={() => setProductDropdown(true)}

  >
    Бүтээгдэхүүн
    <ChevronDownIcon
      className={`ml-1 w-5 h-5 transition-transform ${productDropdown ? "rotate-180" : ""}`}
    />
  </Link>

  {productDropdown && (
  <ul className="absolute -translate-x-48 -left-24 top-10  z-50 justify-center bg-customGray w-[1177px] h-[200px] shadow-md rounded-md flex py-2">
    <div className='flex flex-row bg-customGray space-x-4 pt-2'>
    <li className='flex flex-col bg-white w-[210px] h-[160px] rounded-md'>
      <Link to="/productuud/type1" className="block px-4 py-2 hover:bg-customGraymore">Xуванцар цонх,haalga</Link>

      <Link to="/productuud/type2" className="block px-4 py-2 hover:bg-gray-100 text-xs">Veka Softline 82</Link>

      <Link to="/productuud/type3" className="block px-4 py-2 hover:bg-gray-100 text-xs">Veka Softline 70</Link>

      <Link to="/productuud/type4" className="block px-4 py-2 hover:bg-gray-100 text-xs">Veka Euroline</Link>
    </li>
    <li className='flex flex-col bg-white w-[210px] h-[160px] rounded-md'>
      <Link to="/productuud/type2" className="block px-4 py-2 hover:bg-customGray">Металл цонх</Link>
      <div className="grid grid-cols-2 gap-2 px-1">
        <h1 className='text-sm '>tsonh</h1>
        <h1 className='text-sm '>haalga</h1>
        <Link to="/productuud/type2" className=" hover:text-customGreen text-[10px]">Alutech ALTW62W</Link>
        <Link to="/productuud/type2" className="  hover:text-customGreen text-[10px]">Alutech ALTW72W</Link>
        <Link to="/productuud/type2" className=" hover:text-customGreen text-[10px]">BENKAM BKT77</Link>
        <Link to="/productuud/type2" className="  hover:text-customGreen text-[10px]">Alutech ALTW62D</Link>
        <Link to="/productuud/type2" className="  hover:text-customGreen text-[10px]">Alutech ALTW72D</Link>
        </div>
    </li>
    <li className='flex flex-col bg-white w-[210px] h-[160px] rounded-md'>
      <Link to="/productuud/type1" className="block px-4 py-2  hover:bg-customGraymore">Металл фасад</Link>
      <Link to="/productuud/type2" className=" px-4   hover:bg-gray-100 text-[10px]">SIBALUX PФ хавтан</Link>
      <Link to="/productuud/type3" className=" px-4  hover:bg-gray-100 text-[10px]">SIBALUX-PФ ПЛЮС хавтан</Link>
      <Link to="/productuud/type4" className=" px-4 hover:bg-gray-100 text-[10px]">SIBALUX A2</Link>
      <Link to="/productuud/type4" className=" px-4  hover:bg-gray-100 text-[10px]">Alucom хавтан</Link>
      <Link to="/productuud/type4" className=" px-4  hover:bg-gray-100 text-[10px]">ThermoWool эрдэст чулуун хөвөн</Link>
    </li>
    <li className='flex flex-col bg-white w-[210px] h-[160px] rounded-md'>
      <Link to="/productuud/type1" className=" px-4 py-2  hover:bg-customGraymore">Шилэн фасад</Link>

      <Link to="/productuud/type2" className=" px-4  hover:bg-gray-100 text-[10px]">Veka Softline 82</Link>

      <Link to="/productuud/type3" className=" px-4 hover:bg-gray-100 text-[10px]">Veka Softline 70</Link>

      <Link to="/productuud/type4" className=" px-4 hover:bg-gray-100 text-[10px]">Veka Euroline</Link>
    </li>
    <li className='flex flex-col bg-white w-[210px] h-[140px] rounded-md'>
      <Link to="/productuud/type4" className="block px-4 py-2 hover:bg-customGray">Grohe</Link>
    </li>
    </div>
  </ul>
  
)}

</li>


          <li className="relative"
          onMouseLeave={() => setDropdownOpen(false)}>
            <Link to={"/kompani"}
            className="hover:text-gray-400 flex items-center"
            ref={dropdownRef}
            onClick={() => setCompanyDropdown((prev) => !prev)}
            onMouseEnter={() =>setCompanyDropdown(true)}
            >
              Компани
              <ChevronDownIcon
                className={`ml-1 w-5 h-5 transition-transform ${companyDropdown ? "rotate-180" : ""}`}
              />
            </Link>
            {companyDropdown && (
              <ul className="absolute -translate-x-64 -left-56 top-10  z-50 justify-center bg-customGray w-[1177px] h-[200px] shadow-md rounded-md flex py-2">
              <div className='flex flex-row bg-customGray space-x-4 pt-2'>
              <li className='flex flex-col bg-white w-[210px] h-[160px] rounded-md'>
                <Link to="/productuud/type1" className="block px-4 py-2 hover:bg-customGraymore">kompanii taniltsuulaga</Link>
              </li>
              <li className='flex flex-col bg-white w-[210px] h-[160px] rounded-md'>
                <Link to="/productuud/type2" className="block px-4 py-2 hover:bg-customGray">Металл цонх</Link>
              </li>
              <li className='flex flex-col bg-white w-[210px] h-[160px] rounded-md'>
                <Link to="/productuud/type1" className="block px-4 py-2  hover:bg-customGraymore">Xуванцар цонх,haalga</Link>
              </li>
              <li className='flex flex-col bg-white w-[210px] h-[160px] rounded-md'>
                <Link to="/productuud/type1" className="block px-4 py-2  hover:bg-customGraymore">Xуванцар цонх,haalga</Link>
              </li>
              <li className='flex flex-col bg-white w-[210px] h-[140px] rounded-md'>
                <Link to="/productuud/type4" className="block px-4 py-2 hover:bg-customGray">holboo barih</Link>
              </li>
              </div>
            </ul>
            )}
          </li>

          <li>
            <Link to="/niitlel" className="hover:text-gray-400">
              Нийтлэл
            </Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <div
            className="relative inline-block text-left"
            role="button"
            tabIndex={0}
            onClick={toggleDropdown}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") toggleDropdown();
            }}
          >
            <button
              className={`rounded-full border-[1.3px] w-40 px-6 py-3 transition-all text-sm font-medium flex items-center justify-between ${
                dropdownOpen
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white border-black text-black"
              }`}
            >
              Сонгох
              <ChevronDownIcon
                className={`ml-2 w-5 h-5 transition-transform ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 w-40 mt-2 bg-white border rounded-lg shadow-lg z-10 flex flex-col">
                <button className="px-4 py-2 w-full text-left hover:bg-gray-100 focus:bg-gray-200 focus:outline-none">
                  Хувь хүн
                </button>
                <button className="px-4 py-2 w-full text-left hover:bg-gray-100 focus:bg-gray-200 focus:outline-none">
                  Төсөл хэрэгжүүлэгч
                </button>
                <button className="px-4 py-2 w-full text-left hover:bg-gray-100 focus:bg-gray-200 focus:outline-none">
                  Мэргэжлийн
                </button>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="rounded-full text-center border-[1.3px] border-customGreen w-40 px-6 py-3 bg-customGreen shadow-[0_4px_10px_-4px_#14a44d] hover:bg-customGreenmore hover:shadow-none text-customGray text-sm font-medium"
          >
            Хамтрах
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-8 h-8 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4">
          <ul className="space-y-4 text-gray-700 font-medium">
            <li>
              <Link to="/" className="block py-2" onClick={() => setMenuOpen(false)}>
                Ehlel
              </Link>
            </li>
            <li>
              <Link
                to="/productuud"
                className="block py-2"
                onClick={() => setMenuOpen(false)}
              >
                Бүтээгдэхүүн
              </Link>
            </li>
            <li>
              <Link
                to="/kompani"
                className="block py-2"
                onClick={() => setMenuOpen(false)}
              >
                Компани
              </Link>
            </li>
            <li>
              <Link
                to="/niitlel"
                className="block py-2"
                onClick={() => setMenuOpen(false)}
              >
                Нийтлэл
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-3 text-center bg-customGreen rounded-full text-white hover:bg-emerald-500"
                onClick={() => setMenuOpen(false)}
              >
                Хамтрах
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;