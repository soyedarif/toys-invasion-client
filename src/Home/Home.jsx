import CategoryTabs from "./ToyCategory/CategoryTabs";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import Footer from "../shared/Footer";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="container mb-16 mx-auto">
        <Gallery></Gallery>
        {/* <ToyCategory></ToyCategory> */}
        <CategoryTabs></CategoryTabs>
      </div>
        <Footer></Footer>
    </div>
  );
};

export default Home;
