import { useState } from "react";
import NavigationBar from "../shared/NavigationBar";

const AddToy = () => {
  const [category, setCategory] = useState('');
  const handleForm=(e)=>{

e.preventDefault()
const form=e.target;
const ratings=form.ratings.value;

}
const handleCategoryChange = (e) => {
  setCategory(e.target.value);
};
  return (
    <>
      <NavigationBar></NavigationBar>
      <h2 className=" text-4xl mb-4 text-center p-4">Add Your Favourite Toy!</h2>
      <div className="container mx-auto">
        <form onSubmit={handleForm} className=" mb-8 ">
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
              <input type="text" placeholder="seller" name="seller" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input type="number" placeholder="quantity" name="quantity" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text" placeholder="name" name="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" required name="email" className="input input-bordered" />
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
          <option value="" disabled >
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
              <input type="number" placeholder="description" name="description" className="input input-bordered" />
            </div>
          </div>
            <input className="btn  w-full" type="submit" value="Add Your Toy" />
        </form>
      </div>
    </>
  );
};

export default AddToy;
