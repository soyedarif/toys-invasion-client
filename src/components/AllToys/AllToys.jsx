
import { useLoaderData } from "react-router-dom";
import NavigationBar from "../../shared/NavigationBar";
import SingleToy from "./SingleToy";
import { useState } from "react";

const AllToys = () => {
  const allToys = useLoaderData();
  const [sortOption, setSortOption] = useState('');

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
  };

  const sortedToys = () => {
    if (sortOption === 'asc') {
      return [...allToys].sort((a, b) => a.price - b.price); 
    } else if (sortOption === 'desc') {
      return [...allToys].sort((a, b) => b.price - a.price); 
    } else {
      return [...allToys]; 
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price and Quantity</th>
              <th>Seller</th>
              <th>
                <label htmlFor="sortOption">Sort by:</label>
                <select className="rounded-lg bg-primary text-white outline-0" id="sortOption" value={sortOption} onChange={handleSortOptionChange}>
                  <option value="">Select an option</option>
                  <option value="asc">Price (Low to High)</option>
                  <option value="desc">Price (High to Low)</option>
                </select>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedToys().map((singleToy) => (
              <SingleToy key={singleToy._id} singleToy={singleToy} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllToys;
