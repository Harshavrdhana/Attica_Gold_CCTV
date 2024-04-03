import React, { useEffect } from 'react'
import './sidebar.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoMdPhotos } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const Sidebar = ({ handleSize }) => {

    const [hamburgerClicked, setHamburgerClicked] = React.useState(false)
    const handleHamburger = () => {
        setHamburgerClicked(!hamburgerClicked);
    }
    useEffect(() => {
        handleSize(hamburgerClicked)
    }, [hamburgerClicked])

    return (
        <div className='sidebar'>
            <div className='sidebar-items'>
                <div
                    className='menu'
                    onClick={handleHamburger}
                    style={{ cursor: 'pointer' }}
                >
                    <div className={`${hamburgerClicked ? 'menu-open' : ''}`}>
                        {!hamburgerClicked ? <RxHamburgerMenu className='hamburger'/> : <div className='back'>< IoArrowBackCircleSharp /></div>}
                    </div>
                </div>
                <div className={` ${hamburgerClicked ? 'open' : 'sidebar-4icons'}`}>
                    {hamburgerClicked && < hr className='line' />}
                    <div className={`${hamburgerClicked ? 'sidebar-name' : ''}`}>
                        <IoMdAdd className='icon' />
                        {hamburgerClicked && <p className='icon-name'>Add a device</p>}
                    </div>
                    {hamburgerClicked && < hr className='line' />}
                    < div className={`${hamburgerClicked ? 'sidebar-name' : ''}`}>
                        <IoMdPhotos className='icon'  />
                        {hamburgerClicked && <p className='icon-name'>Local album</p>}
                    </div>
                    {hamburgerClicked && < hr className='line' />}
                    <div className={`${hamburgerClicked ? 'sidebar-name' : ''}`}>
                        <CiSettings className='icon'  />
                        {hamburgerClicked && <p className='icon-name'>Settings</p>}
                    </div>
                    {hamburgerClicked && < hr className='line' />}
                    <div className={`${hamburgerClicked ? 'sidebar-name': ''}`}>
                        <Link to='section' className='icon'  ><FaEye /></Link>
                        {hamburgerClicked && <p className='icon-name'>View</p>}
                    </div>
                    {hamburgerClicked && < hr className='line' />}
                </div>
            </div>
            { !hamburgerClicked && <div className='sidebar-info'>
                <IoInformationCircleOutline />
            </div>}
        </div>
    )
}
export default Sidebar