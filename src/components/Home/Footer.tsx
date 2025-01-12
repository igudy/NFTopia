import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const footerRef = useRef(null);

  return (
    <motion.div
      ref={footerRef}
      className="bg-[#E6E6E6] border-2 items-center justify-center border-black border-l-0 border-r-0 border-t-0 h-full md:h-[10rem] pt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex items-center justify-center">
        <div>
          <motion.div
            className="text-[12px] text-center md:text-left"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Subscribe to get news update about NFTs
          </motion.div>

          <motion.div
            className="flex md:flex-row flex-col gap-10 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            {/* Subscription Input and Button */}
            <motion.div
              className="flex items-center"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <input
                type="text"
                placeholder="E.g. youremail.com"
                className="p-3 border-black border-[2px] w-full md:w-[30rem]"
              />
              <div className="flex p-3 cursor-pointer border-black border-[2px] border-l-0 bg-[#FF90E8]">
                Subscribe
              </div>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <div className="flex gap-4 my-2 justify-center md:justify-end text-gray-500 text-xl">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer"
                >
                  <FaInstagram />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer"
                >
                  <FaYoutube />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer"
                >
                  <FaTiktok />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer"
                >
                  <FaFacebook />
                </motion.div>
              </div>

              <motion.div
                className="text-[12px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
              >
                © 2025 by Logo Furniture. All rights reserved.
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
