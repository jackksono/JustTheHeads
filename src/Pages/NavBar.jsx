import React, { useState, useContext, lazy, Suspense, useRef, useEffect } from "react";
import { Link, Route, Routes} from "react-router-dom";
import Headroom from 'react-headroom';


import { ShopContext } from "../Context/ShopContext";

import { BsSearch, BsTelephoneFill, BsFillPersonFill, BsFillCartFill } from 'react-icons/bs'

import { useClickAway } from "@uidotdev/usehooks";

import Loading from '../Pages/Fallback/Loading.jsx'
import Logo1 from "../Images/SiteImages/Logo1.png"

const Home = lazy(() => import("./Home"));
const ContactUs = lazy(() => import("./NavBarTabs/ContactUs"));
const AboutUs = lazy(() => import("./NavBarTabs/AboutUs"));
const AllProducts = lazy(() => import("../Products/AllProducts"));
const Cart = lazy(() => import("./Cart/Cart"));
const Cancel = lazy(() => import("./Cart/Cancel"));
const Success = lazy(() => import("./Cart/Success"));
const Checkout = lazy(() => import("./Cart/Checkout"))
const IndividualProduct = lazy(() => import("../Products/IndividualProduct"));
const SearchBar = lazy(() => import("./NavBarTabs/SearchBar"));





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
    let tag = document.getElementById("menu")
    tag.name = tag.name === "close" ? "menu" : "close"
    navLinks.classList.toggle('hidden')
  }

  const toggleOff = () => {
    const navLinks = document.querySelector('.nav-links')
    let tag = document.getElementById("menu")
    tag.name = tag.name === "menu" ? "close" : "menu"
    navLinks.classList.toggle('hidden')
  }

  const homeLinkRef = useRef(null); // Create a ref for the "Home" link

  useEffect(() => {
    homeLinkRef.current.focus(); // Set focus on the "Home" link
    // You might need to add a className to apply the focus styles
  }, []);

  return (
    
      <>
      <Headroom>
        <nav class="w-screen p-2 top-0 lg:static fixed inset-x-0  bg-color-background h-[100px] drop-shadow-2xl bg-allProducts bg-blend-lighten  bg-texture bg-center bg-cover  justify-content-end z-10"
        ref={clickAway}>
            <div className="flex px-5 lg:justify-between lg:px-20 lg:mt-1">
                  <span className="italic text-color-text lg:text-sm text-[12px] bg-primary-500">
                    <BsTelephoneFill className="absolute h-[15px] w-[15px] lg:h-[25px] lg:w-[25px]"/>
                    <p className="mx-5 lg:mx-8 lg:text-lg ">Questions? Holla At Us @ xxx-xxx-xxxx</p>
                  </span>             

                  <div className="flex gap-5 pl-12 pr-5 mt-1 lg:gap-8 lg:pl-0 lg:items-center">
                    <Link to="/login">
                        <button className="flex justify-end transition duration-150 ease-in-out text-color-text bg-primary-500 hover:text-white hover:scale-125 focus:text-color-primary focus:italic">
                            <BsFillPersonFill className="text-lg lg:w-[30px] lg:h-[30px]" />
                        </button>
                    </Link>    
                    <span>
                        <button 
                          className="flex justify-end transition duration-150 ease-in-out text-color-text bg-primary-500 hover:text-white hover:scale-125 focus:text-color-primary focus:italic"
                          onClick={() => searchBarSetButtonPopUp(true)}>
                            <BsSearch className="text-md lg:w-[25px] lg:h-[25px]" />
                        </button>
                        <SearchBar trigger={searchBarButtonPopUp} setTrigger={searchBarSetButtonPopUp}></SearchBar>
                    </span>
                    <Link to="/cart">
                        <button className="flex text-right transition duration-150 ease-in-out text-color-text bg-primary-500 hover:text-white hover:scale-125 focus:text-color-primary focus:italic">
                            <BsFillCartFill className="text-lg lg:w-[27.5px] lg:h-[27.5px]"/>
                              {productCount > 0 ?
                              <div className="relative w-[20px] h-[30px]">
                                <h1 className="relative justify-center text-center text-color-text rounded-full bg-red-500 text-[10px]">{productCount}</h1>
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
                className="h-[100px] w-[100px] lg:h-[200px] lg:w-[225px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-10"
                loading="lazy">
              </img>
            </div>
            
            <div className="pt-3 text-2xl text-color-text lg:hidden">
              <button>
                  <ion-icon name="close" id="menu" onClick={onToggleMenu} ></ion-icon>
              </button>
            </div>
            
            <div class="nav-links  bg-blackPaper w-[360px] lg:bg-none lg:bg-transparent duration-500 lg:static lg:h-0  lg:flex-row flex-col  lg:pt-10 lg:px-10 lg:block lg:w-auto">
              <ul class="font-medium left-0 lg:flex lg:justify-between w-full lg:h-full lg:px-20 p-4 lg:p-0 mt-4 pb-4 gap-4 lg:flex-row lg:space-x-8 lg:mt-0">
                  <div className="flex items-center lg:bg-transparent lg:gap-10 ">
                    <Link to="/" >
                      <button 
                        ref={homeLinkRef} 
                        className="text-[10px] lg:text-xl outline-none lg:font-semibold lg:duration-200 bg-primary-500 text-color-text  hover:text-white font-Kanit focus:underline focus:decoration-color-primary focus:underline-offset-3 focus:italic focus:rounded-lg focus:transform focus:scale-[1.1]"
                        onClick={toggleOff}>
                        Home
                      </button>
                    </Link>
                  </div>
                
                  <div className="left-0 flex flex-col lg:flex-row lg:bg-transparent lg:items-center lg:flex-non lg:gap-10">
                  
                    <Link to="/all-products">
                      <button className="text-[10px] lg:text-xl lg:font-semibold lg:duration-200 md:bg-primary-500 text-color-text  hover:text-white font-Kanit focus:text-color-text focus:underline focus:decoration-color-primary focus:underline-offset-3 focus:italic focus:rounded-lg focus:transform focus:scale-[1.1]"
                      data-collapse-toggle="navbar-dropdown"
                      onClick={toggleOff}>
                        All Products
                      </button>
                    </Link>
                    

                    <Link to="/why-just-the-head">
                      <button className="text-[10px] lg:text-xl lg:font-semibold lg:duration-200 bg-primary-500 text-color-text  hover:text-white font-Kanit focus:text-color-text focus:underline focus:decoration-color-primary focus:underline-offset-3 focus:italic focus:rounded-lg focus:transform focus:scale-[1.1]"
                      onClick={(toggleOff)}>Why Just The Head?</button>
                    </Link>

                    <span className="" >
                        <button className="text-[10px] lg:text-xl lg:font-semibold lg:duration-200 bg-primary-500 text-color-text  hover:text-white font-Kanit focus:text-color-text focus:underline focus:decoration-color-primary focus:underline-offset-3 focus:italic focus:rounded-lg focus:transform focus:scale-[1.1]"
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
    
      <Suspense fallback={<Loading/>}> 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-products" element={<AllProducts/>} />
            {/* <Route path="/contact-us" element={<ContactUs/>} /> */}
            <Route path="/why-just-the-head" element={<AboutUs/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/success" element={<Success/>} />
            <Route path="/cancel" element={<Cancel/>} />
            <Route path="/products/:webId" element={<IndividualProduct/>} />
            {/* <Route path="/search" element={<SearchBar/>} /> */}
        </Routes>
    </Suspense>
    
  </>
  
  )
}

export default NavBarComponent