import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userData } from "../redux/actions/index";
import { v4 as uuid } from "uuid";

const AddUser = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const _id = uuid();

  const submitHandler = (e) => {
    e.preventDefault();
    const arr = {
      id: _id,
      fName: e.target[0].value,
      lName: e.target[1].value,
      age: e.target[2].value,
      eMail: e.target[3].value,
      password: e.target[4].value,
      contact: e.target[5].value,
    };

    dispatch(userData(arr));
    navigate("/");
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler} className="row mt-5">
        <div className="mb-5 col-md-6">
          <input
            className="form-control"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="mb-5 col-md-6">
          <input className="form-control" type="text" placeholder="Last Name" />
        </div>
        <div className="mb-5 col-md-6">
          <input
            className="form-control"
            type="number"
            placeholder="Age"
            min="1"
          />
        </div>
        <div className="mb-5 col-md-6">
          <input className="form-control" type="email" placeholder="Email" />
        </div>
        <div className="mb-5 col-md-6">
          <input
            className="form-control"
            type="password"
            placeholder="password"
          />
        </div>
        <div className="mb-5 col-md-6">
          <input
            className="form-control"
            type="number"
            placeholder="Contact No"
          />
        </div>
        {/* <Link to="/"> */}
        <div className="text-center mt-3">
          <button className="btn btn-warning">Submit</button>
        </div>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default AddUser;
