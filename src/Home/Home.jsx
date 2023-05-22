import CategoryTabs from "./ToyCategory/CategoryTabs";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);


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
