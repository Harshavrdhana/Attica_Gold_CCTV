import React, { useState } from 'react'
import './addDevice.css'
import { IoMdClose } from "react-icons/io";
import Draggable from 'react-draggable';
import { AutoAdd } from './Devices/AutoAdd';
import { ManualAdd } from './Devices/ManualAdd';


const AddDevice = ({ closeModal }) => {
const[autoAdd,setAutoAdd]=useState(true);
const[manualAdd,setManualAdd]=useState(false);


const HandleAutoAdd=()=>{
  setAutoAdd(true);
  setManualAdd(false);
}

const HandleManualAdd=()=>{
  setAutoAdd(false);
  setManualAdd(true);
}


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
            <button onClick={HandleAutoAdd} className= {`autoadd ${autoAdd ? 'auto-active': ''}`}>Auto Add</button>
          </div>
          <div>
            <button onClick={HandleManualAdd} className={`manualadd ${manualAdd ? 'manual-active': ''}`}>Manual Add</button>
          </div>

        </div>
        
        {autoAdd && <AutoAdd/>}
        {manualAdd && <ManualAdd/>}
      </div>
    </Draggable>
  )
}

export default AddDevice