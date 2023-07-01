import React from "react";
import {PRODUCTS} from '../ProductsStore'
import Product from "./Product";
import Footer from "../Pages/Footer";



const AllProducts = () => {
    return (
        <div className="pt-44">
            <div className="relative text-center text-black text-7xl font-YsabeauSC">
                <h1 className="text center">All Products</h1>
            </div>
            <div className="grid w-full h-auto grid-cols-3 pt-12 place-items-center">
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