const numberCount = [
  {
    number: "300k",
    title: "User Active",
  },
  {
    number: "15k+",
    title: "Artist",
  },
  {
    number: "5k+",
    title: "Artworks",
  },
  {
    number: "65.25",
    title: "ETH Spot",
  },
];

const Numbers = () => {
  return (
    <div className="px-4 md:py-8">
      <div className="grid grid-cols-4 md:gap-8 justify-center items-center">
        {numberCount?.map((item, index) => (
          <div className="flex flex-col items-center" key={index}>
            <div className="text-2xl md:text-4xl font-poppins font-bold">
              {item.number}
            </div>
            <div className="text-sm sm:text-base md:text-lg text-gray-600">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Numbers;
