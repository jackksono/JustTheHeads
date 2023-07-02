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

const delay = 5000

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
        <div>
        <div className="overflow-auto bg-orange-200 bg-center bg-cover shadow-lg bg-drop-shadow-4xl bg-smoke bg-texture bg-blend-color-burn ">
            <div className="relative w-full h-screen px-4 pb-16 m-auto group">
                <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} 
                className="w-full h-full ease-in bg-center bg-cover rounded-2xl opacity-95">
                </div>
                {/* Left Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded full p-2 bg-black/20 text-white cursor-pointer hover:bg-white hover:text-black">
                    <ArrowBackIosIcon onClick={prevSlide} size={30}/>
                </div>
                {/* Right Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded full p-2 bg-black/20 text-white cursor-pointer hover:bg-white hover:text-black">
                    <ArrowForwardIosIcon onClick={nextSlide} size={30}/>
                </div>
                
                
                <div className="flex justify-center py-2 top-4">
                    {slides.map((slide, slideIndex) => (
                        <div 
                            key={slideIndex} 
                            onClick={()=> goToSlide(slideIndex)} 
                            className="text-2xl transition duration-150 ease-in-out cursor-pointer hover:text-white hover:scale-150">
                                <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center p-8 text-5xl text-black font-Caprasimo delay-[300ms]">
                <p>No more Shrimp Chips, get a-Head of the competition!</p>
            </div>
            <div className="w-full aspect-[960/300]  grid grid-cols-2 pt-20  shadow-black px-4 shadow-md bg-blackPaper bg-cover bg-no-repeat bg-center">
                
                    <p className="font-mono text-5xl text-center text-slate-300">Welcome to the Head Family!
                    
                        <p className="flex p-6 pt-24 text-lg text-slate-300">We are the head family! Just The Heads is a small company founded by three
                        best friends that was designed and developed to minimize food waste by using shrimp heads that would normally be wasted, 
                        and turning them into a sustainable, yet delicious snack! With millions of pounds of shrimp shells and heads going to waste
                        each year, support Just The Heads one head and one bag at a time in finding a solution to eliminate food waste globally. </p>
                    </p>
                    <img src={Welcome} alt="bag" className="content-center items-center justify-center w-3/4 h-[300px] shadow-lg rounded-lg shadow-black"></img>     
            </div>
            <div >
                <FeaturedProducts></FeaturedProducts>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
        </div>
    )
}
export default Home