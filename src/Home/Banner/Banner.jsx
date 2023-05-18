import NavigationBar from "../../shared/NavigationBar";
import "./Banner.css";
import bannerImg from '../../../public/b-img.png'
const Banner = () => {
  return (
    <div className="banner  overflow-hidden mb-24">
      <NavigationBar></NavigationBar>
      <div className="container  text-[#f8f9fa] md:flex mx-auto p-8 ">
        <div>
            <h1 className="text-5xl leading-snug mb-6">Discover the Ultimate Action Figures in TOYS INVASION!</h1>
            <p className=" mb-5">Embark on Epic Adventures with Our Extraordinary Action Figures Collection. Unleash Your Imagination and Bring Your Favorite Heroes to Life!</p>
            <button className="btn btn-primary">Explore</button>
        </div>
        <div>
            <figure className="w-2/3 ml-auto"><img src={bannerImg} alt="" /></figure>
        </div>
      </div>
    </div>
  );
};

export default Banner;