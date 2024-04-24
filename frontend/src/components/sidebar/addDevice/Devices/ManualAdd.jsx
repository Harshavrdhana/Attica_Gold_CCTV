import React from 'react'

export const ManualAdd = () => {
  return (
    <div>
        <div style={{display:'flex',gap:'5px',marginTop:'10px'}}>
            <div  style={{marginLeft:'15px'}}><label htmlFor="">Input the serial number</label></div>
            <div ><input style={{height:'25px'}} type="text" /></div>
            <div><button style={{padding:'3px'}}>Search Now</button></div>
            <div><span style={{color:'blue'}}> What's a serial number?</span></div>

        </div>
        <div style={{marginLeft:'23vh',marginTop:'5px'}}> Input the device serial number to search</div>
    </div>
  )
}
