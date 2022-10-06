import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { update_user } from "../redux/actions/index";

const EditUser = () => {
  const edit_data = useSelector((state) => state.userList.editData);
  const navigate = useNavigate();

  const [fName, setFName] = useState(edit_data[0].fName);
  const [lName, setLName] = useState(edit_data[0].lName);
  const [age, setAge] = useState(edit_data[0].age);
  const [email, setEmail] = useState(edit_data[0].eMail);
  const [password, setPassword] = useState(edit_data[0].password);
  const [contact, setContact] = useState(edit_data[0].contact);
  // const [ID, setID] = useState("");
  const dispatch = useDispatch();

  // setID(edit_data[0].id);

  const submitHandler = (e) => {
    e.preventDefault();

    const arr = {
      id: edit_data[0].id,
      fName: fName,
      lName: lName,
      age: age,
      eMail: email,
      password: password,
      contact: contact,
    };

    dispatch(update_user(arr));

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
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
        </div>
        <div className="mb-5 col-md-6">
          <input
            className="form-control"
            type="text"
            placeholder="Last Name"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
        </div>
        <div className="mb-5 col-md-6">
          <input
            className="form-control"
            type="number"
            placeholder="Age"
            min="1"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="mb-5 col-md-6">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5 col-md-6">
          <input
            className="form-control"
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-5 col-md-6">
          <input
            className="form-control"
            type="number"
            placeholder="Contact No"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="text-center mt-3">
          <button className="btn btn-warning">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
