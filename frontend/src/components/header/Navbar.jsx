import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/attica-gold-company-logo.jpg";
import { useNavigate } from "react-router-dom";
import { FaRegBell } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdPower } from "react-icons/io";
import Modal from 'react-modal'
import ProfileModal from './profile/ProfileModal'
import Draggable from "react-draggable";

const Navbar = () => {
  const [modalProfile, setModalProfile] = useState(false)
  const Navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("isLoggedIn");
    Navigate("/login");
  };

  const openModal = () => {
    setModalProfile(true);
  };

  const closeModal = () => {
    setModalProfile(false);
  };
  return (
    <div>
      <div className="navbar">
        <div className="nav-logo">
          <img className="attica-logo" src={logo} alt="logo" />
        </div>
        <div className="nav-end">
          <div className="nav-detail">
            <FaRegBell className="nav-bell" />
            <div className="nav-user">
              <FaRegUserCircle
                className="user"
                onClick={openModal}
                style={{ cursor: "pointer" }} />
              <Modal
                isOpen={modalProfile}
                onRequestClose={closeModal}
                contentLabel="About Modal"
                className="about-modal"
                overlayClassName="modal-overlay"
              >
                  <ProfileModal closeModal={closeModal} />
              </Modal>
              <span style={{ fontSize: "14px" }}>User</span>
            </div>
          </div>
          <div className="nav-logout">
            <p onClick={handleClick} style={{ cursor: "pointer" }}>
              <IoMdPower />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
