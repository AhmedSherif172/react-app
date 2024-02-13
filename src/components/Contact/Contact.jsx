import React from "react";
import "./Contact.css";
import $, { map } from "jquery";

export default function Contact() {
  return (
    <div className="test pt-5 mt-5  ">
      <div className=" contact d-flex flex-column align-items-center ">
        <h1 className=" fw-bolder pt-4 ">CONTACT SECTION</h1>
        <div className=" d-flex gap-3 align-items-center  ">
          <div className=" line"></div>
          <i class="fa-solid fa-star"></i>
          <div className="line"></div>
        </div>
      </div>
      <div className="p-5">
        <div className=" py-5  d-flex flex-column align-items-center   ">
          <div className=" w-100    position-relative  justify-content-center d-flex  ">
            <input
              onChange={handleNameInput}
              className=" userinfo rounded-2  border-0 border-bottom p-3 my-3   w-50"
              placeholder="userName"
              type="text"
            />
            <div id="userNameDecor" className=" w-50  position-absolute z-n1  ">
              <p>userName:</p>
            </div>
          </div>
          
          <div className=" w-100    position-relative  justify-content-center d-flex  ">
            <input
              onChange={handleAgeInput}
              className=" userinfo rounded-2  border-0 border-bottom p-3 my-3   w-50"
              placeholder="userAge"
              type="text"
            />
            <div id="userAgeDecor" className=" w-50  position-absolute z-n1  ">
              <p>userAge:</p>
            </div>
          </div>

          <div className=" w-100    position-relative  justify-content-center d-flex  ">
            <input
              onChange={handleEmailInput}
              className=" userinfo rounded-2  border-0 border-bottom p-3 my-3   w-50"
              placeholder="userEmail"
              type="text"
            />
            <div id="userEmailDecor" className=" w-50  position-absolute z-n1  ">
              <p>userEmail:</p>
            </div>
          </div>

          <div className=" w-100    position-relative  justify-content-center d-flex  ">
            <input
              onChange={handlePasswordInput}
              className=" userinfo rounded-2  border-0 border-bottom p-3 my-3   w-50"
              placeholder="userPassword"
              type="text"
            />
            <div id="userPasswordDecor" className=" w-50  position-absolute z-n1  ">
              <p>userPassword:</p>
            </div>
          </div>

          <button className=" border-0 py-2 px-3  rounded-2  send text-white">
            send Message
          </button>
        </div>
      </div>
    </div>
  );
}

function handleNameInput(e) {
  console.log(e.target.value);
  let value=e.target.value  
  if (value == ""){
    $("#userNameDecor").stop(true,true);
    $("#userNameDecor").animate({ top: "50%" }, 500);

  }else{
    $("#userNameDecor").animate({ top: "-10%" }, 500);
    
  }
}
function handleAgeInput(e) {
  console.log(e.target.value);
  let value=e.target.value  
  if (value == ""){
    $("#userAgeDecor").stop(true,true);
    $("#userAgeDecor").animate({ top: "50%" }, 500);

  }else{
    $("#userAgeDecor").animate({ top: "-10%" }, 500);
    
  }
}
function handleEmailInput(e) {
  console.log(e.target.value);
  let value=e.target.value  
  if (value == ""){
    $("#userEmailDecor").stop(true,true);
    $("#userEmailDecor").animate({ top: "50%" }, 500);

  }else{
    $("#userEmailDecor").animate({ top: "-10%" }, 500);
    
  }
}
function handlePasswordInput(e) {
  console.log(e.target.value);
  let value=e.target.value  
  if (value == ""){
    $("#userPasswordDecor").stop(true,true);
    $("#userPasswordDecor").animate({ top: "50%" }, 500);

  }else{
    $("#userPasswordDecor").animate({ top: "-10%" }, 500);
    
  }
}

function userName() {
  $(".userinfo").animate({ height: "1000px" }, 5000);
}
