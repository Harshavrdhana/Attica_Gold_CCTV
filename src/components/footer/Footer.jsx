
import './footer.css';
import { Link } from 'react-router-dom';
import { FaRegSquare } from "react-icons/fa6";
import { BsGrid3X3 } from "react-icons/bs";
import { BsArrowsFullscreen } from "react-icons/bs";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { RxTransparencyGrid } from "react-icons/rx";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import React, { useState } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { AiOutlinePauseCircle } from "react-icons/ai";
import ContinuousSliders from './ContinuousSliders.jsx'
import { IoMdPower } from "react-icons/io";

const Footer = () => {

  const [isPlaying, setIsPlaying] = useState(false);

  const PlayPause = () => {
    setIsPlaying(!isPlaying);

  };
  return (
    <div className='footer'>

      <div className='footer-custom'>
        <Link to='section?custom=1' className='grid-link'><FaRegSquare className='grid-icon'/></Link>
        <Link to='section?custom=4' className='grid-link'><TfiLayoutGrid2 className='grid-icon'/></Link>
        <Link to='section?custom=9' className='grid-link'><BsGrid3X3 className='grid-icon'/></Link>
        <Link to='section?custom=16' className='grid-link'><TfiLayoutGrid4Alt className='grid-icon'/></Link>
        <Link to='section?custom=25' className='grid-link'><RxTransparencyGrid className='grid-icon-five'/></Link>
      </div>
   
      <div >
        <button style={{color:'gray'}} className='play-button' onClick={PlayPause}>
          {isPlaying ? (
            <AiOutlinePlayCircle />
          ) : (
            <AiOutlinePauseCircle />
          )}
        </button>
      </div>

      <div>
          <ContinuousSliders/>
      </div>

      <div className='expand-button'>
        <BsArrowsFullscreen />
        </div>
      </div>


  )
}


export default Footer