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
            <div className="justify-center">
                <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} 
                className="w-[414px] h-[300px] justify-center lg:w-screen md:h-[600px] lg:bg-no-repeat bg-cover bg-center rounded-2xl opacity-95">
                </div>
                {/* Left Arrow */}
                <div className="group-hover:block absolute lg:top-[50%] top-[25%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded full p-2 bg-black/20 text-white cursor-pointer hover:bg-white hover:text-black">
                    <ArrowBackIosIcon onClick={prevSlide} size={30}/>
                </div>
                {/* Right Arrow */}
                <div className="group-hover:block absolute lg:top-[50%] top-[25%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded full p-2 bg-black/20 text-white cursor-pointer hover:bg-white hover:text-black">
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
            <div className="text-center p-8 lg:text-5xl text-3xl text-black font-Caprasimo delay-[300ms]">
                <p>No more Shrimp Chips, get a-Head of the competition!</p>
            </div>
            <div className="w-full lg:aspect-[960/300] lg:h-[500px] h-[200px] grid grid-cols-2 lg:pt-20 pt-4 content-center items-center justify-center place-content-center  shadow-black px-4 shadow-md bg-layeredPeak1 bg-cover bg-no-repeat bg-center">
                
                    <p className="pt-2 pr-2 font-mono text-center text-black lg:text-5xl lg:pt-0 text-md">Welcome to the Head Family!
                    
                        <p className="flex pt-3 text-[7px] lg:pt-12 lg:text-lg lg:p-6 text-black">We are the head family! Just The Heads is a small company founded by three
                        best friends that was designed and developed to minimize food waste by using shrimp heads that would normally be wasted, 
                        and turning them into a sustainable, yet delicious snack! With millions of pounds of shrimp shells and heads going to waste
                        each year, support Just The Heads one head and one bag at a time in finding a solution to eliminate food waste globally. </p>
                    </p>
                    <img src={Welcome} alt="bag" className=" mb-10 lg:w-3/4 lg:h-[300px] w-[150px]  h-auto mx-auto  shadow-lg rounded-lg shadow-black"></img> 
                        
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