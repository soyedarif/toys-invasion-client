import React from 'react';
import b1 from '/b1.png'
import b2 from '/b2.png'
import b3 from '/b3.png'
import b4 from '/b4.png'
import b5 from '/b5.png'

const Promotion = () => {
    return (
        <>
            <div className="text-center p-4 mt-11">
        <h2 className=" text-4xl mb-4">Promotional Partners!</h2>
        <p className="mb-4">
          Immerse Yourself in a World of Wonder and Play! Explore a captivating assortment of toys, <br /> each one a gateway to thrilling adventures and limitless possibilities.
        </p>
      </div>
      <div>
      <h2 class="text-center uppercase font-medium mb-6">As Featured In</h2>
                <div class="logos flex gap-4 brightness-0 opacity-50 flex-wrap justify-center items-center p-3">
                    <img className='h-12' src={b1} alt=""/>
                    <img className='h-12' src={b2} alt=""/>
                    <img className='h-12' src={b3} alt=""/>
                    <img className='h-12' src={b4} alt=""/>
                    <img className='h-12' src={b5} alt=""/>
                </div>
      </div>
        </>
    );
};

export default Promotion;