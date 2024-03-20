import React from 'react'
import './navbar.css'
import { RxAvatar } from "react-icons/rx";
import { IoRemoveOutline } from "react-icons/io5";
import { PiSubtractSquareDuotone } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import logo from '../../assets/attica-gold-company-logo.jpg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='navbar'>
                <div className='nav-logo'>
                    <img className='attica-logo' src={logo} alt="logo" />
                </div>
                <div className='nav-detail'>
                    <div className='nav-avatar'>
                        <RxAvatar />
                        <Link to='/login'>Login</Link>
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