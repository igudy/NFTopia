// import BrainImg from "../../assets/images/brain.svg";

// const Hero = () => {
//   return (
//     <div className="flex">
//       <div className="w-[50%] bg-[#FF90E8] border-2 border-black flex items-center justify-center flex-col h-[30rem]">
//         <div className="p-10">
//           <div className="font-poppins text-[70px] font-medium leading-none">
//             Buy And Sell Modern NFT
//           </div>
//           <div className="my-4">
//             Discover a revolutionary digital art experience at our NFT Website
//           </div>

//           <div className="flex gap-3">
//             <div className="bg-black text-white p-2 text-center px-5 border-black">
//               Explore
//             </div>
//             <div className="bg-white border-2 p-2 text-center border-black">
//               How it works
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-[50%] bg-[#FFC900] border-2 border-l-0 borer-top border-black items-center flex-col flex p-10 jusitfy-center h-[30rem]">
//         <div className="flex justify-center">
//           <img
//             src={BrainImg}
//             alt="brain-img"
//             className="h-[300px] object-cover border-b border-black border-2 w-[300px]"
//           />
//         </div>

//         <div className="p-4 w-[300px] bg-white font-bold border-2 pt-5 border-black">
//           <div className="flex justify-between flex-row items-center">
//             <div className="flex flex-col ">
//               <div>Robot Arm</div>
//               <div>By Scolep More</div>
//             </div>
//             <div className="bg-[#FF90E8] border-black border-2 p-5 font-medium">
//               5 ETH
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import BrainImg from "../../assets/images/brain.svg";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-[50%] bg-[#FF90E8] border-2 border-black flex items-center justify-center flex-col h-[30rem] p-6">
        <div className="p-4 md:p-10 text-center md:text-left">
          <div className="font-poppins text-[40px] md:text-[70px] font-medium leading-none">
            Buy And Sell Modern NFT
          </div>
          <div className="my-4 text-sm md:text-base">
            Discover a revolutionary digital art experience at our NFT Website
          </div>

          <div className="flex gap-3 justify-center md:justify-start">
            <button className="bg-black text-white p-2 px-5 border-black">
              Explore
            </button>
            <button className="bg-white border-2 p-2 px-5 border-black">
              How it works
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[50%] bg-[#FFC900] border-2 border-black md:border-l-0 flex items-center flex-col p-6 h-[30rem]">
        <div className="flex justify-center">
          <img
            src={BrainImg}
            alt="brain-img"
            className="h-[200px] md:h-[300px] object-cover border-b border-black border-2 w-[200px] md:w-[300px]"
          />
        </div>

        <div className="p-4 w-[200px] md:w-[300px] bg-white font-bold border-2 pt-5 border-black mt-6">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <div className="text-sm md:text-base">Robot Arm</div>
              <div className="text-xs md:text-xs">By Scolep More</div>
            </div>
            <div className="bg-[#FF90E8] cursor-pointer border-black border-2 p-3 md:px-7 md:py-2 font-medium">
              5 ETH
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
