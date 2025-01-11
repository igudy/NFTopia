import React from "react";
import HumanHead from "../../assets/images/humanHead.svg";
import JacksonMiller from "../../assets/images/jacksonmiller.svg";
import HumanSleeping from "../../assets/images/humansleeping.svg";
import Brok from "../../assets/images/brokshim.svg";
import MouthGuy from "../../assets/images/MouthGuy.svg";
import Girl from "../../assets/images/girl.svg";
import RobotGirl from "../../assets/images/robotguy.svg";

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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
        {artists.map((artist, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={artist.img}
              alt="artist-artwork"
              className="border-black border-2 h-full border-b-0 w-full max-w-xs object-cover"
            />
            <div className="p-4 w-full max-w-xs bg-white font-medium border-2 border-black">
              <div className="flex justify-between items-center">
                <img
                  src={artist.image}
                  alt={`${artist.name}'s profile`}
                  className="h-[50px] w-[50px] border-black rounded-full"
                />
                <div className="ml-2 flex-1">
                  <p className="font-bold">{artist.name}</p>
                  <p className="text-sm text-gray-500">{artist.collection}</p>
                </div>
                <button className="bg-[#6FEDD6] font-bold text-xs border-black border-2 px-3 py-1 rounded whitespace-nowrap">
                  Follow
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopularArtist;
