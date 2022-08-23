import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";

const PrivateRoute = ({ children }) => {
  //token word must be wrapped with {} other wise it will not get data and in useSelector getting data from store
  const { token } = useSelector((store) => {
    return store["auth"];
  });
  return token ? children : <LoadingToRedirect />;
};

export default PrivateRoute;

/*
Here the children is the components. here we are using because for security 
he have to login then only he can visit the inner page otherwise it will redirect to loading page
*/
