import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { FaRegSquare } from "react-icons/fa6";
import { BsGrid3X3 } from "react-icons/bs";
import ContinuousSlider from './ContinuousSlider';

const Footer = () => {
  return (
    <div className='footer'>
      <div></div>
      <div className='footer-custom'>
        <Link to='/section?custom=1'><FaRegSquare /></Link>
        <Link to='/section?custom=9'><BsGrid3X3 /></Link>
        <Link to='/section?custom=25'>three</Link>

      </div>
      <div>
        <ContinuousSlider />
      </div>
    </div>
  )
}

export default Footer