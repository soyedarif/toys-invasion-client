import React from "react";
import code from '/code.png'
import code1 from '/code1.png'

const Features = () => {
  return (
    <>
      <div className="text-center p-4 mt-11">
        <h2 className=" text-4xl mb-4">Dive into Our Features!</h2>
        <p className="mb-4">
          Immerse Yourself in a World of Wonder and Play! Explore a captivating assortment of toys, <br /> each one a gateway to thrilling adventures and limitless possibilities.
        </p>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="step-text-box self-center">
          <p className="font-extrabold text-8xl text-gray-400">01</p>
          <h3 className="font-bold text-4xl">Add Your Favourite Toy</h3>
          <p className="step-description"></p>
        </div>
        <div className="mockup-phone border-primary">
          <div className="camera"></div>
          <div className="display">
            <img src={code} alt="" />
          </div>
        </div>
        <div className="mockup-phone border-primary">
          <div className="camera"></div>
          <div className="display">
          <img src={code1} alt="" />

          </div>
        </div>
        <div className="step-text-box self-center">
          <p className="font-extrabold text-8xl text-gray-400">02</p>
          <h3 className="font-bold text-4xl">Update whenever you want!</h3>
          <p className="step-description"></p>
        </div>
      </div>
    </>
  );
};

export default Features;
