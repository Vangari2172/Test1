// import React, { useEffect } from "react";
import "./ViewTable.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { delete_user, edit_user } from "../redux/actions/index";

const ViewTable = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.userList.list);
  const navigate = useNavigate();

  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>password</th>
            <th>Contact No.</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {value.map((item, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.fName}</td>
                <td>{item.lName}</td>
                <td>{item.age}</td>
                <td>{item.eMail}</td>
                <td>{item.password}</td>
                <td>{item.contact}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(edit_user(item.id));

                      navigate("/editUser");
                    }}
                    className="btn btn-warning"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => dispatch(delete_user(item.id))}
                    className="btn btn-warning"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTable;
