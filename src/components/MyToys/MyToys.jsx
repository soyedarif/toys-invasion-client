import { useContext, useEffect, useState } from "react";
import NavigationBar from "../../shared/NavigationBar";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import MyToy from "./ToyView";
import ToyView from "./ToyView";
import Loading from "../Loading";
import Swal from "sweetalert2";
import Modal from "../Modal/Modal";

const MyToys = () => {
  const { user, loading } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [toyData, setToyData] = useState([]);
  const [sort, setSort] = useState("");
  const [shouldchange, setShouldChange] = useState(true);
  useTitle("MyToys");

  const url = `http://localhost:5000/toys?email=${user.email}&sort=${sort}`;
  useEffect(() => {
    if (shouldchange) {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setMyToys(data);
          setShouldChange(!shouldchange);
        });
    }
  }, [sort, shouldchange]);

  const handleDeleteData = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              const remaining = myToys.filter(t => t._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  const handleUpdateDataID = id => {
    fetch(`http://localhost:5000/toys/${id}`)
      .then(res => res.json())
      .then(data => setToyData(data));
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
        <label className="mr-4" htmlFor="sortOption">
          Sort by Price:
        </label>
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
              <ToyView handleUpdateDataID={handleUpdateDataID} handleDeleteData={handleDeleteData} key={toy._id} toy={toy}></ToyView>
            ))}
          </tbody>
        </table>
      </div>
      <Modal toyData={toyData} setShouldChange={setShouldChange}></Modal>
    </>
  );
};

export default MyToys;
