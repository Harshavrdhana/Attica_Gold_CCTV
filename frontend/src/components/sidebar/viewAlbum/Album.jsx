import React from 'react'
import './album.css'
import { MdErrorOutline } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Draggable from 'react-draggable';


const Album = ({ closeModal }) => {
  return (
    <Draggable bounds='body'>
      <div className='mainAdd'>
        <div className='headerAdd'>
          <div>
            Local Album
          </div>
          <div><IoMdClose onClick={closeModal} style={{ cursor: "pointer" }} /></div>
        </div>

        <div className='contentAdd'>
          <div style={{ fontSize: '60px', color: 'gray' }}>
            <MdErrorOutline />
          </div>
          <div>
            No photos and videos
          </div>
        </div>
      </div>
    </Draggable>
  )
}

export default Album