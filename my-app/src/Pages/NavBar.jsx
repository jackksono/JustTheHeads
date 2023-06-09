import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs"
import AllProducts from "./AllProducts";
import CheckOut from "./CheckOut";
import Logo from "../Images/Logo.png"
import Cart from "../Images/Cart.png"
import Logo1 from "../Images/Logo1.png"


const NavBar = () => {

    const [ selectedPage, setSelectedPage ] = useState()
    const [ buttonPopUp, setButtonPopUp ] = useState(false)
    const navigate = useNavigate();

    return (
        <>
        <nav  className="fixed w-screen bg-orange-300 h-[100px] z-10 drop-shadow-xl"> 

        <div className="flex justify-between px-20 mt-1">
              <span className="bg-primary-500 text-black">
                Questions? Holler At Us @ xxx-xxx-xxx
              </span>

              <div className="flex items-center gap-5 mt-1">
                <Link to="/login">
                    <button className="flex justify-end bg-primary-500 text-black hover:text-white">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                            </svg>

                        </i>
                    </button>
                </Link>    
                <Link to="/">
                    <button className="flex justify-end bg-primary-500 text-black hover:text-white">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </i>
                    </button>
                </Link>
                <Link to="/checkout">
                    <button className="flex text-right bg-primary-500 text-black hover:text-white">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                            </svg>
                        </i>
                    </button>
                </Link>
            </div>
        </div>
        <div className="">
          <img 
          src={Logo1}
          alt="logo"
          className="h-[200px] w-[225px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-10"></img>
        </div>

        {/* <div>
            <span className="flex justify-center text-red-700 text-7xl">JUST THE HEADS!</span>
        </div> */}
    
        <div className="flex justify-between w-full h-full px-20">
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

            <span className="flex">
                <button className="bg-primary-500 text-red-600 hover:text-white"
                onClick={()=> setButtonPopUp(true)}>Contact Us</button>
                <ContactUs trigger={buttonPopUp} setTrigger={setButtonPopUp}></ContactUs>
            
            </span>
                
              
            
          </div>
        </div>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/why-just-the-head" element={<AboutUs/>} />
        <Route path="/checkout" element={<CheckOut/>} />
      </Routes>
    </>
    )
}

export default NavBar