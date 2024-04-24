import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const DeviceAccount = () => {
    return (
        <div>
            <div>
                <div className='allDevice-buttons'>
                    <div className='allDevice-refresh-button' style={{ marginRight: '5px', }}><button style={{ padding: '5px 10px 5px 10px' }} className='allDevice-refresh'>Refresh</button></div>
                    <div>
                        <button
                            style={{ color: 'blue', padding: '5px 10px 5px 10px' }}
                        >
                            + Add Devices
                        </button>
                    </div>
                </div>
                <div className='allDevice-content' >
                    <div style={{ paddingTop: '10px', display: 'flex' }} className='allDevice-header'>
                        <div>Test Camera  <FaRegEdit /></div><MdDeleteForever /></div>
                    <div className='allDevice-offline'><span style={{ background: 'orange' }}>Offline</span> <div className='allDevice-waterMark' style={{ fontSize: '50px', textAlign: 'center', paddingTop: '60px' }}>EZVIZ</div></div>

                    <div className='allDevice-systemDetail'>
                        <div>Current version</div>
                        <div>V5.3.8 build 230919</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
