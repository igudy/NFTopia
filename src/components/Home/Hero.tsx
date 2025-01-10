import React from "react";

const Hero = () => {
  return (
    <div className="flex">
      <div className="w-[50%] bg-[#FF90E8] border-2 border-black flex items-center justify-center flex-col h-[30rem]">
        <div className="p-10">
          <div className="font-poppins text-[70px] font-medium leading-none">
            Buy And Sell Modern NFT
          </div>
          <div className="my-4">
            Discover a revolutionary digital art experience at our NFT Website
          </div>

          <div className="flex gap-3">
            <div className="bg-black text-white p-2 text-center px-5 border-black">
              Explore
            </div>
            <div className="bg-white border-2 p-2 text-center border-black">
              How it works
            </div>
          </div>
        </div>
      </div>

      <div className="w-[50%] bg-[#FFC900] border-2 border-l-0 borer-top border-black items-center flex jusitfy-center h-[30rem]"></div>
    </div>
  );
};

export default Hero;
