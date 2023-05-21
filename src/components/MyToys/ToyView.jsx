import React from "react";
import { Link } from "react-router-dom";

const ToyView = ({ toy }) => {
  const { name, quantity, category, price, url, seller, _id, description } = toy;
  return (
    <>
      <tr>
        <th></th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={url} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{category}</div>
            </div>
          </div>
        </td>
        <td>
          Price: ${price}
          <br />
          <span className="badge badge-ghost badge-sm">Available: {quantity}</span>
        </td>
        <td>{seller}</td>
        <th>
          <button className="btn">Update</button>
        </th>
        <th>
          <button className="btn btn-circle btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </th>
      </tr>
    </>
  );
};

export default ToyView;
