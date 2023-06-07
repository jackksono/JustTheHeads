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
        <nav  className="fixed w-screen bg-orange-300 h-[80px] z-10 drop-shadow-xl">
        <div className="fixed w-screen bg-orange-300">
            
              <button className="bg-primary-500 text-black hover:text-white">
                Questions? Holler At Us @ xxx-xxx-xxx
              </button>
            
            <Link to="/">
              <button className="text-right bg-primary-500 text-secondary-500 hover:text-secondary-700">
                Cart
              </button>
            </Link>
        </div>
        <div className="flex justify-between w-full h-full px-20">
            
          <div className="flex items-center gap-10">
            <Link to="/">
              <button className="bg-primary-500 text-black hover:text-white">
                Home
              </button>
            </Link>
          </div>

          <div className="flex items-center gap-10">

            <Link to="/all-products">
              <button className="bg-primary-500 text-black hover:text-white">
                All Products
              </button>
            </Link>

            <Link to="/why-just-the-head">
              <button className="bg-primary-500 text-black hover:text-white">Why Just The Head?</button>
            </Link>

            <Link to="/contact-us">
              <button className="bg-primary-500 text-black hover:text-white">Contact Us</button>
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