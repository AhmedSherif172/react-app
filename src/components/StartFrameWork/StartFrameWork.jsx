import React from 'react'
import logo from "./avataaars.svg"
import "./StartFrameWork.css"

export default function StartFrameWork() {
  return (
  <div className='background p-5 mt-5  text-white   '>
    <div className="   pb-5 pt-4 mt-5 mx-5 gap-3   d-flex justify-content-center align-items-center  flex-column ">
      <img className='  mb-4 logo' src={logo} alt="" />
      <h1 className=' fw-bolder text-white  '>START FRAMEWORK</h1>
      <div className=" d-flex gap-3 align-items-center  ">
        <div className=" lineabout"></div>
        <i class="fa-solid fa-star"></i>
        <div className="lineabout"></div>
      </div>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    
  </div>
  
  )
}
