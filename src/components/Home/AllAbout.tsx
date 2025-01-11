import React from "react";
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
      <div className="font-poppins text-3xl font-medium">
        All about NFT World
      </div>
      <div className="flex justify-between items-center">
        <div>Lorem ipsum is simply dummy</div>

        <div className="bg-[#6FEDD6] p-4 border-2 border-black">See All</div>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {nftWorld.map((item, index) => (
            <div key={index} className="flex flex-col border-black border-2">
              <img
                src={item.img}
                alt="item-artwork"
                className=" border-b-0"
              />
              <div className="p-4 border-t-2 border-black w-full">
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <p className="font-bold">{item.name}</p>
                  </div>

                </div>
                  <div className="flex justify-between text-[12px] text-gray-600">
                    <div>By {item.by}</div>
                    <div>{item.date}</div>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllAbout;
