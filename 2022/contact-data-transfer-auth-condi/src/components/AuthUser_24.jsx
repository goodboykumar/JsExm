//it is for conditional rendering based on cond load data
//it is for user auth case
import React, { useState } from "react";

const AuthUser_24 = () => {
  const [state, setState] = useState({
    isLoggedIn: false
  });

  let login = () => {
    setState((state) => ({
      isLoggedIn: true
    }));
  };
  let logout = () => {
    setState((state) => ({
      isLoggedIn: false
    }));
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-lg ">
              <div className="card-body">
                {state.isLoggedIn ? (
                  <p className="h3"> Welcome Sanjay</p>
                ) : (
                  <p className="h3"> Welcome Guest!</p>
                )}
                {state.isLoggedIn ? (
                  <button onClick={logout} className="btn btn-warning btn-sm">
                    {" "}
                    Logout
                  </button>
                ) : (
                  <button onClick={login} className="btn btn-success btn-sm">
                    {" "}
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthUser_24;
