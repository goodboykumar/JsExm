import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setUser } from "../features/authSlice";
import { useLoginUserMutation } from "../services/authApi";

const Login = () => {
  const [state, setState] = useState({
    user: {
      email: "",
      password: "",
    },
  });

  const [
    loginUser,
    {
      data: loginDAta,
      isSuccess: isLoginSuccess,
      isError: isLoginError,
      error: loginError,
    },
  ] = useLoginUserMutation();

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
    if (user.email && user.password) {
      await loginUser({ email: user.email, password: user.password });
    } else {
      toast.error("Please fill the all input field");
    }
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoginSuccess) {
      toast.success("user logged in successfully");
      navigate("/dashboard");
      dispatch(
        setUser({ name: loginDAta.result.name, token: loginDAta.token })
      );
    }
  }, [isLoginSuccess]);


  useEffect(()=>{
if(isLoginError){
    toast.error((loginError).data.message)
}
  },[isLoginError])

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
                <h4> Login</h4>
              </div>
              <div className="card-body bg-light">
                <form onSubmit={submitRegister}>
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
                      type="submit"
                      className="btn btn-warning btn-sm"
                      value="Login"
                    />
                  </div>

                  <Link to="/register">
                    <button className="btn btn-info btn-sm">Register</button>
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

export default Login;
