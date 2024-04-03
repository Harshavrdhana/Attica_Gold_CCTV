import logo from "../../assets/attica-gold-company-logo.jpg";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <section className="forgot-container">
      <img src={logo} alt="logo" width={171} height={80} />
      <div className="register">
        <h4>FORGOT PASSWORD</h4>
        <div className="input-element">
          <p>Name</p>
          <input type="text" />
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
