import React, { useState, useContext } from "react";
import { Link, Route, Routes} from "react-router-dom";
import { Navbar } from 'react-bootstrap'

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
        <Navbar className="fixed w-screen bg-orange-200 h-[100px] z-10 drop-shadow-2xl bg-bubbles bg-texture bg-cover bg-center bg-blend-overlay">
          <Navbar.Collapse className="justify-content-end">
            <div className="flex justify-between px-20 mt-1">
                  <span className="bg-primary-500 text-black">
                    <RingVolumeIcon/>Questions? Holler At Us @ xxx-xxx-xxxx</span>
                  
                  <div className="flex items-center gap-5 mt-1">
                    <Link to="/login">
                        <button className="flex justify-end bg-primary-500 text-black hover:text-white">
                            <PersonIcon/>
                        </button>
                    </Link>    
                    <span>
                        <button 
                          className="flex justify-end bg-primary-500 text-black hover:text-white"
                          onClick={() => searchBarSetButtonPopUp(true)}>
                            <SearchIcon/>
                        </button>
                        <SearchBar trigger={searchBarButtonPopUp} setTrigger={searchBarSetButtonPopUp}></SearchBar>
                    </span>
                    <Link to="/checkout">
                        <button className="flex text-right bg-primary-500 text-black hover:text-white">
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
        
            <div className="flex justify-between w-full h-full px-20 mt-10">
              <div className="flex items-center gap-10">
                <Link to="/">
                  <button className="bg-primary-500 text-color-shrimp hover:text-white">
                    Home
                  </button>
                </Link>
              </div>

              <div className="flex items-center gap-10">

                <Link to="/all-products">
                  <button className="bg-primary-500 text-color-shrimp hover:text-white"
                  data-collapse-toggle="navbar-dropdown">
                    All Products
                  </button>
                </Link>

                <Link to="/why-just-the-head">
                  <button className="bg-primary-500 text-color-shrimp hover:text-white">Why Just The Head?</button>
                </Link>

                <span className="flex">
                    <button className="bg-primary-500 text-color-shrimp hover:text-white"
                    onClick={()=> contactUsSetButtonPopUp(true)}>Contact Us</button>
                    <ContactUs trigger={contactUsButtonPopUp} setTrigger={contactUsSetButtonPopUp}></ContactUs>
                </span>
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>

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