import axios from "axios";
const url = "https://prozorro.mavinx.com/api/test";
class Api {
  //registration POST https://prozorro.mavinx.com/api/test/register
  // shema {name, surname, name_customer, email, phone, role, password, password_confirmation}
  Registration = async (dataRef) => {
    try {
      const objReg = {
        name: dataRef["name"].value,
        surname: dataRef["surname"].value,
        name_customer: dataRef["name_customer"].value,
        email: dataRef["email"].value,
        phone: dataRef["phone"].value,
        role: +dataRef["role"].value,
        password: dataRef["password"].value,
        password_confirmation: dataRef["password_confirmation"].value,
      };
      const register = await axios.post(`${url}/register`, objReg);
      console.log(register);
      return register;
    } catch (e) {
      console.log(e);
    }
  };
  // POST https://prozorro.mavinx.com/api/test/logout
  // shema {Authorization: token}
  Logout = async (token) => {
    try {
      const logout = await axios.post(
        `${url}/logout`,
        {},
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      console.log(logout);
      return logout;
    } catch (e) {
      console.log(e);
    }
  };
  // POST https://prozorro.mavinx.com/api/test/login
  // shema {email, password}
  Login = async (refLog) => {
    try {
      const objLog = {
        email: refLog["email"].value,
        password: refLog["password"].value,
      };
      const login = await axios.post(`${url}/login`, objLog);
      console.log(login);
      return login;
    } catch (e) {
      console.log(e);
    }
  };
  //POST https://prozorro.mavinx.com/api/test/edit-user
  //shema {header: {Authorization: token}, name, surname,  name_customer, role}
  EditUser = async (token, name, surname, name_customer, role) => {
    try {
    } catch (e) {
      console.log(e);
    }
  };
  //GET https://prozorro.mavinx.com/api/get-user
  //shema {header: {Authorization: token}}
  GetUser = async (token) => {
    try {
      const getUser = await axios.post(`${url}/get-user`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": null,
          Authorization: `${token}`,
        },
      });
      return getUser;
    } catch (e) {
      console.log(e);
    }
  };
}
export default new Api();
