import React, { useContext } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";

const Toys = ({ item }) => {
  const { user } = useContext(AuthContext);
  const { _id, name, url, price, quantity, ratings } = item;
  return (
    <div className="card card-side h-[17.5rem] bg-base-100 shadow-xl">
      <figure className="w-1/2">
        <img src={url} className="object-cover w-full" alt="Movie" />
      </figure>
      <div className="p-4 grid w-1/2">
        <div>
          <h2 className="card-title mb-4">{name}</h2>
          <p className="mb-3">Price: ${price}</p>
          <p className="mb-3">Available: {quantity}</p>
          <Rating className="" value={ratings} readOnly />
        </div>
        <div className="card-actions mt-auto justify-end">
          <Link
            to={user ? `/toys/${_id}` : ""}
            onClick={
              !user
                ? () => {
                    toast.error("Please Login To View!", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
                  }
                : null
            }
            className="btn btn-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Toys;
