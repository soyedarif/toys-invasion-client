import { useLoaderData } from "react-router-dom";
import NavigationBar from "../../shared/NavigationBar";
import SingleToy from "./SingleToy";

const AllToys = () => {
  const allToys = useLoaderData();
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Name</th>
        <th>Price and Quantity</th>
        <th>Seller</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        allToys.map(singleToy=><SingleToy key={singleToy._id} singleToy={singleToy}></SingleToy>)
      }
      
</tbody>
    
  </table>
</div>
    </>
  );
};

export default AllToys;
