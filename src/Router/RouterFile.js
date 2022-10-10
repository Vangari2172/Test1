import React from "react";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";
import Header from "../components/Header";
import Table from "../components/Table";

const RouterFile = () => {
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Header />
              <Table />
            </div>
          }
        />
        <Route exact path="/add" element={<AddProduct />} />
        <Route exact path="/edit" element={<EditProduct />} />
      </Routes>
    </div>
  );
};

export default RouterFile;
