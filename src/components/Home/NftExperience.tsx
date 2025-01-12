import { motion } from "framer-motion";
import ShoppingBag from "../../assets/images/shop.png";

const itemsList = [
  {
    id: "1",
    name: "Start Your Own Shop",
    description:
      "Easily set up your online shop, showcase your products, and start selling NFTs with a few clicks.",
  },
  {
    id: "2",
    name: "Create Your Digital Artwork",
    description:
      "Bring your creative ideas to life by turning your digital artwork into NFTs that can be sold to the global audience.",
  },
  {
    id: "3",
    name: "Connect with the Community",
    description:
      "Engage with artists, collectors, and NFT enthusiasts to grow your network and enhance your presence in the NFT ecosystem.",
  },
];

const NftExperience = () => {
  return (
    <div>
      {/* Hero Section */}
      <motion.div
        className="bg-[#FFC900] h-[20rem] border-2 border-black mt-10 
      border-l-0 border-r-0 flex items-center justify-center flex-col gap-3 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="font-poppins text-3xl text-center">
          A New NFT Experience
        </div>
        <div className="text-center">
          Explore a revolutionary platform for artists and collectors
        </div>
        <motion.div
          className="border-2 border-black py-3 px-5 mt-3 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <motion.div
          className="md:w-[50%] w-full h-[25rem] md:h-[40rem] bg-[#23A094] border-2 border-black border-t-0 md:border-l-0 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            src={ShoppingBag}
            alt="shopping-bag"
            className="border-2 border-black w-[70%] md:w-[500px]"
          />
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="md:w-[50%] w-full h-auto md:h-[40rem] bg-[#FF90E8] border-2 border-black border-t-0 md:border-r-0 md:border-l-0 flex items-center justify-center flex-col py-8 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="md:mx-10">
            {itemsList?.map((item, index) => (
              <motion.div
                className="flex flex-col my-5"
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="border-2 border-black p-3 h-10 w-10 my-2 items-center justify-center flex rounded-full bg-white">
                  {item.id}
                </div>
                <div className="font-poppins text-xl md:text-2xl font-medium">
                  {item.name}
                </div>
                <div className="mt-2 text-sm md:text-base">
                  {item.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NftExperience;
