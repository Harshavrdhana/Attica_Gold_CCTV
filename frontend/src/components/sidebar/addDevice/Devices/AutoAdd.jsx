import React from 'react'
import { MdErrorOutline } from "react-icons/md";

export const AutoAdd = () => {
  return (
    <div>
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
  )
}
