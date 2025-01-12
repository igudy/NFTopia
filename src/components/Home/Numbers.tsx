import{ useEffect, useState } from "react";
import { motion } from "framer-motion";

const numberCount = [
  {
    number: 300000,
    title: "User Active",
  },
  {
    number: 15000,
    title: "Artist",
  },
  {
    number: 5000,
    title: "Artworks",
  },
  {
    number: 65.25,
    title: "ETH Spot",
  },
];

const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`; // For millions
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}k`; // For thousands
  }
  return num.toString(); // Otherwise return the number as a string
};

const Numbers = () => {
  const [countedNumbers, setCountedNumbers] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const countUp = (target: number, duration: number) => {
      let start = 0;
      const step = target / duration;

      const interval = setInterval(() => {
        start += step;
        if (start >= target) {
          clearInterval(interval);
          start = target;
        }
        setCountedNumbers((prev) => ({
          ...prev,
          [target]: Math.floor(start),
        }));
      }, 1000 / 60)
    };

    numberCount.forEach((item) => {
      countUp(item.number, 200);
    });
  }, []);

  return (
    <div className="px-4 md:py-8">
      <div className="grid grid-cols-4 md:gap-8 justify-center items-center">
        {numberCount?.map((item, index) => (
          <div className="flex flex-col items-center" key={index}>
            <motion.div
              className="text-2xl md:text-4xl font-poppins font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * index, duration: 1 }}
            >
              {/* Displaying dynamically formatted number */}
              {formatNumber(countedNumbers[item.number] || 0)}
            </motion.div>
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
