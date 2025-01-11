import React from "react";

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
    <div className="">
      <div className="flex justify-between mx-32">
        {numberCount?.map((item, index) => (
          <div className="flex flex-col items-center" key={index}>
            <div className="text-6xl font-poppins">{item.number}</div>
            <div className="text-lg">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Numbers;
