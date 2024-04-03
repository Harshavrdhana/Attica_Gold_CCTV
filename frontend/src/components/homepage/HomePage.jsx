import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../header/Navbar";
import img1 from "../../assets/crm.png";
import img2 from "../../assets/live-streaming.png";
import img3 from "../../assets/transaction.png";
import img4 from "../../assets/database.png";
import img5 from "../../assets/documentation.png";
import img6 from "../../assets/recognition.png";
import img7 from "../../assets/billing.png";
import img8 from "../../assets/register.png";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="homepage-links">
      <div className="homepage-card">
        <img src={img1} alt="CRM" />
        <span>CRM</span>
      </div>
      <Link to='/homepage' className="homepage-card">
        <img src={img2} alt="Live Streaming" />
        <span>Live Streaming</span>
      </Link>
      <div className="homepage-card">
        <img src={img3} alt="Transaction" />
        <span>Transaction</span>
      </div>
      <div className="homepage-card">
        <img src={img4} alt="Data" />
        <span>Database</span>
      </div>
      <div className="homepage-card">
        <img src={img5} alt="Documentation" />
        <span>Documentation</span>
      </div>
      <div className="homepage-card">
        <img src={img6} alt="Face-Recognition" />
        <span>Face-Recognition</span>
      </div>
      <div className="homepage-card">
        <img src={img7} alt="Billing" />
        <span>Billing</span>
      </div>
      <div className="homepage-card">
        <img src={img8} alt="Register" />
        <span>Register</span>
      </div>
    </div>
  );
};
export default HomePage;