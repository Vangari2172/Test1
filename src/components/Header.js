import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-light"
        style={{
          display: "flex",
          justifyContent: "right",
          marginRight: "3%",
        }}
      >
        <Link to="/add">
          <div>
            <button
              className="btn"
              style={{ backgroundColor: "orangered", color: "white" }}
            >
              Add Product
            </button>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
