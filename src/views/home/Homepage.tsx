import Navbar from "../../components/Home/Navbar";
import Hero from "../../components/Home/Hero";
import MostPopularArtist from "../../components/Home/MostPopularArtist";
import Discover from "../../components/Home/Discover";
import Divider from "../../components/utils/Divider";
import Numbers from "../../components/Home/Numbers";
import NftExperience from "../../components/Home/NftExperience";
import AllAbout from "../../components/Home/AllAbout";
import Nftmarketplace from "../../components/Home/Nftmarketplace";
import Footer from "../../components/Home/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="px-10">
        <MostPopularArtist />
        <Divider />
        <Discover />
      </div>
      <Divider />
      <div className="md:px-32">
        <Numbers />
      </div>
      <NftExperience />
      <div className="px-10">
        <AllAbout />
      </div>
      <Nftmarketplace />
      <Footer />
    </div>
  );
};

export default Homepage;
