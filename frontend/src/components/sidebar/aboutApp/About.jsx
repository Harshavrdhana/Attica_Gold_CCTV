import React from "react";
import { IoIosClose } from "react-icons/io";
import "./about.css";
import logo2 from "../../../assets/attica-gold-company-logo.jpg";
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
             <img className="about-Image" src={logo2} alt="" /> 
            <div className="about-name">
            
              <div>
                <p>1.1.0</p>
              </div>
            </div>
          </div>
          <div className="about-footer">
            &copy;2024 ATTICA Gold. All Rights Reserved. <br />
          
           
          </div>
        </div>
      </Draggable>
  );
};

export default About;
