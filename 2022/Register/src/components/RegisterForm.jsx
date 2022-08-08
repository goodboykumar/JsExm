import React, { useState } from "react";

const RegisterForm = () => {
  const [state, setState] = useState({
    user: {
      username: "",
      email: "",
      password: "",
      designation: "",
      bio: "",
      terms: false
    }
  });

  let updateInput = (event) => {
    setState((state) => ({
      user: {
        ...state.user,
        [event.target.name]: event.target.value
      }
    }));
  };

  //to get the checked value
  let updateCheck = (event) => {
    setState((state) => ({
      user: {
        ...state.user,
        [event.target.name]: event.target.checked
      }
    }));
  };

  let submitRegister = (event) => {
    //make sure you write this
    event.preventDefault();
    console.log(user);
  };

  //let's destructure
  let { user } = state;

  return (
    <>
      <pre>{JSON.stringify(state.user)} </pre>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-header bg-warning">
                <h4> Register</h4>
              </div>
              <div className="card-body bg-light">
                <form onSubmit={submitRegister}>
                  <div className="mb-3">
                    <input
                      name="username"
                      value={user.username}
                      onChange={updateInput}
                      type="text"
                      className="form-control"
                      placeholder="username"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      name="email"
                      value={user.email}
                      onChange={updateInput}
                      type="email"
                      className="form-control"
                      placeholder="email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      name="password"
                      value={user.password}
                      onChange={updateInput}
                      type="password"
                      className="form-control"
                      placeholder="password"
                    />
                  </div>
                  <div className="mb-3">
                    <select
                      name="designation"
                      value={user.designation}
                      onChange={updateInput}
                      className="form-control"
                    >
                      <option value=""> Select Designation </option>
                      <option value="Software Engineer">
                        {" "}
                        Software Engineer{" "}
                      </option>
                      <option value="Sr.Software Engineer">
                        {" "}
                        Sr.Software Engineer{" "}
                      </option>
                      <option value="Team Lead "> Team Lead </option>
                      <option value="Project Manager"> Project Manager </option>
                      <option value="Director"> Director </option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <textarea
                      name="bio"
                      value={user.bio}
                      onChange={updateInput}
                      className="form-control"
                      rows={4}
                      placeholder="Bio"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      name="terms"
                      onChange={updateCheck}
                      type="checkbox"
                      className="form-check-input"
                    />{" "}
                    Accept Terms
                  </div>
                  <div className="mb-3">
                    <input
                      type="submit"
                      className="btn btn-warning btn-sm"
                      value="Register"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
