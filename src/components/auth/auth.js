import Login from "./login/login";
import Registration from "./registration/registration";
import { Container } from "@material-ui/core";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
const Auth = ({ logIn }) => {
  return (
    <Container maxWidth="sm">
      <div className="App">
        {logIn ? null : (
          <>
            <li>
              <Link to="/registeration">registeration</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
          </>
        )}
        <Route path="/login">
          {logIn ? <Redirect to="/admin" /> : <Login />}
        </Route>
        <Route path="/registeration">
          {logIn ? <Redirect to="/admin" /> : <Registration />}
        </Route>
      </div>
    </Container>
  );
};

export default Auth;
