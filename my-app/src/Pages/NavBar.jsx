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
  

    return (
      
        <>
        
        <Headroom>
          
        <nav className="w-screen p-2 top-0 inset-x-0 bg-orange-100 h-[100px] drop-shadow-2xl bg-bubbles bg-texture bg-cover bg-center bg-blend-overlay justify-content-end">
        
            <div className="flex justify-between px-20 mt-1 sm:px-10">
                  <span className="italic text-black md:text-sm sm:text-xs bg-primary-500">
                    <RingVolumeIcon/>Questions? Holla At Us @ xxx-xxx-xxxx</span>
                  
                  <div className="flex items-center gap-5 mt-1">
                    <Link to="/login">
                        <button className="flex justify-end text-black transition duration-150 ease-in-out bg-primary-500 hover:text-white hover:scale-125">
                            <PersonIcon/>
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
              className="h-[200px] w-[225px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-10"></img>
            </div>
            
            <button data-collapse-toggle="navbar-default" className="inline-flex items-center justify-end p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class="hidden pt-8 w-full px-10 md:block md:w-auto " id="navbar-default">
              <ul class="font-medium flex flex-col justify-between w-full h-full px-20 p-4 md:p-0 mt-4 pb-4   md:flex-row md:space-x-8 md:mt-0">
                
                  <div className="flex items-center gap-10 ">
                    <Link to="/">
                      <button className="text-lg font-semibold duration-200 bg-primary-500 text-color-shrimp hover:text-orange-900 font-Kanit">
                        Home
                      </button>
                    </Link>
                  </div>
                
                  <div className="flex items-center gap-10">
                  
                    <Link to="/all-products">
                      <button className="md:text-lg md:font-semibold md:duration-200 md:bg-primary-500 md:text-color-shrimp md:hover:text-orange-900 font-Kanit"
                      data-collapse-toggle="navbar-dropdown">
                        All Products
                      </button>
                    </Link>
                    

                    <Link to="/why-just-the-head">
                      <button className="text-lg font-semibold duration-200 bg-primary-500 text-color-shrimp hover:text-orange-900 font-Kanit">Why Just The Head?</button>
                    </Link>

                    <span className="flex" >
                        <button className="text-lg font-semibold duration-200 bg-primary-500 text-color-shrimp hover:text-orange-900 font-Kanit"
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