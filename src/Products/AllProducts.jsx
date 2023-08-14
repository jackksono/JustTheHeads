import React, { useState, useEffect } from "react";


import {PRODUCTS} from '../ProductsStore'
import Product from "./Product";
import Footer from "../Pages/Footer";

import { useInView } from 'react-intersection-observer';
import { useClickAway } from "@uidotdev/usehooks";

import Bounce from 'react-reveal/Bounce'
import { IoIosArrowDropdown } from 'react-icons/io'

const AllProducts = () => {
    const [ index, setIndex ] = useState(0)
    const [ filteredData, setFilteredData ] = useState([])
    const [ wordEntered, setWordEntered ] = useState('')
    
    const [selectedCategory, setSelectedCategory] = useState(null); // Track the selected category

    const clickAway = useClickAway(() => {
        toggleCategoryMenu()
      });

    const handleCategorySelection = (category) => {
        setSelectedCategory(category); // Update the selected category
        setWordEntered(category); // Clear the search input
    };

    useEffect(() => {
        let newFilter = PRODUCTS;

        if (selectedCategory) {
            newFilter = newFilter.filter((value) =>
                value.category.toLowerCase() === selectedCategory.toLowerCase()
            );
        }

        if (wordEntered) {
            newFilter = newFilter.filter((value) =>
                value.category.toLowerCase().includes(wordEntered.toLowerCase())
            );
        }

        setFilteredData(newFilter);
    }, [selectedCategory, wordEntered]);

    const toggleCategoryMenu = () => {
        const category =document.querySelector('.categoryMenu')
        category.classList.toggle('hidden')
    }

    const zoomOptions = {
        threshold: 0.75, 
        triggerOnce: false, 
    };
    const { ref: zoom1Ref, inView: zoom1InView } = useInView(zoomOptions);

    return (
        <div className="pt-16 overflow-x-hidden bg-orange-200 bg-center bg-cover lg:pt-32 bg-allProducts bg-blend-overlay">
            <div className="relative text-4xl text-center text-black md:text-7xl font-CabinSketch">
                <Bounce top when={zoom1InView}>
                    <h1 className="">All Products</h1>
                </Bounce>  
                <Bounce top when={zoom1InView} delay={500}>
                    <p className="pt-10">NO CARBS, NO FILLERS, ONLY HEAD</p>
                </Bounce>
            </div>

            <div className="relative py-10 lg:pl-28 w-max" ref={clickAway}>
                <div className="relative focus:text-black">
                    <input 
                        className="w-full px-2 pr-10 bg-white rounded-sm font-Kanit " 
                        placeholder="Search categories"
                        value={wordEntered}
                        onClick={toggleCategoryMenu}
                        >
                    </input>
                    <div className="absolute text-xl transform -translate-y-1/2 cursor-pointer right-3 top-1/2 hover:text-black focus:text-black">
                        <IoIosArrowDropdown onClick={toggleCategoryMenu} ></IoIosArrowDropdown>
                    </div>
                </div>
                <div className="hidden w-full mt-2 bg-white border border-black rounded-sm categoryMenu font-Kanit" >
                    <button 
                        className="flex w-full px-2 py-1 hover:bg-gray-500 "
                        onClick={() =>{
                            handleCategorySelection('Chips');
                            toggleCategoryMenu()}}>
                            Chips
                    </button>
                    <button 
                        className="flex w-full px-2 py-1 hover:bg-gray-500 "
                        onClick={() =>{
                            handleCategorySelection('Merchandise');
                            toggleCategoryMenu()}}>
                            Merchandise</button>
                    <button></button>
                </div>
            </div>
            
            <div className="">
                <div className="grid justify-center grid-cols-2 gap-1 mt-8 lg:gap-10 lg:grid-cols-3 place-items-center lg:mt-12 ">
                    {selectedCategory
                        ? filteredData.map((product) => (
                            product.category.toLowerCase() === selectedCategory.toLowerCase() && (
                                <Product data={product} key={product.webId} index={index} setIndex={setIndex} />
                            )
                        ))
                        : PRODUCTS.map((product) => (
                            <Product data={product} key={product.webId} index={index} setIndex={setIndex} />
                        ))}
            </div>
            
            <footer className="bottom-0 ">
                <Footer/>
            </footer>
        </div>
        </div>
    )
}

export default AllProducts;