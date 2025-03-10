'use client'

import { useState } from 'react';
import Image from 'next/image';
import { FaUser, FaRegEnvelope, FaHeart, FaShoppingCart, FaBars } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="shadow-md border-b border-gray-300">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-3 bg-white shadow-sm">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/image/logo-symbol.png" alt="Brand Logo" width={40} height={40} />
          <span className="text-xl font-semibold text-blue-500 ml-2">Brand</span>
        </div>
        {/* Search Bar */}
        <div className="hidden md:flex border border-gray-300 rounded-md overflow-hidden shadow-sm">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 outline-none border-r border-gray-300"
          />
          <select className="px-3 border-r border-gray-300">
            <option>All category</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2">Search</button>
        </div>
        {/* Icons */}
        <div className="flex space-x-4 text-gray-600">
          <div className="flex flex-col items-center text-sm">
            <FaUser size={18} />
            <span>Profile</span>
          </div>
          <div className="flex flex-col items-center text-sm">
            <FaRegEnvelope size={18} />
            <span>Message</span>
          </div>
          <div className="flex flex-col items-center text-sm">
            <FaHeart size={18} />
            <span>Orders</span>
          </div>
          <div className="flex flex-col items-center text-sm">
            <FaShoppingCart size={18} />
            <span>My cart</span>
          </div>
        </div>
      </div>
      {/* Second Navbar */}
      <div className="flex justify-between items-center px-6 py-3 bg-white shadow-sm border-t border-gray-300 relative">
        {/* Left Side */}
        <div className="flex items-center space-x-6 text-gray-700 w-full">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
            <FaBars size={20} />
          </button>
          <div className={`absolute top-full left-0 w-full bg-white shadow-md border border-gray-300 p-4 flex flex-col space-y-3 md:static md:flex-row md:space-y-0 md:space-x-6 md:border-none md:shadow-none ${menuOpen ? 'block' : 'hidden'} md:flex`}>
            <span>All category</span>
            <span>Hot offers</span>
            <span>Gift boxes</span>
            <span>Projects</span>
            <span>Menu item</span>
            <span className="flex items-center">Help <IoMdArrowDropdown /></span>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex items-center gap-6">
          <span className="flex items-center">English, USD <IoMdArrowDropdown /></span>
          <span className="flex items-center">Ship to <Image src="/image/flag-01.png" alt="Country Flag" width={24} height={16} className="ml-2" /> <IoMdArrowDropdown /></span>
        </div>
        </div>
    </div>
  );
};

export default Navbar;