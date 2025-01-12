import { motion } from "framer-motion";
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
        <motion.div
          className="font-bold text-2xl cursor-pointer ml-0 md:ml-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          NFTMARKET
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          <motion.div
            className="flex gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            {["Auction", "Roadmap", "Discover", "Community"].map((item) => (
              <motion.div
                key={item}
                className="cursor-pointer hover:bg-pink-500 px-2 py-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="p-5 bg-[#FF90E8] border-2 border-gray-950 border-t-0 border-b-0 border-r-0 cursor-pointer hover:bg-pink-600"
            // whileHover={{ scaleX: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Login/Signup
          </motion.div>
        </div>

        {/* Hamburger Icon */}
        <motion.div
          className="md:hidden text-2xl cursor-pointer"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="flex flex-col items-center gap-4 py-4 border-t-2 border-black md:hidden"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {["Auction", "Roadmap", "Discover", "Community"].map((item) => (
            <motion.div
              key={item}
              className="cursor-pointer hover:bg-pink-500 px-2 py-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item}
            </motion.div>
          ))}
          <motion.div
            className="p-2 px-5 bg-[#FF90E8] border-2 border-gray-950 border-t-0 border-b-0 border-r-0 cursor-pointer hover:bg-pink-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Login/Signup
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
