import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="bg-[#E6E6E6] border-2 items-center justify-center
     border-black border-l-0 border-r-0 border-t-0 h-full md:h-[10rem] pt-10"
    >
      <div className="flex items-center justify-center">
        <div>
          <div className="text-[12px] text-center md:text-left">
            Subscribe to get news update about NFTs
          </div>
          <div className="flex md:flex-row flex-col gap-10 items-center">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="E.g. youremail.com"
                className="p-3 border-black border-[2px] w-full md:w-[30rem]"
              />
              <div className="flex p-3  border-black border-[2px] border-l-0 bg-[#FF90E8]">
                Subscribe
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex gap-4 my-2 justify-center md:justify-end text-gray-500 text-xl">
                <FaInstagram />
                <FaYoutube />
                <FaTiktok />
                <FaFacebook />
              </div>
              <div className="text-[12px]">
                © 2025 by Logo Furniture. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
