import NavigationBar from "../../shared/NavigationBar";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner  h-[35rem]">
      <NavigationBar></NavigationBar>
      <div className="container text-[#f8f9fa] mx-auto p-6 ">
        <h1 className="text-5xl  w-1/2 leading-snug mb-6">Discover the Ultimate Action Figures in TOYS INVASION!</h1>
        <p className="w-1/2 mb-5">Embark on Epic Adventures with Our Extraordinary Action Figures Collection. Unleash Your Imagination and Bring Your Favorite Heroes to Life!</p>
        <button className="btn btn-primary">Explore</button>
      </div>
    </div>
  );
};

export default Banner;