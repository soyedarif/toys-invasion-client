import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import ToyCategory from "./ToyCategory/ToyCategory";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="container mx-auto">
          <Gallery></Gallery>
          <ToyCategory></ToyCategory>
      </div>
    </div>
  );
};

export default Home;
