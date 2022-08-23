import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../features/authSlice";

const Dashboard = () => {
  // get the store data from redux
  let userState = useSelector((store) => {
    return store["auth"];
  });
  let { name } = userState;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
    toast.success("user logged out successfully");
    navigate("/login");
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-header bg-warning">
                <h4> Welcome</h4>
              </div>
              <div className="card-body bg-light">
                <p>Hello :{name}</p>
                <button
                  className="btn btn-success"
                  onClick={() => handleLogOut()}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
