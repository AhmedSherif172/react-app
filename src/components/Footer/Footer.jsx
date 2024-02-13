import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className=' footer '>
        <div className=" p-5 mx-5  ">
            <div className=' row text-center text-white  '>
                <div className='col-4  '>
                    <h3>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243  </p>
                </div>
                <div className='col-4  d-flex flex-column  '>
                    <h3>AROUND THE WEB</h3>
                    <div className="social d-flex gap-1  align-self-center   ">
                        <div className=" smallicon border border-1  rounded-circle d-flex justify-content-center align-items-center">
                            <i className="fa-brands fa-fw fa-facebook"></i>
                        </div>
                        <div className=" smallicon border border-1  rounded-circle d-flex justify-content-center align-items-center">
                            <i className="fa-brands fa-fw fa-twitter"></i>
                        </div>
                        <div className=" smallicon border border-1  rounded-circle d-flex justify-content-center align-items-center">
                            <i className="fa-brands fa-fw fa-linkedin-in"></i>
                        </div>
                        <div className=" smallicon border border-1  rounded-circle d-flex justify-content-center align-items-center">
                            <i className="fa-solid fa-fw fa-globe"></i>
                        </div>
                    </div>

                </div>
                <div className='col-4   '> 
                    <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
            <div className=" text-white text-center  p-3 copyright ">
                <p>Copyright © Your Website 2021</p>
            </div>
       
    </div>
  )
}
