import React from "react";
import { motion } from "framer-motion";

const NftMarketplace = () => {
  return (
    <motion.div
      className="h-[20rem] bg-[#6FEDD6] flex flex-col items-center justify-center text-center border-2 border-black border-r-0 border-l-0 px-5 sm:px-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Main Heading */}
      <motion.div
        className="font-poppins text-3xl sm:text-4xl md:text-5xl font-medium px-5 sm:px-[10%]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Largest Online Marketplace to Buy & Sell NFT Items
      </motion.div>

      {/* Buttons Section */}
      <motion.div
        className="flex flex-col sm:flex-row items-center my-3 gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <motion.div
          className="text-black px-4 py-2 bg-[#FF90E8] border-2 border-black w-full sm:w-auto cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Collect Now
        </motion.div>
        <motion.div
          className="text-white px-4 py-2 bg-black border-2 border-black w-full sm:w-auto cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Sell NFT
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NftMarketplace;
