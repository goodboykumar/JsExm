import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import RegisterForm from "./pages/RegisterForm";

//it is to use toastify all over component
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setUser } from "./features/authSlice";
import PrivateRoute from "./pages/PrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  // persisting the user with useEffect as user data stored in local storage
  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

/* 
Providing route here with toastify
*/
