import { Cursor } from 'mongoose'
import React from 'react'

const ChangePassword = () => {
  return (
    <div>
      <div style={{margin:'10px',background:' rgb(238, 228, 228)', fontWeight: '800', fontSize: '20px'}}>
        Change Password
      </div>
<div style={{gap:'10px',marginLeft:'10px',marginTop:'10px'}}>
      <div> <label htmlFor="">Old Password</label> <input style={{marginLeft:'8vw'}} type="text" /></div>
      <br />
      <div> <label htmlFor="">New Password</label> <input style={{marginLeft:'7.6vw'}} type="text" /></div>
      <br />
      <div> <label htmlFor="">Confirm Password</label> <input style={{marginLeft:'6vw'}} type="text" /></div>
    </div>
    <br />
    <div style={{marginLeft:'31vh'}}><button style={{padding:'2px 25px',cursor:'pointer'}}>SAVE</button></div>
    </div>
  )
}

export default ChangePassword