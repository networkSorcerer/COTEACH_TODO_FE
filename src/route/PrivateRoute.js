import React from "react";
import { Navigate } from "react-router-dom";
const PrivateRoute = (user, children) => {
  return (
    <div>
      user? children:
      <Navigate to="/login" />
    </div>
  );
};

export default PrivateRoute;
