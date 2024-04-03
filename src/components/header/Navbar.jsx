import React from 'react'
import './navbar.css'
import logo from '../../assets/attica-gold-company-logo.jpg'
import { useNavigate } from 'react-router-dom';
import { FaRegBell } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdPower } from "react-icons/io";


const Navbar = () => {
    const Navigate = useNavigate();

    const handleClick = () => {
        localStorage.removeItem('isLoggedIn')
        Navigate('/login')
    }
    return (
        <div>
            <div className='navbar'>
                <div className='nav-logo'>
                    <img className='attica-logo' src={logo} alt="logo" />
                </div>

                <div className='nav-end'>
                    <div className='nav-detail'>
                        <FaRegBell className='nav-bell' />

                        <div className='nav-user'>
                            <FaRegUserCircle className='user'/> <span style={{ fontSize: '14px' }} >User</span>
                        </div>
                    </div>
                    <div className='nav-logout'>

                        <p onClick={handleClick} style={{ cursor: 'pointer' }}><IoMdPower /></p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;