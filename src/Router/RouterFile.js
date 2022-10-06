import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import ViewTable from "../components/ViewTable";
import AddUser from "../components/AddUser";
import EditUser from "../components/EditUser";

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
              <ViewTable />
            </div>
          }
        />
        <Route exact path="/add" element={<AddUser />} />
        <Route exact path="/editUser" element={<EditUser />} />
      </Routes>
    </div>
  );
};

export default RouterFile;
