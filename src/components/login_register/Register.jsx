import "./Register.css";

const Register = () => {
  return (
    //  Container

    <section className="container">
      <img src={logo} alt="logo" width={171} height={80} />
      <div className="register">
        <h4>REGISTER</h4>

        {/* *********Simplified Code, feel free uncomment and check********************* */}

        {/* {[
          "Name",
          "User name",
          "Employee ID",
          "Password",
          "Confirm Password",
        ].map((element, index) => (
          <div key={index} className="input-element">
            <p>{element}</p>
            <input type="text" />
          </div>
        ))} */}

        {/* *************************************** */}

        {/* Input Elements */}

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
    </section>
  );
};

export default Register;
