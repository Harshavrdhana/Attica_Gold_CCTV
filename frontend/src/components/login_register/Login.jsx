import React, { useEffect, useState } from "react";
import "./login.css";
import logo from "../../assets/attica-gold-company-logo.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../redux/api/usersApi";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
// import { usersData } from "../database/data.jsx";

const Login = () => {
  // const navigate = useNavigate();
  // const [errorMessage, setErrorMessage] = React.useState(null);
  // const [loginDet, setLoginDet] = React.useState({
  //   username: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setLoginDet((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const user = usersData.find((user) => user.username === loginDet.username);
  //   if (user) {
  //     if (user.Password === loginDet.password) {
  //       setErrorMessage(null);
  //       localStorage.setItem("isLoggedIn", JSON.stringify(true));
  //       setLoginDet({
  //         username: "",
  //         password: "",
  //       });
  //       navigate("/");
  //     } else {
  //       setErrorMessage("Invalid password");
  //     }
  //   } else {
  //     setErrorMessage("User not found, please Register below");
  //   }
  //   setLoginDet({
  //     username: "",
  //     password: "",
  //   });
  // };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();

  const sp = new URLSearchParams(search);

  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ username, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      console.log(err);
      toast.error(err.data?.message || err.error);
    }
  };

  return (
    <div className="login-section">
      <div className="login">
        <div className="login-logo">
          <img src={logo} alt="" />
        </div>
        {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
        <div className="login-credential">
          <label htmlFor="username">User name</label>
          <input
            className="login-input"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password" className="label-password">
            Password
          </label>
          <input
            className="login-input"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            {isLoading ? "Logging in..." : "Login"}
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
