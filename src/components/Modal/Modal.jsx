const Modal = ({ toyData }) => {
  console.log(toyData);
  const { price, quantity, description } = toyData;

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <div className="mbody"></div>
        </div>
      </div>
    </>
  );
};

export default Modal;
