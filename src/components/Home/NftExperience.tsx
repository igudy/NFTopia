import ShoppingBag from "../../assets/images/shop.png";

const itemsList = [
  {
    id: "1",
    name: "Start Your Shop",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  },
  {
    id: "2",
    name: "Create Your Artwork",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: "3",
    name: "Optimize on Community",
    description: "Lorem Ipsum has been the industry's standard dummy",
  },
];

const NftExperience = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-[#FFC900] h-[20rem] border-2 border-black mt-10 
      border-l-0 border-r-0 flex items-center justify-center flex-col gap-3 px-4"
      >
        <div className="font-poppins text-3xl text-center">
          A New NFT Experience
        </div>
        <div className="text-center">
          The week's most popular artists across all genres
        </div>
        <div className="border-2 border-black py-3 px-5 mt-3 cursor-pointer">
          Get Started
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="md:w-[50%] w-full h-[25rem] md:h-[40rem] bg-[#23A094] border-2 border-black border-t-0 md:border-l-0 flex justify-center items-center">
          <img
            src={ShoppingBag}
            alt="shopping-bag"
            className="border-2 border-black w-[70%] md:w-[500px]"
          />
        </div>

        {/* Right Section */}
        <div className="md:w-[50%] w-full h-auto md:h-[40rem] bg-[#FF90E8] border-2 border-black border-t-0 md:border-r-0 md:border-l-0 flex items-center justify-center flex-col py-8 px-4">
          <div className="md:mx-10">
            {itemsList?.map((item, index) => (
              <div className="flex flex-col my-5" key={index}>
                <div className="border-2 border-black p-3 h-10 w-10 my-2 items-center justify-center flex rounded-full bg-white">
                  {item.id}
                </div>
                <div className="font-poppins text-xl md:text-2xl font-medium">
                  {item.name}
                </div>
                <div className="mt-2 text-sm md:text-base">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftExperience;
