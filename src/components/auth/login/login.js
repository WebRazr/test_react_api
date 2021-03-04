import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import {
  userRegistration,
  userLogin,
} from "../../../reduxToolkit/extraReducers/thunkUsers";
const Login = () => {
  let history = useHistory();
  const loginForm = useRef(null);
  const dispatch = useDispatch();

  const handleClickEvent = () => {
    const dataForm = loginForm.current;

    dispatch(userLogin(dataForm));
    history.push("/admin");
  };
  return (
    <div>
      <form ref={loginForm}>
        <label for="email" className="form-label">
          email
        </label>
        <input className="form-control" id="email" type="text" name={"email"} />
        <label for="password" className="form-label">
          password
        </label>
        <input
          className="form-control"
          id="password"
          type="text"
          name={"password"}
        />
        <button
          type={"submit"}
          onClick={handleClickEvent}
          className="btn btn-primary"
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
