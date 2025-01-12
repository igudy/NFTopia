import { motion } from "framer-motion";
import BTC from "../../assets/images/btx.png";
import NFT from "../../assets/images/nft2.png";
import NFT2 from "../../assets/images/nft.png";

const nftWorld = [
  {
    id: 1,
    name: "New Publish Network",
    by: "Excel Skao",
    date: "18 May 2023",
    img: BTC,
  },
  {
    id: 2,
    name: "What is NFT Token?",
    by: "Excel Skao",
    date: "18 May 2023",
    img: NFT2,
  },
  {
    id: 3,
    name: "Powerful Token",
    by: "Excel Skao",
    date: "18 May 2023",
    img: NFT,
  },
];

const AllAbout = () => {
  return (
    <div className="my-10 mx-5">
      {/* Header Section */}
      <motion.div
        className="font-poppins text-2xl md:text-3xl font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        All about NFT World
      </motion.div>
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <div className="text-sm md:text-base text-gray-700">
          Learn about the most popular NFT trends and news.
        </div>
        <div className="bg-[#6FEDD6] p-3 md:p-4 border-2 border-black mt-4 md:mt-0 cursor-pointer">
          See All
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="mt-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {nftWorld.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col cursor-pointer border-black border-2 bg-white overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image Section */}
              <img
                src={item.img}
                alt="item-artwork"
                className="border-b-2 border-black w-full h-40 object-cover"
              />
              {/* Details Section */}
              <div className="p-4">
                <p className="font-bold text-lg">{item.name}</p>
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>By {item.by}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AllAbout;
