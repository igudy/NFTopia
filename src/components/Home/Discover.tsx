import  { useState } from "react";
import { motion } from "framer-motion";
import JacksonMiller from "../../assets/images/jacksonmiller.svg";
import RobotGirl from "../../assets/images/robotguy.svg";
import Brok from "../../assets/images/brokshim.svg";
import Abstract1 from "../../assets/images/abstract1.png";
import Abstract2 from "../../assets/images/abstract2.png";
import Abstract3 from "../../assets/images/abstract3.png";
import Abstract4 from "../../assets/images/abstract4.png";
import Abstract5 from "../../assets/images/abstract5.png";
import Abstract6 from "../../assets/images/abstract6.png";

const section = [
  { id: 1, section: "Popular" },
  { id: 2, section: "Photography" },
  { id: 3, section: "Abstract" },
  { id: 4, section: "Music" },
  { id: 5, section: "Avatar" },
  { id: 6, section: "Gaming" },
  { id: 7, section: "All" },
];

const popularNFTs = [
  {
    id: 1,
    name: "Pixelated Piece",
    img: Abstract1,
    bid: "2.27 ETH",
    handle: "jackson_miller",
    time: "00D:12H:56M:42S",
    img2: JacksonMiller,
    category: "Popular",
  },
  {
    id: 2,
    name: "Futuristic Vision",
    img: Abstract2,
    bid: "3.14 ETH",
    handle: "robot_girl",
    time: "01D:08H:21M:36S",
    img2: RobotGirl,
    category: "Photography",
  },
  {
    id: 3,
    name: "Cosmic Symphony",
    img: Abstract3,
    bid: "1.89 ETH",
    handle: "brok_shim",
    time: "02D:05H:47M:19S",
    img2: Brok,
    category: "Abstract",
  },
  {
    id: 4,
    name: "Golden Horizon",
    img: Abstract4,
    bid: "4.72 ETH",
    handle: "jackson_miller",
    time: "00D:16H:29M:11S",
    img2: JacksonMiller,
    category: "Music",
  },
  {
    id: 5,
    name: "Mystic Flow",
    img: Abstract5,
    bid: "2.65 ETH",
    handle: "robot_girl",
    time: "01D:10H:13M:24S",
    img2: RobotGirl,
    category: "Avatar",
  },
  {
    id: 6,
    name: "Digital Echoes",
    img: Abstract6,
    bid: "3.50 ETH",
    handle: "brok_shim",
    time: "00D:09H:32M:58S",
    img2: Brok,
    category: "Gaming",
  },
];

const Discover = () => {
  const [activeSection, setActiveSection] = useState("All");

  // Filter NFTs based on active section
  const filteredNFTs =
    activeSection === "All"
      ? popularNFTs // Show all NFTs for "All"
      : popularNFTs.filter((nft) => nft.category === activeSection);

  return (
    <div className="my-10 px-4">
      {/* Top Section */}
      <motion.h2
        className="font-poppins font-medium text-3xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        Discover the most popular NFTs
      </motion.h2>
      <motion.p
        className="my-2 text-center text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Discover a revolutionary digital art experience at our NFT Website
      </motion.p>

      {/* Sections */}
      <div className="flex justify-center gap-3 flex-wrap whitespace-nowrap py-4">
        {section?.map((section) => (
          <motion.div
            key={section.id}
            onClick={() => setActiveSection(section.section)}
            className={`px-4 cursor-pointer py-2 border-2 rounded-full inline-block ${
              activeSection === section.section
                ? "bg-pink-500 text-white border-pink-500"
                : "border-black"
            }`}
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgba(255, 255, 255, 0.6)",
              boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.2)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {section?.section}
          </motion.div>
        ))}
      </div>

      {/* NFT Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        {filteredNFTs?.map((item) => (
          <motion.div
            key={item.id}
            className="flex cursor-pointer flex-col border-black border-2"
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
          >
            <img
              src={item.img}
              alt={`${item.name}`}
              className="h-60 w-full object-cover"
            />
            <div className="flex flex-col gap-2 p-4">
              <div className="font-bold">{item.name}</div>
              <div className="font-medium">
                <span className="font-light">Current bid:</span> {item.bid}
              </div>

              <div className="bg-black w-full h-[1px]"></div>

              <div className="flex justify-between text-[12px] mt-1 items-center">
                <div className="flex gap-3 items-center">
                  <img
                    src={item.img2}
                    alt={`${item.handle}`}
                    className="rounded-full w-7 h-7"
                  />
                  @{item.handle}
                </div>
                <div className="bg-[#FFDF68] p-1 border-black border-2">
                  {item.time}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Discover;
