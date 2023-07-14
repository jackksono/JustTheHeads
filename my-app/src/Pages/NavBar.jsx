import React, { useState, useContext } from "react";
import { Link, Route, Routes} from "react-router-dom";
import Headroom from 'react-headroom';

import Home from "./Home";
import ContactUs from "./NavBarTabs/ContactUs";
import AboutUs from "./NavBarTabs/AboutUs"
import AllProducts from "../Products/AllProducts";
import CheckOut from "./Cart/CheckOut";
import Cancel from "./Cart/Cancel";
import Success from "./Cart/Success";
import IndividualProduct from "../Products/IndividualProduct";
import SearchBar from "./NavBarTabs/SearchBar";

import { ShopContext } from "../Context/ShopContext";

import { BsSearch, BsTelephoneFill, BsFillPersonFill, BsFillCartFill } from 'react-icons/bs'

import { useClickAway } from "@uidotdev/usehooks";


import Logo1 from "../Images/SiteImages/Logo1.png"



const NavBarComponent = () => {

  const [ contactUsButtonPopUp, contactUsSetButtonPopUp ] = useState(false)
  const [ searchBarButtonPopUp, searchBarSetButtonPopUp ] = useState(false)
  const cart = useContext(ShopContext);


  const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  const clickAway = useClickAway(() => {
    const navLinks = document.querySelector('.nav-links')
    let tag = document.getElementById("menu")
    tag.name = tag.name === "close" ? "menu" : "close"
    navLinks.classList.toggle('hidden')
    console.log(navLinks.classList)
  })

  
  const onToggleMenu = () => {
    const navLinks = document.querySelector('.nav-links')
    // console.log(navLinks)
    let tag = document.getElementById("menu")
    // console.log(tag.name)
    tag.name = tag.name === "close" ? "menu" : "close"
    // console.log(navLinks.classList)
    navLinks.classList.toggle('hidden')
  }

  const toggleOff = () => {
    const navLinks = document.querySelector('.nav-links')
    let tag = document.getElementById("menu")
    tag.name = tag.name === "menu" ? "close" : "menu"
    navLinks.classList.toggle('hidden')
  }
  

  return (
    
      <>
      
      <Headroom>
        
      <nav className="w-screen p-2 top-0 lg:static fixed inset-x-0 bg-orange-100 h-[100px] drop-shadow-2xl bg-bubbles bg-texture bg-cover bg-center bg-blend-overlay justify-content-end"
      ref={clickAway}>
      
          <div className="flex px-5 lg:justify-between lg:px-20 lg:mt-1">
                <span className="italic text-black lg:text-sm text-[12px] bg-primary-500">
                  <BsTelephoneFill className="absolute h-[15px] w-[15px] lg:h-[25px] lg:w-[25px]"/>
                  <p className="mx-5 lg:mx-8 lg:text-lg">Questions? Holla At Us @ xxx-xxx-xxxx</p>
                </span>
                
                <div className="flex gap-5 pl-12 pr-5 mt-1 lg:gap-8 lg:pl-0 lg:items-center">
                  <Link to="/login">
                      <button className="flex justify-end text-black transition duration-150 ease-in-out bg-primary-500 hover:text-white hover:scale-125">
                          <BsFillPersonFill className="text-lg lg:w-[30px] lg:h-[30px]" />
                      </button>
                  </Link>    
                  <span>
                      <button 
                        className="flex justify-end text-black transition duration-150 ease-in-out bg-primary-500 hover:text-white hover:scale-125"
                        onClick={() => searchBarSetButtonPopUp(true)}>
                          <BsSearch className="text-md lg:w-[25px] lg:h-[25px]" />
                      </button>
                      <SearchBar trigger={searchBarButtonPopUp} setTrigger={searchBarSetButtonPopUp}></SearchBar>
                  </span>
                  <Link to="/checkout">
                      <button className="flex text-right text-black transition duration-150 ease-in-out bg-primary-500 hover:text-white hover:scale-125">
                          <BsFillCartFill className="text-lg lg:w-[27.5px] lg:h-[27.5px]"/>
                            {productCount > 0 ?
                            <div className="relative w-[20px] h-[30px]">
                              <h1 className="relative justify-center text-center text-white rounded-full bg-red-500 text-[10px]">{productCount}</h1>
                            </div> 
                            : 
                            <></>} 
                          
                      </button>
                  </Link>
            
              </div>
          </div>
          
          <div className="">
            <img 
            src={Logo1}
            alt="logo"
            className="h-[100px] w-[100px] lg:h-[200px] lg:w-[225px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-10"></img>
          </div>
          <div className="pt-3 text-2xl text-black lg:hidden">
            <button >
                <ion-icon name="close" id="menu" onClick={onToggleMenu} ></ion-icon>
              </button>
          </div>
          
          <div class="nav-links  bg-blackPaper w-[360px] lg:bg-none lg:bg-transparent duration-500 lg:static lg:h-0  lg:flex-row flex-col  lg:pt-10 lg:px-10 lg:block lg:w-auto">
            <ul class="font-medium left-0 lg:flex lg:justify-between w-full lg:h-full lg:px-20 p-4 lg:p-0 mt-4 pb-4 gap-4 lg:flex-row lg:space-x-8 lg:mt-0">
                <div className="flex items-center lg:bg-transparent lg:gap-10 ">
                  <Link to="/">
                    <button className="text-[10px] lg:text-xl lg:font-semibold lg:duration-200 bg-primary-500 text-white lg:text-color-shrimp hover:text-orange-900 font-Kanit"
                    onClick={toggleOff}>
                      Home
                    </button>
                  </Link>
                </div>
              
                <div className="left-0 flex flex-col lg:flex-row lg:bg-transparent lg:items-center lg:flex-non lg:gap-10">
                
                  <Link to="/all-products">
                    <button className="text-[10px] lg:text-xl lg:font-semibold lg:duration-200 md:bg-primary-500 text-white lg:text-color-shrimp hover:text-orange-900 font-Kanit"
                    data-collapse-toggle="navbar-dropdown"
                    onClick={toggleOff}>
                      All Products
                    </button>
                  </Link>
                  

                  <Link to="/why-just-the-head">
                    <button className="text-[10px] lg:text-xl lg:font-semibold lg:duration-200 bg-primary-500 text-white lg:text-color-shrimp hover:text-orange-900 font-Kanit"
                    onClick={(toggleOff)}>Why Just The Head?</button>
                  </Link>

                  <span className="" >
                      <button className="text-[10px] lg:text-xl lg:font-semibold lg:duration-200 bg-primary-500 text-white lg:text-color-shrimp hover:text-orange-900 font-Kanit"
                        value="click"
                        onClick={() => { 
                          contactUsSetButtonPopUp(true)
                          toggleOff()
                          }}>Contact Us
                      </button>
                  </span>
                </div>
            </ul>
          </div>
                <ContactUs trigger={contactUsButtonPopUp} setTrigger={contactUsSetButtonPopUp}></ContactUs>
      </nav>
      </Headroom>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all-products" element={<AllProducts/>} />
      {/* <Route path="/contact-us" element={<ContactUs/>} /> */}
      <Route path="/why-just-the-head" element={<AboutUs/>} />
      <Route path="/checkout" element={<CheckOut/>} />
      <Route path="/success" element={<Success/>} />
      <Route path="/cancel" element={<Cancel/>} />
      <Route path="/products/:webId" element={<IndividualProduct/>} />
      {/* <Route path="/search" element={<SearchBar/>} /> */}
    </Routes>
    
  </>
  
  )
}

export default NavBarComponent