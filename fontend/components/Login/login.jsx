import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert2";

import "../Login/login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./../../context/auth_context";
const Login = () => {
  const navigateTo = useNavigate();
  const { isLoggedIn, login, user } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/Login", {
        username: username,
        password: password,
      });
      if (response.data[0]["key_value"] == 1) {
        login(username);
        swal
          .fire({
            title: "LOGIN SUCCESS",
            icon: "success",
            showCancelButton: false,
            showConfirmButton: false,
            timer: 1000,
          })
          .then((link) => {
            navigateTo("/Home");
          });
      } else {
        swal.fire({
          title: "error",
          icon: "error",
          showCancelButton: false,
          showConfirmButton: false,
          timer: 1000,
        });
      }
    } catch (err) {
      console.error(err);
      setErr(`Can't login`);
    }
  };
  const style = {
    backgroundImage: "url(/../../../public/background_Login.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh", // Adjust height as needed
  };

  return (
    <div
      style={style}
      className="d-grid justify-content-center align-content-center shadow p-3"
    >
      <div className="d-inline-block text-dark background_fromlogin p-2 rounded-3">
        <div className="text-center m-4">
          <h2>Welcome to My word</h2>
        </div>
        <div className="d-flex justify-content-center">
          <form onSubmit={handleSubmit}>
            <div className="d-flex m-2 justify-content-between">
              <h5 className="m-2">User :</h5>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="d-flex m-2 justify-content-between">
              <h5 className="m-2">Password :</h5>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-flex m-2 justify-content-center">
              <button type="submit" className="btn btn-success m-3 w-100">
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
