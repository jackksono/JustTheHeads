import React from "react";
import {PRODUCTS} from '../ProductsStore'
import Product from "./Product";
import Footer from "../Pages/Footer";



const AllProducts = () => {
    return (
        <div className="pt-44">
            <div className="relative text-black text-center text-7xl font-YsabeauSC">
                <h1 className="text center">All Products</h1>
            </div>
            <div className="grid grid-cols-3 w-full h-auto place-items-center pt-12">
                {PRODUCTS.map((product) => (
                <Product data={product}/>
            ))}
            </div>
            <footer className=" bottom-0">
                <Footer/>
            </footer>
        </div>
    )
}

export default AllProducts;