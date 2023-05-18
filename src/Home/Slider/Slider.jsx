import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import "./Slider.css";
const Slider = () => {
  const carousel = slider => {
    const z = 300;
    function rotate() {
      const deg = 360 * slider.track.details.progress;
      slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
    }
    slider.on("created", () => {
      const deg = 360 / slider.slides.length;
      slider.slides.forEach((element, idx) => {
        element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
      });
      rotate();
    });
    slider.on("detailsChanged", rotate);
  };

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  return (
    <>
      <div className="text-center p-4">
        <h2 className=" text-4xl mb-2">Dive into Our Toy Gallery!</h2>
        <p className="mb-4">
          {" "}
          Immerse Yourself in a World of Wonder and Play! Explore a captivating assortment of toys, <br /> each one a gateway to thrilling adventures and limitless possibilities.{" "}
        </p>
      </div>
      <div className="wrapper">
        <div className="scene">
          <div className="carousel keen-slider" ref={sliderRef}>
            <div className="carousel__cell number-slide1 ">1</div>
            <div className="carousel__cell number-slide2">2</div>
            <div className="carousel__cell number-slide3">3</div>
            <div className="carousel__cell number-slide4">4</div>
            <div className="carousel__cell number-slide5">5</div>
            <div className="carousel__cell number-slide6">6</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
