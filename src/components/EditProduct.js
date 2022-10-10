import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { update_user } from "../redux/actions/index";

const EditUser = () => {
  const edit_data = useSelector((state) => state.userList.editData);
  const navigate = useNavigate();

  const [pName, setPName] = useState(edit_data[0].pName);
  const [pDes, setPDes] = useState(edit_data[0].pDes);
  const [price, setPrice] = useState(edit_data[0].price);
  const [quantity, setQuantity] = useState(edit_data[0].quantity);

  const dispatch = useDispatch();

  // setID(edit_data[0].id);

  const handleUpdate = (e) => {
    e.preventDefault();

    const arr = {
      id: edit_data[0].id,
      pName: pName,
      pDes: pDes,
      price: price,
      quantity: quantity,
    };

    dispatch(update_user(arr));

    navigate("/");
  };
  return (
    <div className="container mt-5">
      <form onSubmit={handleUpdate} className="row">
        <div className="col-6 mb-5">
          <input
            type="text"
            required
            placeholder="Product Name"
            className="form-control"
            value={pName}
            onChange={(e) => setPName(e.target.value)}
          />
        </div>
        <div className="col-6 mb-5">
          <input
            type="text"
            required
            placeholder="Product Description"
            className="form-control"
            value={pDes}
            onChange={(e) => setPDes(e.target.value)}
          />
        </div>
        <div className="col-6 mb-5">
          <input
            type="number"
            placeholder="Price"
            className="form-control"
            required
            min="0"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="col-6 mb-5">
          <input
            type="number"
            placeholder="Quantity"
            className="form-control"
            required
            min="0"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            className="btn"
            style={{ backgroundColor: "orangered", color: "white" }}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
