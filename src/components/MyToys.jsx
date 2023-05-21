import { useContext, useEffect, useState } from "react";
import NavigationBar from "../shared/NavigationBar";
import { AuthContext } from "../context/AuthProvider";

const MyToys = () => {
    const {user}=useContext(AuthContext);
    const [myToys, setMyToys]=useState([])
    const url=`http://localhost:5000/toys?email=${user.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMyToys(data))
    },[])
    console.log(myToys);
    return (
        <>
            <NavigationBar></NavigationBar>
            <h2 className=" text-4xl mb-4 text-center p-4">Explore Your Added Toys Here!</h2>
            <div>

            </div>
        </>
    );
};

export default MyToys;