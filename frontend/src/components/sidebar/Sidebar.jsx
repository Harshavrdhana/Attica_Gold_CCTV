import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdPhotos } from "react-icons/io";
import { LuWrench } from "react-icons/lu";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Modal from 'react-modal'
import About from "./aboutApp/About.jsx";
import Settings from "./settings/Settings.jsx"
import AllDevices from './allDevices/AllDevices.jsx'

const Sidebar = ({ handleSize }) => {
  const [hamburgerClicked, setHamburgerClicked] = React.useState(false);
  const [modalAbout, setModalAbout] = useState(false);
  const [modalSettings, setModalSettings] = useState(false);
  const [modalAllDevice, setModalAllDevice] = useState(false);
  const handleHamburger = () => {
    setHamburgerClicked(!hamburgerClicked);
  };

  useEffect(() => {
    handleSize(hamburgerClicked);
  }, [hamburgerClicked]);

  const handleAboutModal = () => {
    setModalAbout(!modalAbout)
  }
  const handleSettingsModal = () => {
    setModalSettings(!modalSettings)
  }
  const handleAllDeviceModal = () => {
    setModalAllDevice(!modalAllDevice)
  }

  return (
    <div className="sidebar">
      <div className="sidebar-items">
        <div
          className="menu"
          onClick={handleHamburger}
          style={{ cursor: "pointer" }}
        >
          <div className={`${hamburgerClicked ? "menu-open" : ""}`}>
            {!hamburgerClicked ? (
              <RxHamburgerMenu className="hamburger" />
            ) : (
              <div className="back">
                <IoArrowBackCircleSharp />
              </div>
            )}
          </div>
        </div>
        <div className={` ${hamburgerClicked ? "open" : "sidebar-4icons"}`}>
          {hamburgerClicked && <hr className="line" />}
          <div className={`${hamburgerClicked ? "sidebar-name" : ""}`}>
            <IoMdAdd className="icon" />
            {hamburgerClicked && <p className="icon-name">Add a device</p>}
          </div>
          {hamburgerClicked && <hr className="line" />}
          <div className={`${hamburgerClicked ? "sidebar-name" : ""}`}>
            <IoMdPhotos className="icon" />
            {hamburgerClicked && <p className="icon-name">Local album</p>}
          </div>
          {hamburgerClicked && <hr className="line" />}
          <div className={`${hamburgerClicked ? "sidebar-name" : ""}`}>
            <LuWrench
              className="icon"
              onClick={handleSettingsModal}
              style={{ cursor: 'pointer' }}
            />
            {hamburgerClicked && <p className="icon-name">Settings</p>}
              <Modal
                isOpen={modalSettings}
                onRequestClose={handleSettingsModal}
                contentLabel="Settings Modal"
                className="settings-modal"
                overlayClassName="modal-overlay"
              >

                <Settings closeModal={handleSettingsModal} />
              </Modal>
          </div>
          {hamburgerClicked && <hr className="line" />}
          <div className={`${hamburgerClicked ? "sidebar-name" : ""}`}>
            <IoSettingsOutline
              className="icon"
              onClick={handleAllDeviceModal}
              style={{ cursor: 'pointer' }}
            />
            {hamburgerClicked && <p className="icon-name">All Devices</p>}
              <Modal
                isOpen={modalAllDevice}
                onRequestClose={handleAllDeviceModal}
                contentLabel="AllDevice Modal"
                className="allDevice-modal"
                overlayClassName="modal-overlay"
              >

                <AllDevices closeModal={handleAllDeviceModal} />
              </Modal>
          </div>
          {hamburgerClicked && <hr className="line" />}
          <div className={`${hamburgerClicked ? "sidebar-name" : ""}`}>
            <Link to="section" className="icon">
              <FaEye />
            </Link>
            {hamburgerClicked && <p className="icon-name">View</p>}
          </div>
          {hamburgerClicked && <hr className="line" />}
        </div>
      </div>
      {!hamburgerClicked && (
        <div className="sidebar-info">
          <IoInformationCircleOutline
            onClick={handleAboutModal}
            style={{ cursor: "pointer" }}
          />
            <Modal
              isOpen={modalAbout}
              onRequestClose={handleAboutModal}
              contentLabel="About Modal"
              className="about-modal"
              overlayClassName="modal-overlay"
            >
              <About closeModal={handleAboutModal} />
            </Modal>
        </div>
      )}
    </div>
  );
};
export default Sidebar;
