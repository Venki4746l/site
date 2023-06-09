import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { autAction } from "../Redux/actions/LoginActions";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const isValidUSer = useSelector((state) => state.loginInfo.isAunticate);

  useEffect(() => {
    if (isValidUSer) {
      navigate("/");
    }
  }, [navigate, isValidUSer]);

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  //on submit the data
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(autAction(loginData));
    setLoginData({ username: "", password: "" });
  };
  return (
    <center>
      {token ? (
        <div>
          {" "}
          <p>User already login </p>
          <button onClick={() => navigate("/")} className="btn btn-warning">
            Go to Home page
          </button>
        </div>
      ) : (
        <div>
          <form
            onSubmit={onSubmitHandler}
            style={{ width: "30%" }}
            className="w-30"
          >
            <div className="form-group">
              <label htmlFor="inputUserName">User name</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={onChangeHandler}
                value={loginData.username}
                id="inputUserName"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={onChangeHandler}
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <p>username: mor_2314 </p>
          <p> password: 83r5^_ </p>
        </div>
      )}
    </center>
  );
};

export default LoginPage;
