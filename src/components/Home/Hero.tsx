import { motion } from "framer-motion";
import BrainImg from "../../assets/images/brain.svg";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-[50%] bg-[#FF90E8] border-2 border-black flex items-center justify-center flex-col h-[30rem] p-6">
        <div className="p-4 md:p-10 text-center md:text-left">
          <motion.div
            className="font-poppins text-[40px] md:text-[70px] font-medium leading-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Buy And Sell Modern NFT
          </motion.div>
          <motion.div
            className="my-4 text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Discover a revolutionary digital art experience at our NFT Website
          </motion.div>

          <div className="flex gap-3 justify-center md:justify-start">
            <motion.button
              className="bg-black text-white p-2 px-5 border-black"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Explore
            </motion.button>
            <motion.button
              className="bg-white border-2 p-2 px-5 border-black"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              How it works
            </motion.button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[50%] bg-[#FFC900] border-2 border-black md:border-l-0 flex items-center flex-col p-6 h-[30rem]">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 1, duration: 1, type: "spring", stiffness: 300 }}
        >
          <img
            src={BrainImg}
            alt="brain-img"
            className="h-[200px] md:h-[300px] object-cover border-b border-black border-2 w-[200px] md:w-[300px] cursor-pointer"
          />
        </motion.div>

        <motion.div
          className="p-4 w-[200px] md:w-[300px] bg-white font-bold border-2 pt-5 border-black mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <div className="text-sm md:text-base">Robot Arm</div>
              <div className="text-xs md:text-xs">By Scolep More</div>
            </div>

            <motion.button
              className="bg-[#FF90E8] cursor-pointer border-black border-2 p-3 md:px-7 md:py-2 font-medium"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              5 ETH
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
