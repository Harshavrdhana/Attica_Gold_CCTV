import React from "react";
import { IoIosClose } from "react-icons/io";
import "./about.css";
import Image1 from "../../../assets/AboutLogo.jpg";
import Draggable from 'react-draggable';

const About = ({closeModal}) => {
  return (
      <Draggable bounds="body">
        <div className="about-main">
          <div className="about-header">
            <div>About</div>
            <div className="about-close">
              <IoIosClose style={{cursor:"pointer"}} onClick={closeModal}/>
            </div>
          </div>
          <div className="about-content">
            <img className="about-Image" src={Image1} alt="" />
            <div className="about-name">
              <div>
                <h1>Ezviz Studio</h1>
              </div>
              <div>
                <p>2.3.0</p>
              </div>
            </div>
          </div>
          <div className="about-footer">
            &copy;2016 EZVIZ Inc. All Rights Reserved <br />
            For more information please visit
            <span style={{ color: "blue" }}> www.izvizlife.com</span>
          </div>
        </div>
      </Draggable>
  );
};

export default About;
