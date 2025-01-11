import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="border-b-0 border-2 border-t-0 border-black bg-white">
      <div className="flex justify-between items-center px-6 py-4 md:px-0 md:py-0 p">
        {/* Logo */}
        <div className="font-bold text-2xl cursor-pointer ml-0 md:ml-10">NFTMARKET</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          <div className="flex gap-10">
            {["Auction", "Roadmap", "Discover", "Community"].map((item) => (
              <div
                key={item}
                className="cursor-pointer hover:bg-pink-500 px-2 py-1"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="p-5 bg-[#FF90E8] border-2 border-gray-950 
          border-t-0 border-b-0 border-r-0 cursor-pointer hover:bg-pink-600">
            Login/Signup
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col items-center gap-4 py-4 border-t-2 border-black md:hidden">
          {["Auction", "Roadmap", "Discover", "Community"].map((item) => (
            <div
              key={item}
              className="cursor-pointer hover:bg-pink-500 px-2 py-1"
            >
              {item}
            </div>
          ))}
          <div className="p-2 px-5 bg-[#FF90E8] border-2 border-gray-950 border-t-0 border-b-0 border-r-0 cursor-pointer hover:bg-pink-600">
            Login/Signup
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
