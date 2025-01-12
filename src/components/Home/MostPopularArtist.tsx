import HumanHead from "../../assets/images/humanhead.svg";
import JacksonMiller from "../../assets/images/jacksonmiller.svg";
import HumanSleeping from "../../assets/images/humansleeping.svg";
import Brok from "../../assets/images/brokshim.svg";
import MouthGuy from "../../assets/images/MouthGuy.svg";
import Girl from "../../assets/images/girl.svg";
import RobotGirl from "../../assets/images/robotguy.svg";
import { motion } from "framer-motion";

const artists = [
  {
    img: HumanHead,
    name: "Jackson Miller",
    collection: "5622 Collection",
    image: JacksonMiller,
  },
  {
    img: HumanSleeping,
    name: "Sophia Carter",
    collection: "4210 Collection",
    image: Brok,
  },
  {
    img: Girl,
    name: "Ethan Moore",
    collection: "3148 Collection",
    image: RobotGirl,
  },
  {
    img: MouthGuy,
    name: "Emma Wilson",
    collection: "2805 Collection",
    image: Brok,
  },
];

const MostPopularArtist = () => {
  return (
    <div className="my-10 px-4">
      <h2 className="font-poppins font-medium text-3xl text-center">
        Most Popular Artists
      </h2>
      <p className="my-2 text-center text-gray-600">
        The week's most popular artists across all genres
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 text-[12px]">
        {artists.map((artist, index) => (
          <motion.div
            key={index}
            className="flex cursor-pointer flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <motion.img
              src={artist.img}
              alt="artist-artwork"
              className="border-black border-2 h-full border-b-0 w-full max-w-xs object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="p-4 w-full max-w-xs bg-white font-medium border-2 border-black"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center">
                <motion.img
                  src={artist.image}
                  alt={`${artist.name}'s profile`}
                  className="h-[30px] w-[30px] border-black rounded-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="ml-2 flex-1">
                  <p className="font-bold">{artist.name}</p>
                  <p className="text-sm text-gray-500 text-[10px]">{artist.collection}</p>
                </div>
                <motion.button
                  className="bg-[#6FEDD6] font-bold text-xs border-black border-2 px-3 py-1 rounded whitespace-nowrap"
                  whileHover={{ backgroundColor: "#4ec8b1", scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  Follow
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MostPopularArtist;
