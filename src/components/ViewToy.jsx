import React from 'react';
import NavigationBar from '../shared/NavigationBar';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import "@smastrom/react-rating/style.css";


const ViewToy = () => {
    const toy=useLoaderData()
    const {name,quantity,category,price,url,seller,ratings,_id,description,email}=toy
    return (
        <>
                  <div className="bg-secondary">
        <NavigationBar />
      </div>
                  <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col space-x-12 lg:flex-row">
    <img src={url} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl mb-4 font-bold">{name}</h1>
      <p className="pb-2">{description}</p>
      <p className="pb-2">Seller: {seller?.seller}</p>
      <p className="pb-2">Seller Email: {email?.email}</p>
      <p className="pb-2">Price: ${price}</p>
      <p className="pb-2">Available: {quantity}</p>
      <div className='w-1/6 pb-2'>
          <Rating value={ratings} readOnly />
      </div>
    </div>
  </div>
</div>
        </>
    );
};

export default ViewToy;