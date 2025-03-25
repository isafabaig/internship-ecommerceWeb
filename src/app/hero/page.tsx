"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaUserCircle, FaArrowUp } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import Link from "next/link";

const Hero = () => {
  const [showButton, setShowButton] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top arrow
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white p-6 shadow-md relative" data-aos="fade-up">
      {/* Main Container */}
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-1/4 bg-gray-100 p-4 rounded-lg">
          <ul className="space-y-2">
            <li className="hover:text-blue-600 cursor-pointer">Automobiles</li>
            <li className="hover:text-blue-600 cursor-pointer">Clothes and wear</li>
            <li className="hover:text-blue-600 cursor-pointer">Home interiors</li>
            <li className="hover:text-blue-600 cursor-pointer">Computer and tech</li>
            <li className="hover:text-blue-600 cursor-pointer">Tools, equipments</li>
            <li className="hover:text-blue-600 cursor-pointer">Sports and outdoor</li>
            <li className="hover:text-blue-600 cursor-pointer">Animal and pets</li>
            <li className="hover:text-blue-600 cursor-pointer">Machinery tools</li>
            <li className="hover:text-blue-600 cursor-pointer">More category</li>
          </ul>
        </div>

        {/* Hero Image  */}
        <div className="flex-1 p-4">
          <div className="relative">
            <Image 
              src="/image/Banner-board-800x420 2.png"
              alt="Electronics"
              width={800} height={420}
              className="rounded-lg object-cover"
            />
            {/* Text Overlay */}
            <div className="absolute top-8 left-8 text-black">
              <h2 className="text-lg">Latest trending</h2>
              <h1 className="text-2xl font-bold">Electronic items</h1>
              <Link href={"/productlisting"}>
                <button className="mt-4 px-4 py-2 bg-white text-black shadow rounded-md font-medium hover:cursor-pointer hover:text-black hover:bg-gradient-to-r from-green-400 to-white">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-1/4 space-y-4">
          {/* User Section */}
          <div className="bg-gray-100 p-4 rounded-lg flex items-center space-x-3">
            <FaUserCircle className="text-gray-500 text-3xl" />
            <div>
              <p className="text-gray-700 font-medium">Hi, user</p>
              <p className="text-gray-500 text-sm">let’s get started</p>
            </div>
          </div>

          {/* Join & Login Buttons */}
          <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:cursor-pointer">
            Join now
          </button>
          <button className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow-md flex items-center justify-center space-x-2 hover:cursor-pointer">
            <AiOutlineLogin /> <span>Log in</span>
          </button>

          {/* Promo Banners */}
          <div className="bg-orange-400 text-white text-center p-4 rounded-lg shadow-md">
            Get US $10 off with a new supplier
          </div>
          <div className="bg-teal-400 text-white text-center p-4 rounded-lg shadow-md">
            Send quotes with supplier preferences
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg transition-all hover:bg-blue-700"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Hero;
