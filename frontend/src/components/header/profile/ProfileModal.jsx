import React, { useState } from 'react'
import './profileModal.css'
import logo from '../../../assets/profileImage.jpg'
import { Link } from 'react-router-dom';
import Draggable from 'react-draggable';
import { IoIosClose } from "react-icons/io";



const Profile = ({ closeModal }) => {
  const [showPasswordFields, setShowPasswordFields] = useState(false);

  const handlePasswordChangeClick = () => {
    setShowPasswordFields(true);
  };
  return (
    <Draggable bounds='body'>
      <div className='profile-main'>
        <div className='profile-navbar'>
          <p>User Management</p>
          <div className="about-close">
            <IoIosClose style={{ cursor: "pointer" }} onClick={closeModal} />
          </div>
        </div>
        <div className='profile-nav2'>

          <div className='profile-account'> User Account</div>
          <Link to="/change-password"><div className='profile-password' onClick={handlePasswordChangeClick}>Change Password </div></Link>

        </div>
        <div>
          <div className='profile-photo'>
            <h1 className='profile-pic-information'>Photo Information</h1>
            <div>
              <img style={{ height: '12vW', paddingLeft: '20px', paddingTop: '0px' }} src={logo} alt="" />
            </div>
          </div>

          <div className='profile-information'>
            <h1 className='profile-acc-information'>Account Information</h1>
            <div className='profile-input'>
              <label htmlFor="">Nickname</label> <span style={{ marginLeft: '11vw' }}></span> <input placeholder='Attica' type="text" />
              <br /><br />
              <label htmlFor="">User Name</label>
              <br /><br />
              <label htmlFor="">Region</label>
              <br /><br />
              <label htmlFor="">Real Name</label> <span style={{ marginLeft: '162px' }}></span> <input type="text" />
              <br /><br />
              <label htmlFor="">Address</label> <span style={{ marginLeft: '181px' }}></span> <input type="text" />
              <br /><br />
              <label htmlFor="">E-mail</label> <span style={{ marginLeft: '190px' }}></span> atticacamera@gmail.com <span style={{ color: 'blue' }}>Modify</span>
              <br /><br />
              <label htmlFor="">Phone Number</label> <span style={{ color: 'blue', marginLeft: '87px' }}>Modify</span>
              <br /><br />
              <button className='profile-save-button'>Save</button>
            </div>
          </div>
        </div>

      </div>
    </Draggable>
  )
}

export default Profile