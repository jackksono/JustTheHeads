import React, { useState, useEffect } from "react"

import { useInView } from 'react-intersection-observer';
import Fade from 'react-reveal/Fade'


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

import Logo1 from '../Images/SiteImages/Logo1.png'

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

  
    const zoomOptions = {
        threshold: 0.5, // Adjust this threshold value to your desired visibility trigger point
        triggerOnce: false, // Set to true so that the animation only happens once
    };
    const zoomOptions2 = {
        threshold: 0.4, // Adjust this threshold value to your desired visibility trigger point
        triggerOnce: false, // Set to true so that the animation only happens once
    };
    const { ref: zoom1Ref, inView: zoom1InView } = useInView(zoomOptions);
    const { ref: zoom2Ref, inView: zoom2InView } = useInView(zoomOptions2);
    const { ref: zoom3Ref, inView: zoom3InView } = useInView(zoomOptions2);
    const { ref: zoom4Ref, inView: zoom4InView } = useInView(zoomOptions2);

    return (
        <div>
            <div className="overflow-auto bg-orange-200 bg-center bg-cover shadow-lg lg:w-screen bg-drop-shadow-4xl bg-smoke bg-texture bg-blend-color-burn ">
                <div className="justify-center">
                    <div className='w-[375px] h-[300px] justify-center lg:w-screen lg:h-[1000px] relative'>
                        {slides.map((slide, slideIndex) => (
                            <div
                            key={slideIndex}
                            className={`w-[375px] h-[300px] lg:w-full lg:h-full bg-no-repeat bg-cover bg-center rounded-2xl absolute transition-opacity duration-1000 ${
                                currentIndex === slideIndex ? 'opacity-100' : 'opacity-0'}`}
                            style={{
                                backgroundImage: `url(${slide.url})`,
                                transform: `translateX(${-100 * (currentIndex - slideIndex)}%)`,
                            }}
                    ></div>
                ))}
            </div>
                    {/* Left Arrow */}
                    <div className="invisible lg:visible group-hover:block absolute lg:top-[50%]  left-5 text-2xl rounded full p-2 bg-black/20 text-white cursor-pointer hover:bg-white hover:text-black">
                        <ArrowBackIosIcon onClick={prevSlide} size={30}/>
                    </div>
                    {/* Right Arrow */}
                    <div className="invisible lg:visible group-hover:block absolute lg:top-[50%]  right-5 text-2xl rounded full p-2 bg-black/20 text-white cursor-pointer hover:bg-white hover:text-black">
                        <ArrowForwardIosIcon onClick={nextSlide} size={30}/>
                    </div>
                    
                    <div className="flex justify-center py-2 top-4">
                        {slides.map((slide, slideIndex) => (
                            <div 
                                key={slideIndex} 
                                onClick={()=> goToSlide(slideIndex)} 
                                className="text-sm transition duration-150 ease-in-out cursor-pointer lg:text-3xl hover:text-white hover:scale-150">
                                    <RxDotFilled />
                            </div>
                        ))}
                    </div>
                </div>
                
                <div ref={zoom1Ref}>
                    <Fade bottom when={zoom1InView}>
                        <div className='relative p-4 text-3xl text-center text-black lg:p-8 lg:text-6xl font-CabinSketch'>
                            <p>No more Shrimp Chips, get a-Head of the competition!</p>
                        </div>
                    </Fade>
                </div>
                
                <div className="w-[150px] h-[150px] absolute top-3/4 left-1/2 transform rotate-30 lg:mt-96 ml-80"
                ref={zoom4Ref}>
                    <Fade right when={zoom4InView} delay={0} duration={6000}>
                        <img src={Logo1} alt="TestLogo"></img>
                    </Fade>
                </div>

                <div className="w-[150px] h-[150px] absolute top-3/4 right-1/2 transform rotate-12  lg:mt-96 mr-80"
                ref={zoom3Ref}>
                    <Fade left when={zoom3InView} delay={0} duration={8000}>
                        <img src={Logo1} alt="TestLogo"></img>
                    </Fade>
                </div>

                <div className="w-full lg:aspect-[960/300] lg:h-[500px] h-[300px] grid grid-cols-2 lg:pt-20 pt-4 content-center items-center justify-center place-content-center  shadow-black px-4 shadow-md bg-layeredPeak1 bg-fixed bg-cover bg-no-repeat bg-center"
                ref={zoom2Ref}>
                        <Fade right when={zoom2InView} duration={2000}>
                            <p className='pt-2 pr-2 font-mono text-center text-black lg:text-5xl lg:pt-10 text-md'
                                >Welcome to the Head Family!
                            
                                <p className="flex pt-3 text-[7px] lg:pt-12 lg:text-lg lg:p-6 text-black" >We are the head family! Just The Heads is a small company founded by three
                                best friends that was designed and developed to minimize food waste by using shrimp heads that would normally be wasted, 
                                and turning them into a sustainable, yet delicious snack! With millions of pounds of shrimp shells and heads going to waste
                                each year, support Just The Heads one head and one bag at a time in finding a solution to eliminate food waste globally. </p>
                            </p>
                            <img src={Welcome} alt="bag" className=" mb-10 lg:w-3/4 lg:h-[300px] w-[150px]  h-auto mx-auto  shadow-lg rounded-lg shadow-black"></img>
                        </Fade>
                </div>
                
                <div>
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