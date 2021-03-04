import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

import validator from "validator";
import { userRegistration } from "./../../../reduxToolkit/extraReducers/thunkUsers";
const Registration = () => {
  const [passVer, setPassVer] = useState(false);
  const registerForm = useRef(null);
  const dispatch = useDispatch();

  const handleClickEvent = () => {
    const userForm = registerForm.current;
    const number = userForm["phone"].value;
    const mail = userForm["email"].value;
    const password = userForm["password"].value;
    const password_confirmation = userForm["password_confirmation"].value;
    const phoneValidator = validator.isMobilePhone(number, "uk-UA");
    const emailValidator = validator.isEmail(mail);
    if (password.trim() === password_confirmation.trim()) {
      setPassVer(true);
    } else {
      alert("пароли не совпали");
      setPassVer(false);
    }
    if (phoneValidator || emailValidator || passVer) {
      dispatch(userRegistration(userForm));
      alert("вы зарегестрированы");
    } else {
      alert("неверный формат телефона или email");
    }
  };
  return (
    <div>
      <form ref={registerForm}>
        <label for="name" className="form-label">
          name
        </label>
        <input className="form-control" id="name" type="text" name={"name"} />
        <label for="surname" className="form-label">
          surname
        </label>
        <input
          className="form-control"
          id="surname"
          type="text"
          name={"surname"}
        />
        <label for="name_customer" className="form-label">
          name_customer
        </label>
        <input
          className="form-control"
          id="name_customer"
          type="text"
          name={"name_customer"}
        />
        <label for="email" className="form-label">
          email
        </label>
        <input className="form-control" id="email" type="text" name={"email"} />
        <label for="phone" className="form-label">
          phone
        </label>
        <input
          className="form-control"
          id="phone"
          type="text"
          name={"phone"}
          placeholder={"0956544567"}
        />
        <label for="role" className="form-label">
          role
        </label>
        <input
          className="form-control"
          id="role"
          type="text"
          name={"role"}
          placeholder={"1 or 2"}
        />
        <label for="password" className="form-label">
          password
        </label>
        <input
          className="form-control"
          id="password"
          type="text"
          name={"password"}
        />
        <label for="password_confirmation" className="form-label">
          password_confirmation
        </label>
        <input
          className="form-control"
          id="password_confirmation"
          type="text"
          name={"password_confirmation"}
        />
        <button onClick={handleClickEvent} className="btn btn-primary">
          Registration
        </button>
      </form>
    </div>
  );
};
export default Registration;
