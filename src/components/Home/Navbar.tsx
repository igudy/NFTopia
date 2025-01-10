import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="font-bold text-2xl cursor-pointer bg-white ml-10">
        NFTMARKET
      </div>

      <div className="gap-10 flex items-center">
        <div className="flex gap-10">
          <div>Auction</div>
          <div>Roadmap</div>
          <div>Discover</div>
          <div>Community</div>
        </div>
        <div className="p-5 bg-[#FF90E8] border-2 border-gray-950 border-t-0 border-r-0 border-b-0">
          Login/Signup
        </div>
      </div>
    </div>
  );
};

export default Navbar;
