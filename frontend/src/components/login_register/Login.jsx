import React from "react";
import "./login.css";
import logo from "../../assets/attica-gold-company-logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { usersData } from "../database/data.jsx";

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [loginDet, setLoginDet] = React.useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDet((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = usersData.find((user) => user.username === loginDet.username);
    if (user) {
      if (user.Password === loginDet.password) {
        setErrorMessage(null);
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        setLoginDet({
          username: "",
          password: "",
        });
        navigate("/");
      } else {
        setErrorMessage("Invalid password");
      }
    } else {
      setErrorMessage("User not found, please Register below");
    }
    setLoginDet({
      username: "",
      password: "",
    });
  };

  return (
    <div className="login-section">
      <div className="login">
        <div className="login-logo">
          <img src={logo} alt="" />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="login-credential">
          <label htmlFor="username">User name</label>
          <input
            className="login-input"
            type="text"
            name="username"
            value={loginDet.username}
            onChange={handleChange}
            required
          />
          <label htmlFor="password" className="label-password">
            Password
          </label>
          <input
            className="login-input"
            type="password"
            name="password"
            value={loginDet.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="login-button">
          <div className="forget-password">
            <Link to="/forgot-password">Forgot Password</Link>
          </div>
          <button
            type="submit"
            onClick={handleLogin}
            style={{ cursor: "pointer" }}
          >
            Login
          </button>
          <p>
            No account yet? <Link to="/register">Register</Link> one now
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
