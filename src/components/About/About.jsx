import React, { useState } from 'react'
import "./About.css"  
export default function About() {

  return (
  <div className='pt-5 mt-5   background base text-white d-flex align-content-center justify-content-center     '>
    <div className=" container  pb-5 pt-5  mx-5 gap-3   d-flex justify-content-center align-items-center  flex-column ">
      <h1 className=' fw-bolder text-white   '>ABOUT COMPONENT</h1>
      <div className=" d-flex gap-3 align-items-center  ">
        <div className=" lineabout"></div>
        <i class="fa-solid fa-star"></i>
        <div className="lineabout"></div>
      </div>
      <div className=" container mx-5 px-5 d-flex  gap-3 align-items-center justify-content-center  ">
      <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
    </div>
    
  </div>
  )
}
