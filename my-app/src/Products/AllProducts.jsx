import React from "react";
import {PRODUCTS} from '../ProductsStore'
import Product from "./Product";
import Footer from "../Pages/Footer";



const AllProducts = () => {
    return (
        <div className="pt-16 md:pt-32">
            <div className="relative text-4xl text-center text-black md:text-7xl font-YsabeauSC">
                <h1 className="text center">All Products</h1>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-6 md:mt-12">
                {PRODUCTS.map((product) => (
                <Product data={product}/>
            ))}
            </div>
            <footer className="bottom-0 ">
                <Footer/>
            </footer>
        </div>
    )
}

export default AllProducts;