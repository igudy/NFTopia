const Nftmarketplace = () => {
  return (
    <div
      className="h-[20rem] bg-[#6FEDD6] flex flex-col 
      items-center justify-center text-center border-2
      border-black border-r-0 border-l-0 px-5 sm:px-10"
    >
      {/* Main Heading */}
      <div className="font-poppins text-3xl sm:text-4xl md:text-5xl font-medium px-5 sm:px-[10%]">
        Largest Online Marketplace to Buy & Sell NFT Items
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row items-center my-3 gap-5">
        <div
          className="text-black px-4 py-2 bg-[#FF90E8] 
          border-2 border-black w-full sm:w-auto"
        >
          Collect Now
        </div>
        <div
          className="text-white px-4 py-2 bg-black 
          border-2 border-black w-full sm:w-auto"
        >
          Sell NFT
        </div>
      </div>
    </div>
  );
};

export default Nftmarketplace;
