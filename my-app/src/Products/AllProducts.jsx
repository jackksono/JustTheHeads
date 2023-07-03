import React from "react";
import {PRODUCTS} from '../ProductsStore'
import Product from "./Product";
import Footer from "../Pages/Footer";



const AllProducts = () => {
    return (
        <div className="pt-16 bg-orange-200 bg-center bg-cover lg:pt-32 bg-allProducts bg-blend-overlay">
            <div className="relative text-4xl text-center text-black md:text-7xl font-YsabeauSC">
                <h1 className="text center">All Products</h1>
            </div>
            <div className="">
            <div className="grid grid-cols-2 gap-2 mt-8 lg:grid-cols-3 lg:gap-6 lg:mt-12 ">
                {PRODUCTS.map((product) => (
                <Product data={product}/>
            ))}
            </div>
            </div>
            <footer className="bottom-0 ">
                <Footer/>
            </footer>
        </div>
    )
}

export default AllProducts;