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
          paddingRight: "20px",
        }}
      >
        <Link to="./add">
          <button className="btn btn-warning">ADD USER</button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
