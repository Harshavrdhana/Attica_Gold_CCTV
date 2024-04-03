import "./Register.css";
import logo from "../../assets/attica-gold-company-logo.jpg";

const Register = () => {
  return (
    <div className="register-container">
      <img src={logo} alt="logo" width={171} height={80} />
      <div className="register">
        <h4>REGISTER</h4>
        <div className="input-element">
          <p>Name</p>
          <input type="text" />
        </div>
        <div className="input-element">
          <p>User name</p>
          <input type="text" />
        </div>
        <div className="input-element">
          <p>Employee ID</p>
          <input type="text" />
        </div>
        <div className="input-element">
          <p>Password</p>
          <input type="text" />
        </div>
        <div className="input-element">
          <p>Confirm Password</p>
          <input type="text" />
        </div>

        {/* *********************** */}

        <div className="conditions-element">
          <button className="checkbox"></button>
          <span>I accept all terms & conditions</span>
        </div>
        <button className="register-button">Register Now</button>
        <p className="login-button">
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
