import React from 'react'
import './sidebar.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { PiChatCenteredTextThin } from "react-icons/pi";
import { HiOutlinePlus } from "react-icons/hi";
import { CiSettings } from "react-icons/ci";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Sidebar = () =>{

    const [hamburgerClicked, setHamburgerClicked] = React.useState(false)

    return (
        <div className='sidebar'>
            <div
                className={`menu ${hamburgerClicked ? 'open' : ''}`}
                onClick={() => setHamburgerClicked(!hamburgerClicked)}
                style={{cursor:'pointer'}}
            >
                <RxHamburgerMenu />
            </div>
            {hamburgerClicked && <div className={`sidebar-4icons ${hamburgerClicked ? 'open' : ''}`}>
                <PiChatCenteredTextThin />
                <HiOutlinePlus />
                <CiSettings />
                <IoMdInformationCircleOutline />
                <Link to='section'><FaEye/></Link>
            </div>}
        </div>
    )
}

export default Sidebar