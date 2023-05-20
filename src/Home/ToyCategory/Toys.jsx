import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const Toys = ({ item ,setUniqueId}) => {
  const {_id, name, url, price, ratings } = item;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="w-1/2">
        <img src={url} className="object-cover w-full" alt="Movie" />
      </figure>
      <div className="card-body w-1/2">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <Rating className=""  value={ratings} readOnly />
        <div className="card-actions justify-end">
          <Link to={`/toys/${_id}`} className="btn btn-primary">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Toys;
