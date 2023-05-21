import { useContext, useEffect, useState } from "react";
import NavigationBar from "../../shared/NavigationBar";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import MyToy from "./ToyView";
import ToyView from "./ToyView";

const MyToys = () => {
    const {user}=useContext(AuthContext);
    const [myToys, setMyToys]=useState([])
    useTitle('MyToys')

    const url=`http://localhost:5000/toys?email=${user.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMyToys(data))
    },[])
    console.log(myToys);
    return (
        <>
           <div className="bg-secondary">
        <NavigationBar />
      </div>
            <h2 className=" text-4xl mb-4 text-center p-4">Explore Your Added Toys Here!</h2>
            <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price and Quantity</th>
              <th>Seller</th>
              <th>
             Update
              </th>
              <th>
             Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {
              myToys.map(toy=><ToyView key={toy._id} toy={toy}></ToyView>)
            }
          </tbody>
        </table>
      </div>
        </>
    );
};

export default MyToys;