import React, { useState, useEffect } from "react"

import { useInView } from 'react-intersection-observer';
import Fade from 'react-reveal/Fade'


import SlideImageOne from '../Images/SiteImages/SlideImageOne.jpg'
import SlideImageTwo from '../Images/SiteImages/SlideImageTwo.jpg'

import Welcome from '../Images/SiteImages/Welcome.jpg'

import FeaturedProducts from "../Products/FeaturedProducts"
import Footer from "./Footer"

// import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {RxDotFilled} from 'react-icons/rx'

import Logo1 from '../Images/SiteImages/Logo1.png'

const slides = [
    {url:SlideImageOne},
    {url:SlideImageTwo},
   
]

const delay = 5000


const Home = () => {

    const [ currentIndex, setCurrentIndex ] = useState(0)
   
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, delay);

        return () => {
            clearInterval(interval);
        };
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
            <div className="overflow-x-hidden bg-center bg-cover shadow-lg bg-color-background lg:w-screen bg-drop-shadow-4xl bg-smoke bg-texture bg-blend-color-burn ">
                <div className="justify-center">
                    <div className='w-[375px] h-[67vh] justify-center lg:w-screen shadow-2xl relative'>
                        {slides.map((slide, slideIndex) => (
                            <div
                            key={slideIndex}
                            className={`w-[375px] h-[67vh] lg:w-full bg-no-repeat bg-cover bg-top drop-shadow-2xl absolute transition-opacity duration-1000 ${
                                currentIndex === slideIndex ? 'opacity-100' : 'opacity-0'}`}
                            style={{
                                backgroundImage: `url(${slide.url})`,
                                transform: `translateX(${-100 * (currentIndex - slideIndex)}%)`,
                            }}
                    ></div>
                ))}
            </div>
                    {/* Left Arrow */}
                    <div className="invisible lg:visible group-hover:block absolute lg:top-[50%]  left-5 text-2xl rounded full p-2 bg-black/20 text-white cursor-pointer hover:bg-white hover:text-color-text">
                        <ArrowBackIosIcon onClick={prevSlide} size={30}/>
                    </div>
                    {/* Right Arrow */}
                    <div className="invisible lg:visible group-hover:block absolute lg:top-[50%]  right-5 text-2xl rounded full p-2 bg-black/20 text-white cursor-pointer hover:bg-white hover:text-color-text">
                        <ArrowForwardIosIcon onClick={nextSlide} size={30}/>
                    </div>
                    
                    <div className="flex justify-center">
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
                        <div className='relative p-4 text-3xl font-medium text-center text-color-text lg:p-8 lg:pt-2 lg:text-6xl font-CabinSketch'>
                            <p className="">No more Shrimp Chips, get a-Head of the competition!</p>
                        </div>
                    </Fade>
                </div>
                
                {/* <div className="w-[150px] h-[150px] absolute top-3/4 left-1/2 transform rotate-30 lg:mt-96 ml-80"
                ref={zoom4Ref}>
                    <Fade right when={zoom4InView} delay={0} duration={6000}>
                        <img src={Logo1} alt="TestLogo" loading="lazy"></img>
                    </Fade>
                </div> */}

                <div className="w-[150px] h-[150px] absolute top-11/12 right-1/2 transform rotate-12 mr-72"
                ref={zoom3Ref}>
                    <Fade left when={zoom3InView} delay={0} duration={8000}>
                        <img src={Logo1} alt="TestLogo" loading="lazy"></img>
                    </Fade>
                </div>

                <div className="w-full lg:aspect-[960/300] lg:h-[500px] h-[300px] grid grid-cols-2 lg:pt-20 pt-4 content-center items-center justify-center place-content-center  shadow-black px-4 shadow-md bg-layeredPeak1 bg-fixed bg-cover bg-no-repeat bg-center"
                ref={zoom2Ref}>
                        <Fade right when={zoom2InView} duration={2000}>
                            <p className='pt-2 pr-2 font-extrabold text-center font-YsabeauSC text-color-text lg:text-5xl lg:pt-10 text-md'
                                >Welcome to the Head Family!
                            
                                <p className="flex pt-3 text-[7px] lg:pt-12 lg:text-lg lg:p-6 text-color-text font-mono " > </p>
                            </p>
                            <img src={Welcome} alt="bag" className="mb-10 lg:w-3/4 lg:h-[300px] w-[150px]  h-auto mx-auto  shadow-lg rounded-lg shadow-black" loading="lazy"></img>
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