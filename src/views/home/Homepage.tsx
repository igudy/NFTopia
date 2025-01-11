import React from "react";
import Navbar from "../../components/Home/Navbar";
import Hero from "../../components/Home/Hero";
import MostPopularArtist from "../../components/Home/MostPopularArtist";
import Discover from "../../components/Home/Discover";
import Divider from "../../components/utils/Divider";
import Numbers from "../../components/Home/Numbers";
import NftExperience from "../../components/Home/NftExperience";
import AllAbout from "../../components/Home/AllAbout";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="px-10">
        <MostPopularArtist />
        <Divider />
        <Discover />
        <Divider />
        <Numbers />
              <NftExperience />
              <AllAbout />
      </div>
    </div>
  );
};

export default Homepage;
