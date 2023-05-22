import { useContext, useEffect, useState } from "react";
import NavigationBar from "../../shared/NavigationBar";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import MyToy from "./ToyView";
import ToyView from "./ToyView";
import Loading from "../Loading";

const MyToys = () => {
  const { user, loading } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sort, setSort] = useState("");
  useTitle("MyToys");

  const url = `http://localhost:5000/toys?email=${user.email}&sort=${sort}`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setMyToys(data));
  }, [sort]);

  const handleDeleteData = id => {
    console.log(id);
  };
  const handleSortOptionChange = event => {
    setSort(event.target.value);
  };
  return (
    <>
      <div className="bg-secondary">
        <NavigationBar />
      </div>
      <h2 className=" text-4xl mb-4 text-center p-4">Explore Your Added Toys Here!</h2>
      <div className="text-center mb-4">
        <label className="mr-4" htmlFor="sortOption">Sort by:</label>
        <select className="rounded-lg bg-primary  text-white outline-0" id="sortOption" value={sort} onChange={handleSortOptionChange}>
          <option value="">Select an option</option>
          <option value="1">Price (Low to High)</option>
          <option value="-1">Price (High to Low)</option>
        </select>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price and Quantity</th>
              <th>Seller</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map(toy => (
              <ToyView handleDeleteData={handleDeleteData} key={toy._id} toy={toy}></ToyView>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToys;
