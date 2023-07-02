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

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import RingVolumeIcon from '@mui/icons-material/RingVolume';


import Logo1 from "../Images/SiteImages/Logo1.png"



const NavBarComponent = () => {

    const [ contactUsButtonPopUp, contactUsSetButtonPopUp ] = useState(false)
    const [ searchBarButtonPopUp, searchBarSetButtonPopUp ] = useState(false)
    const cart = useContext(ShopContext);

   
    // const [ show, setShow ] = useState(false)
    // const handleClose = () => setShow(false)
    // const handleShow = () => setShow(true)

    const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)
    
    
    const onToggleMenu = () => {
      const navLinks = document.querySelector('.nav-links')
      console.log(navLinks)
      let tag = document.getElementById("menu")
      console.log(tag.name)
      tag.name = tag.name === "close" ? "menu" : "close"
      console.log(navLinks.classList)
      navLinks.classList.toggle('hidden')
    }
  

    return (
      
        <>
        
        <Headroom>
          
        <nav className="w-screen p-2 top-0 lg:static fixed inset-x-0 bg-orange-100 h-[100px] drop-shadow-2xl bg-bubbles bg-texture bg-cover bg-center bg-blend-overlay justify-content-end">
        
            <div className="flex lg:justify-between lg:px-20 lg:mt-1 sm:px-10">
                  <span className="italic text-black lg:text-sm text-[10px] bg-primary-500">
                    <RingVolumeIcon/>Questions? Holla At Us @ xxx-xxx-xxxx</span>
                  
                  <div className="flex items-center gap-5 mt-1">
                    <Link to="/login">
                        <button className="flex justify-end text-black transition duration-150 ease-in-out bg-primary-500 hover:text-white hover:scale-125">
                            <PersonIcon className="text-[5px]"/>
                        </button>
                    </Link>    
                    <span>
                        <button 
                          className="flex justify-end text-black transition duration-150 ease-in-out bg-primary-500 hover:text-white hover:scale-125"
                          onClick={() => searchBarSetButtonPopUp(true)}>
                            <SearchIcon/>
                        </button>
                        <SearchBar trigger={searchBarButtonPopUp} setTrigger={searchBarSetButtonPopUp}></SearchBar>
                    </span>
                    <Link to="/checkout">
                        <button className="flex text-right text-black transition duration-150 ease-in-out bg-primary-500 hover:text-white hover:scale-125">
                            <ShoppingCartIcon/>
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
            <div className="pt-6 text-2xl text-black lg:hidden">
              <button >
                  <ion-icon name="close" id="menu" onClick={onToggleMenu} ></ion-icon>
                </button>
            </div>
            
            <div class="nav-links  bg-blackPaper w-[360px] lg:bg-none lg:bg-transparent duration-500 lg:static lg:h-0  lg:flex-row flex-col  lg:pt-12 lg:px-10 lg:block lg:w-auto ">
              <ul class="font-medium left-0 lg:flex lg:justify-between w-full lg:h-full lg:px-20 p-4 lg:p-0 mt-4 pb-4 gap-4 lg:flex-row lg:space-x-8 lg:mt-0">
                
                  <div className="flex items-center lg:bg-transparent lg:gap-10 ">
                    <Link to="/">
                      <button className="text-[10px] lg:text-lg lg:font-semibold lg:duration-200 bg-primary-500 text-white lg:text-color-shrimp hover:text-orange-900 font-Kanit">
                        Home
                      </button>
                    </Link>
                  </div>
                
                  <div className="left-0 flex flex-col lg:flex-row lg:bg-transparent lg:items-center lg:flex-non lg:gap-10">
                  
                    <Link to="/all-products">
                      <button className="text-[10px] lg:text-lg lg:font-semibold lg:duration-200 md:bg-primary-500 text-white lg:text-color-shrimp hover:text-orange-900 font-Kanit"
                      data-collapse-toggle="navbar-dropdown">
                        All Products
                      </button>
                    </Link>
                    

                    <Link to="/why-just-the-head">
                      <button className="text-[10px] lg:text-lg lg:font-semibold lg:duration-200 bg-primary-500 text-white lg:text-color-shrimp hover:text-orange-900 font-Kanit">Why Just The Head?</button>
                    </Link>

                    <span className="flex" >
                        <button className="text-[10px] lg:text-lg lg:font-semibold lg:duration-200 bg-primary-500 text-white lg:text-color-shrimp hover:text-orange-900 font-Kanit"
                        onClick={()=> contactUsSetButtonPopUp(true)}>Contact Us</button>
                        <ContactUs   trigger={contactUsButtonPopUp} setTrigger={contactUsSetButtonPopUp}></ContactUs>
                    </span>
                  </div>
              </ul>
            </div>
            
            
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