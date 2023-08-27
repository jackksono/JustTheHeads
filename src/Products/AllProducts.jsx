import React, { useState, useEffect } from "react";

import {PRODUCTS} from '../ProductsStore'
import Product from "./Product";
import Footer from "../Pages/Footer";

import { useInView } from 'react-intersection-observer';

import Bounce from 'react-reveal/Bounce'
import { IoIosArrowDropdown } from 'react-icons/io'

const AllProducts = () => {
    const [ index, setIndex ] = useState(0)
    const [ filteredData, setFilteredData ] = useState([])
    const [ wordEntered, setWordEntered ] = useState('')
    
    const [selectedCategory, setSelectedCategory] = useState(null); // Track the selected category

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

    //Animation options
    const zoomOptions = {
        threshold: 0.15, 
        triggerOnce: false, 
    };
    const { ref: zoom1Ref, inView: zoom1InView } = useInView(zoomOptions);

    return (
        <div className="pt-16 overflow-x-hidden bg-center bg-cover bg-color-background lg:pt-32 bg-allProducts bg-blend-lighten">
            <div className="relative text-4xl font-medium text-center text-black md:text-7xl font-CabinSketch " ref={zoom1Ref}>
                <Bounce top when={zoom1InView}>
                    <h1 className="md:text-8xl underline underline-offset-[20%] decoration-color-primary">All Products</h1>
                </Bounce>  
                <Bounce top when={zoom1InView} delay={500}>
                    <p className="pt-10 no-underline">NO CARBS, NO FILLERS, ONLY HEAD</p>
                </Bounce>
            </div>

            <div className="relative py-10 lg:pl-28 w-max">
                <div className="relative">
                    <input 
                        className="w-full px-2 pr-10 bg-white rounded-sm font-Kanit border-color-secondary focus:border-4 " 
                        placeholder="Search categories"
                        value={wordEntered}
                        onClick={toggleCategoryMenu}
                        >
                    </input>
                    <div className="absolute text-xl transform -translate-y-1/2 cursor-pointer right-3 top-1/2 hover:text-black focus:text-black ">
                        <IoIosArrowDropdown onClick={toggleCategoryMenu} ></IoIosArrowDropdown>
                    </div>
                </div>
                <div className="hidden w-full mt-2 bg-white border-2 rounded-sm categoryMenu font-Kanit" >
                    <button 
                        className="flex w-full px-2 py-1 hover:bg-color-secondary "
                        onClick={() =>{
                        handleCategorySelection('Chips');
                        toggleCategoryMenu()}}>
                        Chips
                    </button>
                    <button 
                        className="flex w-full px-2 py-1 hover:bg-color-secondary "
                        onClick={() =>{
                        handleCategorySelection('Merchandise');
                        toggleCategoryMenu()}}>
                        Merchandise
                    </button>
                    <button
                        className="flex w-full px-2 py-1 hover:bg-color-secondary "
                        onClick={() =>{
                        handleCategorySelection('Merchandise');
                        toggleCategoryMenu()}}>
                        Seasonings
                    </button>
                </div>
            </div>
            
            <div className="">
                <div className="grid justify-center grid-cols-2 gap-1 lg:gap-1 lg:grid-cols-3 place-items-center ">
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