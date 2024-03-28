import React from 'react'
import Navbar from '../header/Navbar'
import Sidebar from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import './hostLayout.css'

const HostLayout = () => {
  return (
    <div className='host-layout'>
      <div className='content'>
        <Sidebar/>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default HostLayout