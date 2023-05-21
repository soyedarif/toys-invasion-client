import CategoryTabs from "./ToyCategory/CategoryTabs";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";


const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="container mb-16 mx-auto">
        <Gallery></Gallery>
        {/* <ToyCategory></ToyCategory> */}
        <CategoryTabs></CategoryTabs>

      </div>
    </div>
  );
};

export default Home;
