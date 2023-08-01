import React, { useState } from "react";

import {PRODUCTS} from '../ProductsStore'
import Product from "./Product";
import Footer from "../Pages/Footer";

import { useInView } from 'react-intersection-observer';
import Bounce from 'react-reveal/Bounce'

const AllProducts = () => {
    const [ index, setIndex ] = useState(0)

    const zoomOptions = {
        threshold: 0.75, 
        triggerOnce: false, 
    };
    const { ref: zoom1Ref, inView: zoom1InView } = useInView(zoomOptions);

    return (
        <div className="pt-16 bg-orange-300 bg-center bg-cover lg:pt-32 bg-allProducts bg-blend-overlay">
            <div className="relative text-4xl text-center text-black md:text-7xl font-CabinSketch" ref={zoom1Ref}>
                <Bounce top when={zoom1InView}>
                    <h1 className="">All Products</h1>
                </Bounce>  
                <Bounce top when={zoom1InView} delay={500}>
                    <p className="pt-10">NO CARBS, NO FILLERS, ONLY HEAD</p>
                </Bounce>
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