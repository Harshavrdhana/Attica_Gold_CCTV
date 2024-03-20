import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom' 

const Footer = () => {
  return (
    <div className='footer'>
      <Link to='/section?custom=1'>one</Link>
      <Link to='/section?custom=9'>two</Link>
      <Link to='/section?custom=25'>three</Link>
      {/* <button onClick={handleClick} value={1}>1*1</button>
      <button onClick={handleClick} value={9}>3*3</button>
      <button onClick={handleClick} value={25}>5*5</button> */}
    </div>
  )
}

export default Footer