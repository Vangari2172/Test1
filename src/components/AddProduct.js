import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userData } from "../redux/actions/index";
import { v4 as uuid } from "uuid";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = uuid();

  const handleSubmit = (e) => {
    e.preventDefault();
    const arr = {
      id: _id,
      pName: e.target[0].value,
      pDes: e.target[1].value,
      price: e.target[2].value,
      quantity: e.target[3].value,
    };
    console.log(arr);
    dispatch(userData(arr));
    navigate("/");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="row  mt-5">
        <div className="col-6 mb-5">
          <input
            type="text"
            required
            placeholder="Product Name"
            className="form-control"
          />
        </div>
        <div className="col-6 mb-5">
          <input
            type="text"
            required
            placeholder="Product Description"
            className="form-control"
          />
        </div>
        <div className="col-6 mb-5">
          <input
            type="number"
            placeholder="Price"
            className="form-control"
            required
            min="0"
          />
        </div>
        <div className="col-6 mb-5">
          <input
            type="number"
            placeholder="Quantity"
            className="form-control"
            required
            min="0"
          />
        </div>
        <div className="text-center mt-3">
          <button
            className="btn"
            style={{ backgroundColor: "orangered", color: "white" }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
