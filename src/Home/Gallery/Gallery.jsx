import { useEffect, useState } from "react";
import Photo from "./Photo";


const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(`https://toys-invasion-server.vercel.app/toyGallery`)
      .then(res => res.json())
      .then(data => setPhotos(data));
  }, []);
  return (
    <>
      <div className="text-center p-4">
        <h2 className=" text-4xl mb-4">Dive into Our Toy Gallery!</h2>
        <p className="mb-4">
          Immerse Yourself in a World of Wonder and Play! Explore a captivating assortment of toys, <br /> each one a gateway to thrilling adventures and limitless possibilities.
        </p>
      </div>
      <div data-aos="fade-up" data-aos-duration="2000" className="grid grid-flow-col grid-rows-3 mb-16 md:grid-rows-2 p-6">
        {photos.map(photo => (
          <Photo key={photo._id} photo={photo}></Photo>
        ))}
      </div>
    </>
  );
};

export default Gallery;
