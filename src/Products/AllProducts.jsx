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

    const handleCategorySelection = (inputCategory, e) => {
        e.preventDefault()
        setSelectedCategory(inputCategory); // Update the selected category
        setWordEntered(inputCategory); // Clear the search input
    };

    useEffect(() => {
        let newFilter = PRODUCTS;

        if (selectedCategory) {
            console.log(selectedCategory)
            
            newFilter = newFilter.filter((value) =>
            
                value.category.toLowerCase() === (selectedCategory.toLowerCase())
                
            );
            console.log(newFilter)
        } 
       

        if (wordEntered) {
            newFilter = newFilter.filter((value) =>
                value.category.toLowerCase().includes(wordEntered.toLowerCase())
            );
        }

        setFilteredData(newFilter);
    }, [selectedCategory, wordEntered]);

    const toggleCategoryMenu = (e) => {
        e.preventDefault()
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
        <div className="overflow-x-hidden bg-center bg-cover pt-28 bg-color-background sm:pt-32 bg-allProducts bg-blend-lighten">
            <div className="relative flex flex-col items-center justify-center text-4xl font-medium text-center text-black md:text-7xl font-CabinSketch" ref={zoom1Ref}>
                <Bounce top when={zoom1InView}>
                    <h1 className="md:text-8xl underline underline-offset-[20%] decoration-color-primary font-bold">All Products</h1>
                </Bounce>  
                <Bounce top when={zoom1InView} delay={500}>
                    <p className="pt-10 no-underline md:text-6xl">NO CARBS, NO FILLERS, ONLY HEAD</p>
                </Bounce>
            </div>

            <div className="relative py-10 mx-5 w-max">
                <div className="relative sm:hidden">
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

                <div className="text-center sm:w-screen sm:items-center sm:flex sm:pt-[1%] sm:flex-row sm:justify-center">
                    <div className="sm:flex sm:flex-row sm:justify-center sm:space-x-[5%] w-auto sm:w-screen ">
                    <h1 className="invisible sm:relative sm:visible sm:min-w-max sm:flex sm:font-CabinSketch sm:font-bold sm:text-base sm:py-2 sm:ml-[5%]">Filter Categories:</h1>
                    <div className="hidden z-10 w-auto sm:w-screen mt-2 border-2 rounded-sm sm:visible categoryMenu sm:border-none sm:inline-flex font-Kanit sm:space-x-[5%] text-center items-center" >
                        <button 
                            className="flex w-full px-2 py-1 bg-white sm:py-2 sm:w-max sm:inline-flex sm:text-xl hover:bg-color-secondary sm:bg-transparent sm:font-CabinSketch sm:font-bold sm:text-center"
                            onClick={(e) =>{
                            handleCategorySelection('allProducts', e);
                            toggleCategoryMenu(e)}}>
                            All Products
                        </button>
                        <button 
                            className="flex w-full px-2 py-1 bg-white sm:py-2 sm:w-max sm:inline-flex sm:text-xl hover:bg-color-secondary sm:bg-transparent sm:font-CabinSketch sm:font-bold sm:text-center"
                            onClick={(e) =>{
                            handleCategorySelection('Chips', e);
                            toggleCategoryMenu(e)}}>
                            Chips
                        </button>
                        <button 
                            className="flex w-full px-2 py-1 bg-white sm:py-2 sm:w-max sm:inline-flex sm:text-xl hover:bg-color-secondary sm:bg-transparent sm:font-CabinSketch sm:font-bold sm:text-center"
                            onClick={(e) =>{
                            handleCategorySelection('Merchandise', e);
                            toggleCategoryMenu(e)}}>
                            Merchandise
                        </button>
                        <button
                            className="flex w-full px-2 py-1 bg-white sm:w-max sm:text-xl hover:bg-color-secondary sm:bg-transparent sm:font-CabinSketch sm:font-bold"
                            onClick={(e) =>{
                            handleCategorySelection('Merchandise', e);
                            toggleCategoryMenu(e)}}>
                            Seasonings
                        </button>
                    </div>
                </div>
                
                </div>
                
            </div>
            
            <div className="mt-[-5%]">
                <div className="grid justify-center grid-cols-2 sm:gap-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center ">
                    {selectedCategory === "Chips" || selectedCategory === "Merchandise" || selectedCategory === "Seasonings"
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