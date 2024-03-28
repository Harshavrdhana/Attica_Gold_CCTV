import React from 'react'
import './navbar.css'
import { RxAvatar } from "react-icons/rx";
import { IoRemoveOutline } from "react-icons/io5";
import { PiSubtractSquareDuotone } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import logo from '../../assets/attica-gold-company-logo.jpg'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const Navigate=useNavigate();

    const handleClick=()=>{
        localStorage.removeItem('isLoggedIn')
        Navigate('/login')
    }
    return (
        <div>
            <div className='navbar'>
                <div className='nav-logo'>
                    <img className='attica-logo' src={logo} alt="logo" />
                </div>
                <div className='nav-detail'>
                    <div className='nav-avatar'>
                        <RxAvatar/>
                        <p onClick={handleClick} style={{cursor:'pointer'}}>Logout</p>

                    </div>
                    <div className='nav-customize'>
                        <IoRemoveOutline />
                        <PiSubtractSquareDuotone />
                        <RxCross2 />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;