import React, { useState } from "react";
import Zoom from 'react-reveal/Zoom'
import {PRODUCTS} from '../ProductsStore'
import Product from "./Product";
import Footer from "../Pages/Footer";


const AllProducts = () => {
    const [ index, setIndex ] = useState(0)
    return (
        <div className="pt-16 bg-orange-200 bg-center bg-cover lg:pt-32 bg-allProducts bg-blend-overlay">
            <div className="relative text-4xl text-center text-black md:text-7xl font-CabinSketch">
                <Zoom bottom>
                    <h1 className="text center">All Products</h1>
                </Zoom>
            </div>
            <div className="">
            <div className="grid justify-center grid-cols-2 gap-1 mt-8 lg:gap-10 lg:grid-cols-3 place-items-center lg:mt-12 ">
                {PRODUCTS.map((product) => (
                <Product data={product} index={index} setIndex={setIndex}/>
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