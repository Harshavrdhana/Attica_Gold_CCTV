import React from 'react'
import './introPage.css'
import img from "../../assets/attica-gold-company-logo.jpg"

const IntroPage = () => {
  return (
    <div className='intro'>
        <img src={img} alt="" />
      {/* <h1>Welcome to Attica Gold Software</h1> */}
    </div>
  )
}

export default IntroPage
