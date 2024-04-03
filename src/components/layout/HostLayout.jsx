import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import './hostLayout.css'

const HostLayout = () => {

  const [resize, setResize] = React.useState(false);
  const handleSize = (newSize) => {
    setResize(newSize)
  }

  return (
    <div className='host-layout'>
      <div className={`${resize ? 'content-resize': 'content'}`}>
        <Sidebar handleSize={handleSize}/>
        <Outlet/>
      </div>
      <Footer/>
    </div >
  )
}

export default HostLayout;