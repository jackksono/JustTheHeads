import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs"
import AllProducts from "./AllProducts";
import Logo from "../Images/Logo.png"


const NavBar = () => {

    const [ selectedPage, setSelectedPage ] = useState()
    const navigate = useNavigate();

    return (
        <>
        <nav  className="fixed w-screen bg-orange-300 h-[120px] z-10 drop-shadow-xl">

        <div className="flex justify-between px-20">
              <span className="bg-primary-500 text-black">
                Questions? Holler At Us @ xxx-xxx-xxx
              </span>
              
            
            <Link to="/">
                <button className="text-right bg-primary-500 text-black hover:text-white">
                    Cart
                </button>
            </Link>
        </div>

        <div>
            <span className="flex justify-center text-red-700 text-5xl">JUST THE HEADS!</span>
        </div>
    
        <div className="flex justify-between w-full h-full px-20 pb-20">
          <div className="flex items-center gap-10">
            <Link to="/">
              <button className="bg-primary-500 text-red-600 hover:text-white">
                Home
              </button>
            </Link>
          </div>

          <div className="flex items-center gap-10">

            <Link to="/all-products">
              <button className="bg-primary-500 text-red-600 hover:text-white">
                All Products
              </button>
            </Link>

            <Link to="/why-just-the-head">
              <button className="bg-primary-500 text-red-600 hover:text-white">Why Just The Head?</button>
            </Link>

            <Link to="/contact-us">
              <button className="bg-primary-500 text-red-600 hover:text-white">Contact Us</button>
            </Link>
          </div>
        </div>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/why-just-the-head" element={<AboutUs/>} />
      </Routes>
    </>
    )
}

export default NavBar