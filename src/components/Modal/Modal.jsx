import { useRef } from "react";
import Swal from "sweetalert2";

const Modal = ({ toyData, setShouldChange }) => {
  const { _id, price, quantity, description } = toyData;
  const checkRef = useRef();

  const handleUpdateToy = e => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedToy = {
      price,
      quantity,
      description,
    };

    fetch(`https://toys-invasion-server.vercel.app/toys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Toy has been Updated",
            showConfirmButton: false,
            timer: 1500,
          });
          setShouldChange(true);
          checkRef.current.checked = false;
        }
      });
  };

  return (
    <>
      <input ref={checkRef} type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h2 className="text-3xl text-center ">Update Your Toy</h2>
          <form onSubmit={handleUpdateToy} className="mbody">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input type="text" placeholder="price" defaultValue={price} name="price" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input type="text" defaultValue={quantity} placeholder="quantity" name="quantity" className="input input-bordered" />
            </div>
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea defaultValue={description} placeholder="description" name="description" className="textarea textarea-bordered textarea-lg w-full"></textarea>
            </div>
            <input className="btn btn-primary w-full" type="submit" value="Update" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
