import React, { useState, useEffect } from "react"

import Bag1 from '../Images/SiteImages/Bag1.jpg'
import Bag2 from '../Images/SiteImages/Bag2.jpg'
import Bag3 from '../Images/SiteImages/Bag3.jpg'
import Welcome from '../Images/SiteImages/Welcome.jpg'

import FeaturedProducts from "../Products/FeaturedProducts"
import Footer from "./Footer"

// import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {RxDotFilled} from 'react-icons/rx'


const slides = [
    {url:Bag1},
    {url:Bag2},
    {url:Bag3}
]
const delay = 3000


const Home = () => {

    
    const [ currentIndex, setCurrentIndex ] = useState(0)
    

    useEffect(() => { //Automatically switches slides
        setTimeout(
            () =>
              setCurrentIndex((prevIndex) =>
              prevIndex === slides.length - 1 ? 0 : prevIndex + 1
              ),
            delay
          );
      
          return () => {};
        }, [currentIndex]);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIdex = isFirstSlide ? slides.length - 1 : currentIndex -1;
        setCurrentIndex(newIdex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }
   

    return (
        
        <div className="overflow-auto pt-20 bg-orange-200 bg-drop-shadow-4xl bg-smoke bg-texture bg-cover bg-center bg-blend-color-burn shadow-lg ">
            
            
            <div className=" h-[600px] w-full m-auto pb-16 px-4 relative group">
                <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} 
                className="w-full h-full rounded-2xl bg-center bg-cover ease-in opacity-95">
                </div>
                {/* Left Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded full p-2 bg-black/20 text-white cursor-pointer">
                    <ArrowBackIosIcon onClick={prevSlide} size={30}/>
                </div>
                {/* Right Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded full p-2 bg-black/20 text-white cursor-pointer">
                    <ArrowForwardIosIcon onClick={nextSlide} size={30}/>
                </div>
                
                
                <div className="flex top-4 justify-center py-2">
                    {slides.map((slide, slideIndex) => (
                        <div 
                            key={slideIndex} 
                            onClick={()=> goToSlide(slideIndex)} 
                            className="text-2xl cursor-pointer">
                                <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center p-8 text-5xl text-black pb-20 font-Caprasimo ">
                <p>No more Shrimp Chips, get a-Head of the competition!</p>
            </div>
            <div className="w-screen h-[450px] grid grid-cols-2 pt-20 bg-indigo-900 shadow-black px-4 shadow-md rounded-2xl bg-blackPaper">
                    <p className="text-center text-slate-300 text-5xl font-mono">Welcome to the Head Family!
                        <p className="flex text-slate-300 text-lg p-6">We are the head family! Just The Heads is a small company founded by three
                        best friends that was designed and developed to minimize food waste by using shrimp heads that would normally be wasted, 
                        and turning them into a sustainable, yet delicious snack! With millions of pounds of shrimp shells and heads going to waste
                        each year, support Just The Heads one head and one bag at a time in finding a solution to eliminate food waste globally. </p>
                    </p>
                    <img src={Welcome} alt="bag" className="content-center items-center justify-center w-3/4 h-[300px] shadow-lg rounded-lg shadow-black"></img>
                    
                </div>
            <div className="">
                <FeaturedProducts></FeaturedProducts>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}
export default Home