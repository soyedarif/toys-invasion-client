import { useContext, useState } from "react";
import NavigationBar from "../shared/NavigationBar";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";


const AddToy = () => {
  const {user}=useContext(AuthContext)
  const [category, setCategory] = useState('');

  const handleAddToy=(e)=>{
e.preventDefault()
const form=e.target;
const name=form.name.value;
const seller=form.seller.value;
const price=form.price.value;
const quantity=form.quantity.value;
const url=form.photoURL.value;
const email=form.email.value;
const ratings=form.ratings.value;
const description=form.description.value;
const toy={
  name,
  seller,
  quantity,
  url,
  price,
  email,
  ratings,
  category,
  description
  
}
console.log(toy);
fetch("https://toys-invasion-server.vercel.app/toys", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(toy)
    })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          toast.success('Toy Added!', {
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
        form.reset()
      });

}
const handleCategoryChange = (e) => {
  setCategory(e.target.value);
};
  return (
    <>
      <div className="bg-secondary">
        <NavigationBar />
      </div>
      <h2 className=" text-4xl mb-4 text-center p-4">Add Your Favourite Toy!</h2>
      <div className="container mx-auto">
        <form onSubmit={handleAddToy} className=" mb-8 ">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input type="text" placeholder="name" name="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input type="text" placeholder="seller" defaultValue={user?.displayName
} name="seller" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input type="number" placeholder="quantity" name="quantity" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input type="number" placeholder="price" name="price" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text" placeholder="photo URL" name="photoURL" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" defaultValue={user?.email} placeholder="email" required name="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Ratings</span>
              </label>
              <input type="number" placeholder="ratings" name="ratings" className="input input-bordered" />
            </div>
            {/* option selection */}
            <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick Category</span>
        </label>
        <select className="select select-bordered" onChange={handleCategoryChange}>
          <option value=""  >
            Pick one
          </option>
          <option value="dc">DC</option>
          <option value="marvel">Marvel</option>
          <option value="anime">Anime</option>
        </select>
      </div>
            {/* option selection ends */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input type="text" placeholder="description" name="description" className="input input-bordered" />
            </div>
          </div>
            <input className="btn  w-full" type="submit" value="Add Your Toy" />
        </form>
      </div>
    </>
  );
};

export default AddToy;
