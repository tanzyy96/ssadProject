import React from "react";
import { Redirect } from "react-router-dom";
import getCurrentUser from "./../../utils/getCurrentUser"

const Profile = () => {
  const user = getCurrentUser();

  return user ? <div>Profile placeholder here</div> : <Redirect to="/login" />;
};

export default Profile;
