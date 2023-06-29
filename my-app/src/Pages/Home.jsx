import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Bag1 from '../Images/SiteImages/Bag1.jpg'
import Bag2 from '../Images/SiteImages/Bag2.jpg'
import Bag3 from '../Images/SiteImages/Bag3.jpg'

import AllProducts from "../Products/AllProducts"

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
    const [ selectedPage, setSelectedPage ] = useState()
    const navigate = useNavigate()

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
        
        <div className="overflow-auto w-screen h-screen bg-gray bg-drop-shadow-4xl">
            
            
            <div className="w-screen h-[600px] w-full m-auto pt-4 pb-16 px-4 relative group">
                <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} 
                className="w-full h-full rounded-2xl bg-center bg-cover transition transition-opacity ease-in opacity-95">
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
            <div className="text-center text-4xl text-black">No more Shrimp Chips, get a-Head of the competition!</div>
            
                <AllProducts></AllProducts>
            
            


            <footer className="w-screen h-[300px] bg-lightning bg-stone-300 bg-texture bg-cover bg-center bg-blend-overlay">
                <div className="flex text-black justify-center space-x-20 pt-4">
                    <p>QUALITY </p>
                    <p>SERVICE</p>
                    <p>PRICE</p>
                </div>
            </footer>
        </div>
    )
}
export default Home