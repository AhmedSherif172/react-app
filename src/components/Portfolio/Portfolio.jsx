import React, { useState } from "react";
import "./Portfolio.css";
import img1 from "./imgs/poert1.png";
import img2 from "./imgs/port2.png";
import img3 from "./imgs/port3.png";
import $ from "jquery"

export default function Portfolio() {
  const [clickedImg,setClickedImg]= useState(null)

  return (
    <div className="portfolio pt-5 mt-5  d-flex flex-column  ">
      <div className=" d-flex flex-column align-items-center ">
        <h1 className=" fw-bolder pt-4 ">PORTFOLIO COMPONENT</h1>
        <div className=" d-flex gap-3 align-items-center  ">
          <div className=" line"></div>
          <i class="fa-solid fa-star"></i>
          <div className="line"></div>
        </div>
      </div>
      <div className="row px-5 mx-5 p-3 g-5   align-self-center  ">
        <div className="col-4  ">
          <div onClick={()=>{setClickedImg(img1)}}  className="position-relative">
            <img className="w-100 rounded-2" src={img1} alt="" />
            <div className="w-100 text-white  rounded-2 layer d-flex align-items-center justify-content-center position-absolute top-0 h-100 ">
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>
        <div className="col-4  ">
          <div onClick={()=>{setClickedImg(img2)}} className="position-relative">
            <img className="w-100 rounded-2" src={img2} alt="" />
            <div className="w-100 text-white rounded-2 layer d-flex align-items-center justify-content-center position-absolute top-0 h-100 ">
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>
        <div className="col-4  ">
          <div onClick={()=>{setClickedImg(img3)}} className="position-relative">
            <img className="w-100 rounded-2" src={img3} alt="" />
            <div className="w-100 text-white  rounded-2 layer d-flex align-items-center justify-content-center position-absolute top-0 h-100 ">
              <i class=" fa-solid fa-plus"></i>
            </div>
          </div>
        </div>
        <div className="col-4  ">
          <div onClick={()=>{setClickedImg(img1)}} className="position-relative">
            <img className="w-100 rounded-2" src={img1} alt="" />
            <div className="w-100 text-white  rounded-2 layer d-flex align-items-center justify-content-center position-absolute top-0 h-100 ">
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>
        <div className="col-4  ">
          <div onClick={()=>{setClickedImg(img2)}} className="position-relative">
            <img className="w-100 rounded-2" src={img2} alt="" />
            <div className="w-100 text-white rounded-2 layer d-flex align-items-center justify-content-center position-absolute top-0 h-100 ">
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>
        <div className="col-4  ">
          <div onClick={()=>{setClickedImg(img3)}} className="position-relative">
            <img className="w-100 rounded-2" src={img3} alt="" />
            <div className="w-100 text-white  rounded-2 layer d-flex align-items-center justify-content-center position-absolute top-0 h-100 ">
              <i class=" fa-solid fa-plus"></i>
            </div>
          </div>
        </div>
      </div>

      {clickedImg != null ? 
      <div onClick={()=>{setClickedImg(null)}} className=" imgclick top-0  position-fixed vh-100  w-100 d-flex justify-content-center align-items-center  ">
        <div className=" container d-flex justify-content-center align-items-center   p-5  ">
          <img className="w-50 " src={clickedImg} alt="" />
        </div>
      </div> : null }
      
    </div>
  );
}


// onClick={()=>{setClickedImg(document.querySelector("#prod img").getAttribute("src") )}}
