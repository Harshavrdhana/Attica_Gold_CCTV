import { useState } from "react";
import "./navbar.css";
import logo from "../../assets/attica-gold-company-logo.jpg";
import { useNavigate } from "react-router-dom";
import { FaRegBell } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdPower } from "react-icons/io";
import ProfileModal from './profile/ProfileModal'

import { useLogoutMutation } from "../../redux/api/usersApi";

import { logout } from "../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [logoutApiCall] = useLogoutMutation();
  const [modalProfile, setModalProfile] = useState(false)

  const handleModalProfile = () => {
    setModalProfile(!modalProfile);
  };

  const logoutHandler = async () => {
    try {
      await logoutApiCall();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }
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
                onClick={handleModalProfile}
                style={{ cursor: "pointer" }}
              />
              {modalProfile && <ProfileModal handleModalProfile={handleModalProfile} />}
              <span style={{ fontSize: "14px" }}>User</span>
            </div>
          </div>
          <div className="nav-logout">
            <p onClick={logoutHandler} style={{ cursor: "pointer" }}>
              <IoMdPower />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar