import React, { useState } from 'react'
import './allDevices.css'
import { IoMdClose } from "react-icons/io";
import Draggable from 'react-draggable';
import { DeviceAccount } from './Devices/DeviceAccount';
import { DeviceLan } from './Devices/DeviceLan';

const AllDevices = ({ closeModal }) => {
  const [devices, setDevices] = useState(true);
  const [devicesLan, setDeviceLan] = useState(false);

  const HandleDevice = () => {
    setDevices(true);
    setDeviceLan(false);
  }

  const HandleDeviceLan = () => {
    setDevices(false);
    setDeviceLan(true);
  }


  return (
    <Draggable bounds='body'>
      <div className='allDevice-main'>
        <div className='allDevice-navbar'>
          <div>
            All Devices
          </div>
          <div
            onClick={closeModal}
            style={{ cursor: 'pointer' }}
          ><IoMdClose /></div>
        </div>
        <div className='allDevice-menu' >
          <div
            className={`allDevice-lan ${devices ? "active-lan": ""}`}
            onClick={HandleDevice}
            style={{ paddingBottom: '15px', paddingTop: '5px', paddingLeft: '5px', paddingRight: '5px' }}

          >
            Devices under the Account
          </div>
          <div
            className={`allDevice-lan ${devicesLan ? "active-lan": ""}`}
            onClick={HandleDeviceLan}
            style={{ paddingBottom: '15px', paddingTop: '5px', paddingLeft: '5px', paddingRight: '5px' }}
          >
            Found Device on LAN
          </div>
        </div>
        {devices && <DeviceAccount />}
        {devicesLan && <DeviceLan />}
      </div>
    </Draggable>
  )
}

export default AllDevices;