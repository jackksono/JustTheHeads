import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import ContactUs from "./ContactUs";
// import AboutUs from "./AboutUs"



const NavBar = () => {

    const [ selectedPage, setSelectedPage ] = useState()
    const navigate = useNavigate();

    return (
        <>
        <nav  className="fixed w-screen bg-orange-300 h-[80px] z-10 drop-shadow-xl">
        <div className="flex justify-between w-full h-full px-20">
          <div className="flex items-center gap-10">
            <Link to="/">
              <button className="bg-primary-500 text-secondary-500 hover:text-secondary-700">
                Home
              </button>
            </Link>
          </div>
          <div className="flex items-center gap-10">
            <Link to="/about-us">
              <button className="bg-primary-500 text-secondary-500">
                About Us
              </button>
            </Link>
            <Link to="/contact-us">
              <button>Contact Us</button>
            </Link>
          </div>
        </div>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs/>} />
      </Routes>
    </>
    )
}

export default NavBar