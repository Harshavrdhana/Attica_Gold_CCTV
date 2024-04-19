import React from 'react'
import './addDevice.css'
import { MdErrorOutline } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Draggable from 'react-draggable';


const AddDevice = ({ closeModal }) => {
  return (
    <Draggable bounds='body'>
      <div className='mainAdd'>
        <div className='headerAdd'>
          <div>
            Add Device
          </div>
          <div><IoMdClose onClick={closeModal} style={{ cursor: "pointer" }} /></div>
        </div>

        <div className='menuAdd'>
          <div>
            <button className='autoadd'>Auto Add</button>
          </div>
          <div>
            <button className='manualadd'>Manual Add</button>
          </div>

        </div>
        <div className='contentAdd'>
          <div style={{ fontSize: '60px', color: 'gray' }}>
            <MdErrorOutline />
          </div>
          <div>
            No new Device found. Make sure the device is connected properly. <span style={{ color: 'blue' }}>Check connection <br />instruction </span>
          </div>
          <div style={{ color: 'gray' }}> If the Device and pc are not connected to the same router please add the device by <br />inputting the Device serial number</div>
          <br />

          <div>
            <button>Disconnected.Search again</button>
          </div>
        </div>
      </div>
    </Draggable>
  )
}

export default AddDevice