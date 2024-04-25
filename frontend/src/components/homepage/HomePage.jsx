import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../header/Navbar";
import img1 from "../../assets/homepageicon/photo_2024-04-24_15-50-26.jpg";
import img2 from "../../assets/homepageicon/photo_2024-04-24_15-50-00.jpg";
import img3 from "../../assets/homepageicon/photo_2024-04-24_15-50-11.jpg";
import img4 from "../../assets/homepageicon/photo_2024-04-24_17-39-35.jpg";
import img5 from "../../assets/homepageicon/photo_2024-04-24_15-50-07.jpg";
import img6 from "../../assets/homepageicon/photo_2024-04-24_15-50-36.jpg";
import img7 from "../../assets/homepageicon/photo_2024-04-24_15-50-42.jpg";
import img8 from "../../assets/homepageicon/register.png";
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
        <span>Agent Reg.</span>
      </div>
    </div>
  );
};
export default HomePage;