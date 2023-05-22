import { useLoaderData } from "react-router-dom";
import NavigationBar from "../../shared/NavigationBar";
import SingleToy from "./SingleToy";
import { useEffect, useRef, useState } from "react";

const AllToys = () => {
  const [allToys,setAllToys]=useState([])
  const searchRef=useRef(null)
  const [search,setSearch]=useState('')
  useEffect(()=>{
    fetch(`http://localhost:5000/toys?limit=20&search=${search}`)
    .then(res=>res.json())
    .then(data=>setAllToys(data))
  },
  [search])
  const handleSearch=()=>{
    console.log();
    setSearch(searchRef.current.value)
  }

  return (
    <>
      <div className="bg-secondary">
        <NavigationBar />
      </div>
      {/* search field */}
      <div className="flex justify-center ">
        <div className="form-control  mb-5">
          <div className="input-group">
            <input type="text" ref={searchRef} placeholder="Search…" className="input input-bordered" />
            <button onClick={handleSearch} className="btn btn-square btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* data table */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name and Category</th>
              <th>Price and Quantity</th>
              <th>Seller</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allToys.map(singleToy => (
              <SingleToy key={singleToy._id} singleToy={singleToy} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllToys;
