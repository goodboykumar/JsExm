import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../features/authSlice";
import { toast } from "react-toastify";
import { useRegisterUserMutation } from "../services/authApi";

const RegisterForm = () => {
  const [state, setState] = useState({
    user: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
  });

  const [
    registerUser,
    {
      data: registerDAta,
      isSuccess: isRegisterSuccess,
      isError: isRegisterError,
      error: RegisterError,
    },
  ] = useRegisterUserMutation();

  let updateInput = (event) => {
    setState((state) => ({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    }));
  };

  let submitRegister = async (event) => {
    //make sure you write this
    event.preventDefault();
    if (user.password !== user.confirmpassword) {
      toast.error("Password didn't matched");
    }

    if (user.firstName && user.email && user.password) {
      await registerUser({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      });
    } else {
      toast.error("Please fill the all input field");
    }
  };

  const dispatch = useDispatch();

  //useEff for setting the data in localstorage
  useEffect(() => {
    if (isRegisterSuccess) {
      toast.success("user registered successfully");

      dispatch(
        setUser({ name: registerDAta.result.name, token: registerDAta.token })
      );

      navigate("/dashboard");
    }
  }, [isRegisterSuccess]);

  //useEff for showing the error msg coming from backend
  useEffect(() => {
    if (isRegisterError) {
      toast.error(RegisterError.data.message);
    }
  }, [isRegisterError]);

  const navigate = useNavigate();

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
                      name="firstName"
                      value={user.firstName}
                      onChange={updateInput}
                      type="text"
                      className="form-control"
                      placeholder="first Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      name="lastName"
                      value={user.lastName}
                      onChange={updateInput}
                      type="text"
                      className="form-control"
                      placeholder="last Name"
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
                    <input
                      name="confirmpassword"
                      value={user.confirmpassword}
                      onChange={updateInput}
                      type="password"
                      className="form-control"
                      placeholder="confirm password"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="submit"
                      className="btn btn-warning btn-sm"
                      value="Register"
                    />
                  </div>

                  <Link to="/login">
                    <button className="btn btn-info btn-sm">Login</button>
                  </Link>
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
