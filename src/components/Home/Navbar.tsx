import React from "react";

const Navbar = () => {
  return (
    <div className="flex border-b-0 justify-between border-2 border-t-0 border-black items-center">
      <div className="font-bold text-2xl cursor-pointer bg-white ml-10">
        NFTMARKET
      </div>

      <div className="gap-10 flex items-center">
        <div className="flex gap-10">
          <div className="cursor-pointer hover:bg-pink-500">Auction</div>
          <div className="cursor-pointer hover:bg-pink-500">Roadmap</div>
          <div className="cursor-pointer hover:bg-pink-500">Discover</div>
          <div className="cursor-pointer hover:bg-pink-500">Community</div>
        </div>
        <div className="p-5 bg-[#FF90E8] border-2 border-gray-950 border-t-0 
        border-b-0 border-r-0 cursor-pointer hover:bg-pink-600">
          Login/Signup
        </div>
      </div>
    </div>
  );
};

export default Navbar;
