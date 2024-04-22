import React from 'react'
import logo from '../../../../assets/profileImage.jpg'

const UserAccount = () => {
  return (
    <>
      <div>
        <div className='profile-photo'>
          <h1 className='profile-pic-information'>Photo Information</h1>
          <div>
            <img style={{ height: '12vW', paddingLeft: '20px', paddingTop: '0px' }} src={logo} alt="" />
          </div>
        </div>

        <div className='profile-information'>
          <h1 className='profile-acc-information'>Account Information</h1>
          <div className='profile-input'>
            <label htmlFor="">Nickname</label> <span style={{ marginLeft: '11vw' }}></span> <input placeholder='Attica' type="text" />
            <br /><br />
            <label htmlFor="">User Name</label>
            <br /><br />
            <label htmlFor="">Region</label>
            <br /><br />
            <label htmlFor="">Real Name</label> <span style={{ marginLeft: '162px' }}></span> <input type="text" />
            <br /><br />
            <label htmlFor="">Address</label> <span style={{ marginLeft: '181px' }}></span> <input type="text" />
            <br /><br />
            <label htmlFor="">E-mail</label> <span style={{ marginLeft: '190px' }}></span> atticacamera@gmail.com <span style={{ color: 'blue' }}>Modify</span>
            <br /><br />
            <label htmlFor="">Phone Number</label> <span style={{ color: 'blue', marginLeft: '87px' }}>Modify</span>
            <br /><br />
            <button className='profile-save-button'>Save</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserAccount