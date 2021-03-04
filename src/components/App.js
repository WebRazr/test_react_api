import { jwt_cookies } from "./../reduxToolkit/reducers/reducerUser";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import Auth from "./auth/auth";
import Admin from "./adminPanel.js/admin";

// import Cookies from "js-cookie";
function App() {
  const [logIn, setLogIn] = useState("false");

  const auth = useSelector((state) => state.reducer.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(jwt_cookies());
  }, []);
  useEffect(() => {
    setLogIn(auth);
    console.log(auth);
  }, [auth]);

  return (
    <div className="App">
      {logIn ? <Redirect to="/admin" /> : <Redirect to="/login" />}
      <Route path="/admin">
        <Admin />
      </Route>
      <Route path={["/login", "/registeration"]}>
        <Auth />
      </Route>
    </div>
  );
}

export default App;
