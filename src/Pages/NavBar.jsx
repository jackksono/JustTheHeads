import React, { useState, useContext, lazy, Suspense, useRef, useEffect } from "react";
import { Link, Route, Routes} from "react-router-dom";
import Headroom from 'react-headroom';


import { ShopContext } from "../Context/ShopContext";
import { UserContext, UserContextProvider } from "../Context/UserContext";

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
const Register = lazy(() => import('../Pages/NavBarTabs/Register'))
const Login = lazy(() => import('../Pages/NavBarTabs/Login'))





const NavBarComponent = () => {

  const [ contactUsButtonPopUp, contactUsSetButtonPopUp ] = useState(false)
  const [ searchBarButtonPopUp, searchBarSetButtonPopUp ] = useState(false)

  const [ homeActive, setHomeActive ] = useState(true);
  const [ allProductsActive, setAllProductsActive ] = useState(false);
  const [ contactUsActive, setContactUsActive ] = useState(false);
  const [ aboutUsActive, setAboutUsActive ] = useState(false);

  const [ userLoginActive, setUserLoginActive ] = useState(false);
  const [ searchBarActive, setSearchBarActive ] = useState(false);
  const [ cartActive, setCartActive ] = useState(false);

  const cart = useContext(ShopContext);
  const { newUser } = useContext(UserContext)

console.log(newUser)
  const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  const clickAway = useClickAway(() => {
    const navLinks = document.querySelector('.nav-links')
    let tag = document.getElementById("menu")
    if (tag.name === "menu") { 
      return;
    }
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

  // Creates a focus on Home when initially visiting webpage
  const homeLinkRef = useRef(null); 
  useEffect(() => {
    homeLinkRef.current.focus(); 
  }, []);

  return (
    
      <>
      <UserContextProvider>
      <Headroom>
        <nav class="w-screen p-2 top-0 lg:static fixed inset-x-0  bg-orange-500 h-[100px] drop-shadow-2xl bg-allProducts bg-blend-lighten  bg-texture bg-center bg-cover  justify-content-end z-20"
        ref={clickAway}>
            <div className="flex px-5 sm:justify-between sm:px-20 lg:mt-1">
                  <span className="italic text-color-text lg:text-sm text-[12px] bg-primary-500">
                    <BsTelephoneFill className="absolute h-[15px] w-[15px] lg:h-[25px] lg:w-[25px]"/>
                    <p className="mx-5 lg:mx-8 lg:text-lg ">Questions? Holla At Us @ xxx-xxx-xxxx</p>
                  </span>             

                  <div className="flex gap-5 pl-12 pr-5 mt-1 lg:gap-8 sm:gap-10 sm:pl-0 sm:items-center">
                    <Link to="/login">
                        <button className= {userLoginActive ? "flex justify-end transition duration-150 ease-in-out bg-primary-500 hover:text-white hover:scale-125 text-color-primary italic" : "flex justify-end transition duration-150 ease-in-out text-color-text bg-primary-500 hover:text-white hover:scale-125"}
                        onClick={ () => {
                          setUserLoginActive(true);
                          setCartActive(false)
                          setSearchBarActive(false);
                          }}>
                            <BsFillPersonFill className="text-lg sm:w-[30px] sm:h-[30px]" />
                        </button>
                    </Link>    
                    <span>
                        <button 
                          className= {searchBarActive ? "flex justify-end transition duration-150 ease-in-out bg-primary-500 hover:text-white hover:scale-125 text-color-primary italic" : "flex justify-end transition duration-150 ease-in-out text-color-text bg-primary-500 hover:text-white hover:scale-125"}
                          onClick={() => {
                            searchBarSetButtonPopUp(true)
                            setUserLoginActive(false);
                            setCartActive(false)
                            setSearchBarActive(true);
                          }}>
                            <BsSearch className="text-md sm:w-[25px] sm:h-[25px]" />
                        </button>
                        <SearchBar trigger={searchBarButtonPopUp} setTrigger={searchBarSetButtonPopUp}></SearchBar>
                    </span>
                    <Link to="/cart">
                        <button className= {cartActive ? "flex justify-end transition duration-150 ease-in-out bg-primary-500 hover:text-white hover:scale-125 text-color-primary italic" : "flex justify-end transition duration-150 ease-in-out text-color-text bg-primary-500 hover:text-white hover:scale-125"}
                        onClick={() => {
                          setUserLoginActive(false);
                          setCartActive(true)
                          setSearchBarActive(false);
                        }}>
                            <BsFillCartFill className="text-lg sm:w-[27.5px] sm:h-[27.5px]"/>
                              {productCount > 0 ?
                              <div className="relative w-[20px] h-[30px]">
                                <h1 className="relative justify-center text-center  text-white rounded-full bg-red-500 text-[10px]">{productCount}</h1>
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
            
            <div className="pt-3 text-2xl text-color-text sm:hidden">
              <button>
                  <ion-icon name="close" id="menu" onClick={onToggleMenu} ></ion-icon>
              </button>
            </div>
            
            <div class="nav-links bg-blackPaper w-[360px] sm:bg-none sm:bg-transparent duration-500 sm:static lg:h-0 sm:flex-row flex-col sm:pt-5 lg:pt-10 sm:px-5 sm:block sm:w-auto">
              <ul class="font-medium left-0 sm:flex sm:justify-between w-full h-full sm:px-10 lg:px-20 p-4 sm:p-0 mt-4 pb-4 gap-4 sm:flex-row lg:space-x-8 sm:space-x-2 sm:mt-0">
                  <div className="flex items-center sm:bg-transparent sm:gap-5 lg:gap-10 ">
                    <Link to="/" >
                      <button 
                        ref={homeLinkRef} 
                        className={homeActive ? `text-[10px] sm:text-lg md:text-xl sm:font-semibold outline-none sm:duration-200 bg-primary-500 sm:text-color-text text-white  hover:text-white font-Kanit underline decoration-color-primary underline-offset-3 italic rounded-lgtransform scale-[1.1]` : `text-[10px] sm:text-lg md:text-xl sm:font-semibold outline-none sm:duration-200 bg-primary-500 sm:text-color-text text-white  hover:text-white font-Kanit` }
                        onClick={() => {
                          toggleOff();
                          setHomeActive(true);
                          setAllProductsActive(false);
                          setContactUsActive(false);
                          setAboutUsActive(false);
                        }}>
                        Home
                      </button>
                    </Link>
                  </div>
                
                  <div className="left-0 flex flex-col sm:flex-row sm:bg-transparent sm:items-center sm:flex-non sm:gap-2 lg:gap-10">
                  
                  <Link to="/all-products">
                    <button
                      className= {allProductsActive ? `text-[10px] sm:text-lg md:text-xl sm:font-semibold outline-none sm:duration-200 bg-primary-500 sm:text-color-text text-white  hover:text-white font-Kanit underline decoration-color-primary underline-offset-3 italic rounded-lgtransform scale-[1.1]` :  `text-[10px] sm:text-lg md:text-xl sm:font-semibold outline-none sm:duration-200 bg-primary-500 sm:text-color-text text-white  hover:text-white font-Kanit`}
                      data-collapse-toggle="navbar-dropdown"
                      onClick={() => {
                        toggleOff();
                        setAllProductsActive(true);
                        setHomeActive(false)
                        setAboutUsActive(false);
                        setContactUsActive(false);
                      }}
                    >
                      All Products
                    </button>
                  </Link>
                    

                    <Link to="/why-just-the-head">
                      <button className= { aboutUsActive ? `text-[10px] sm:text-lg md:text-xl sm:font-semibold outline-none sm:duration-200 bg-primary-500 sm:text-color-text text-white  hover:text-white font-Kanit underline decoration-color-primary underline-offset-3 italic rounded-lgtransform scale-[1.1]` : `text-[10px] sm:text-lg md:text-xl sm:font-semibold outline-none sm:duration-200 bg-primary-500 sm:text-color-text text-white  hover:text-white font-Kanit` }
                      onClick={() => { 
                        setAboutUsActive(true)
                        setContactUsActive(false);
                        setHomeActive(false);
                        setAllProductsActive(false);
                        toggleOff()
                        }}>Why Just The Head?</button>
                    </Link>

                    <span className="" >
                        <button className= { contactUsActive ? `text-[10px] sm:text-lg md:text-xl sm:font-semibold outline-none sm:duration-200 bg-primary-500 sm:text-color-text text-white  hover:text-white font-Kanit underline decoration-color-primary underline-offset-3 italic rounded-lgtransform scale-[1.1]` : `text-[10px] sm:text-lg md:text-xl sm:font-semibold outline-none sm:duration-200 bg-primary-500 sm:text-color-text text-white  hover:text-white font-Kanit`}
                          value="click"
                          onClick={() => { 
                            contactUsSetButtonPopUp(true)
                            setContactUsActive(true);
                            setAboutUsActive(false);
                            setHomeActive(false);
                            setAllProductsActive(false);
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
            <Route path="/why-just-the-head" element={<AboutUs/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/success" element={<Success/>} />
            <Route path="/cancel" element={<Cancel/>} />
            <Route path="/products/:webId" element={<IndividualProduct/>} />
            <Route path="/signup" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    </Suspense>
    </UserContextProvider>
  </>
  
  
  )
}

export default NavBarComponent