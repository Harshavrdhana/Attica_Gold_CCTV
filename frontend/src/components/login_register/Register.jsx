import "./Register.css";
import logo from "../../assets/attica-gold-company-logo.jpg";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../../redux/api/usersApi";
import { toast } from "react-toastify";
import { setCredentials } from "../../redux/features/auth/authSlice";

const Register = () => {
  const [name, setName] = useState("");

  const [username, setUsername] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [register, { isLoading }] = useRegisterMutation();

  // const { search } = useLocation();

  // const sp = new URLSearchParams(search);

  // const redirect = sp.get("redirect") || "/login";

  useEffect(() => {
    if (userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        await register({
          name,
          username,
          employeeId,
          password,
          confirmPassword,
        });
        // dispatch(setCredentials({ ...res }));
        navigate("/login");
        toast.success("User successfully registered");
      } catch (err) {
        console.log(err);
        toast.error(err.data?.message || err.error);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="register-container">
      <img src={logo} alt="logo" width={171} height={80} />
      <div className="register">
        <h4>REGISTER</h4>
        <div className="input-element">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-element">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-element">
          <label htmlFor="employeeId">EmployeeId</label>
          <input
            id="employeeId"
            type="text"
            name="employeeId"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        </div>
        <div className="input-element">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-element">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* *********************** */}

        {/* <div className="conditions-element">
          <button className="checkbox"></button>
          <span>I accept all terms & conditions</span>
        </div> */}
        <button className="register-button" type="submit">
          {isLoading ? "Registering..." : "Register"}
        </button>
        <p className="login-button">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </form>
  );
};

export default Register;
