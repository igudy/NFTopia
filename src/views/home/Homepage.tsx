import React from "react";
import Navbar from "../../components/Home/Navbar";
import Hero from "../../components/Home/Hero";
import MostPopularArtist from "../../components/Home/MostPopularArtist";
import Discover from "../../components/Home/Discover";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="px-10">
        <MostPopularArtist />
        <Discover />
      </div>
    </div>
  );
};

export default Homepage;
