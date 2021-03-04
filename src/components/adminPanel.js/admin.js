import { Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  userLogout,
  getUser,
} from "./../../reduxToolkit/extraReducers/thunkUsers";
import { jwt_cookies } from "./../../reduxToolkit/reducers/reducerUser";

const Admin = ({ logIn }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const [tokenState, setTokenState] = useState("false");
  const [dataUser, setDataUser] = useState({});
  const token = useSelector((state) => state.reducer.token_jwt);

  const data_user = useSelector((state) => state.reducer.data_user);
  useEffect(async () => {
    dispatch(jwt_cookies());
    // dispatch(getUser(token));
  }, []);
  useEffect(() => {
    setTokenState(token);
    // dispatch(getUser(token));
  }, [token]);
  useEffect(() => {
    setDataUser(data_user);
    console.log(dataUser);
  }, [data_user]);
  return (
    <Container maxWidth="sm">
      <div className="App">
        <li>
          <Link to="/admin">my page</Link>
        </li>
        <li>
          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch(userLogout(tokenState));
              history.push("/login");
            }}
          >
            logout
          </button>
        </li>
        <p>my page</p>
      </div>
    </Container>
  );
};

export default Admin;
