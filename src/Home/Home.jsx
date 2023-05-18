import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="container mx-auto">
          <Gallery></Gallery>
      </div>
    </div>
  );
};

export default Home;
