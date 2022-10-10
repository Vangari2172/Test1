import "./Table.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { delete_user, edit_user } from "../redux/actions/index";

const Table = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.userList.list);
  const navigate = useNavigate();

  return (
    <div style={{ margin: "5px" }}>
      <table className="table striped mt-5">
        <thead>
          <tr className="table-secondary">
            <th>Sr No.</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Price (Rs)</th>
            <th>Quantity (Pcs)</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {value.map((item, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.pName}</td>
                <td>{item.pDes}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>

                <td>
                  <button
                    onClick={() => {
                      dispatch(edit_user(item.id));

                      navigate("/edit");
                    }}
                    className="btn"
                    style={{ backgroundColor: "orangered", color: "white" }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => dispatch(delete_user(item.id))}
                    className="btn"
                    style={{ backgroundColor: "orangered", color: "white" }}
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

export default Table;
