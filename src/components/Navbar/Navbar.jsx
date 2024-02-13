import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import $ from 'jquery'

export default function Navbar() {
  const [pathName, setPathName] = useState(window.location.pathname);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 30);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div id="nav" className=" position-fixed w-100 z-3 top-0 ">
      <nav className={isScrolled ? "scrolled navbar navbar-expand-lg navbar-dark" :"notscrolled navbar navbar-expand-lg navbar-dark" }>
        <div className="container">
          <Link
            onClick={() => {
              setPathName("/");
            }}
            className="navbar-brand text-white fw-bolder fs-2"
            to={"/"}
          >
            START FRAMEWORK
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-4">
                <Link
                  onClick={() => {
                    setPathName("/about");
                  }}
                  className={
                    pathName == "/about"
                      ? "nav-link active fs-6 text-white fw-bold mt-3 mt-0 px-2 rounded-3 pages"
                      : "nav-link fs-6 text-white fw-bold mt-3 mt-0 px-2 rounded-3 pages"
                  }
                  aria-current="page"
                  to={"/about"}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link
                  onClick={() => {
                    setPathName("/portfolio");
                  }}
                  className={
                    pathName == "/portfolio"
                      ? "nav-link active fs-6 text-white fw-bold mt-3 mt-0 px-2 rounded-3 pages"
                      : "nav-link fs-6 text-white fw-bold mt-3 mt-0 px-2 rounded-3 pages"
                  }
                  to={"/portfolio"}
                >
                  PORTFOLIO
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link
                  onClick={() => {
                    setPathName("/contact");
                  }}
                  className={
                    pathName == "/contact"
                      ? "nav-link active fs-6 text-white fw-bold mt-3 mt-0 px-2 rounded-3 pages"
                      : "nav-link fs-6 text-white fw-bold mt-3 mt-0 px-2 rounded-3 pages"
                  }
                  to={"/contact"}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );

  
}





// $(window).scroll(()=>{
//   if ($(window).scrollTop() >= 25) {
//     $("nav").stop(true,false);
//     $("nav").animate({height:"76px"},500)
//   }if ($(window).scrollTop() < 25){
//     $("nav").animate({height: "106px"},500)
//     $("nav").stop(true,false);

//   }
// })

