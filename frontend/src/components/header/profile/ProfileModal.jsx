import React, { useState } from 'react'
import './profileModal.css'
import Draggable from 'react-draggable';
import Modal from 'react-modal';
import { IoIosClose } from "react-icons/io";
import UserAccount from './userManagement/UserAccount';
import ChangePassword from './userManagement/ChangePassword';

const ProfileModal = ({ handleModalProfile }) => {
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [showUserAccount, setShowUserAccount] = useState(true)
  const [showChangePassword, setShowChangePassword] = useState(false)


  const handlePasswordChangeClick = () => {
    setShowPasswordFields(true);
  };

  const handleShowUserAccount = () =>{
    setShowUserAccount(true)
    setShowChangePassword(false)
  }

  const handleShowPassword = () =>{
    setShowUserAccount(false)
    setShowChangePassword(true)
  }

  return (
    <Modal
      isOpen={true}
      onRequestClose={handleModalProfile}
      contentLabel="About Modal"
      className="about-modal"
      overlayClassName="modal-overlay"
    >
      <Draggable bounds='body'>
        <div className='profile-main'>
          <div className='profile-navbar'>
            <p>User Management</p>
            <div className="about-close">
              <IoIosClose style={{ cursor: "pointer" }} onClick={handleModalProfile} />
            </div>
          </div>
          <div className='profile-nav2'>
            <div
              className={`profile-account ${showUserAccount ? "page-active": ""}`}
              onClick={handleShowUserAccount}
            > User Account</div>
            <div
              className={`profile-account ${showChangePassword ? "page-active": ""}`}
              onClick={handleShowPassword}
            >Password Change</div>
          </div>
          {showUserAccount && <UserAccount/>}
          {showChangePassword && <ChangePassword/>}
        </div>
      </Draggable>
    </Modal>
  )
}

export default ProfileModal