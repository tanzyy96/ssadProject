import React from "react";
import isAuth from "./../../utils/isAuth";
import { Snackbar } from "@material-ui/core";
import { Redirect } from "react-router-dom";

const Admin = () => {
  const isAuthenticated = isAuth();
  console.log(isAuthenticated);
  return !isAuthenticated ? (
    <React.Fragment>
      <Redirect to="/home" />
    </React.Fragment>
  ) : (
      <div>Admin placeholder here</div>
    );
};

export default Admin;
