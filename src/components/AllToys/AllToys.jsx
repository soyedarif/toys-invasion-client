
import { useLoaderData } from "react-router-dom";
import NavigationBar from "../../shared/NavigationBar";
import SingleToy from "./SingleToy";
import { useState } from "react";

const AllToys = () => {
  const allToys = useLoaderData();

  return (
    <>
      <div className="bg-secondary">
        <NavigationBar />
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name and Category</th>
              <th>Price and Quantity</th>
              <th>Seller</th>
              <th>
              
              </th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((singleToy) => (
              <SingleToy key={singleToy._id} singleToy={singleToy} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllToys;
