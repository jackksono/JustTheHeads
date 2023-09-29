import React from "react";
import Footer from "../Footer";

import Bounce from 'react-reveal/Bounce'
import Slide from 'react-reveal/Slide'
import Roll from 'react-reveal/Roll'
import { useInView } from 'react-intersection-observer';

import ShrimpBanner from '../../Images/SiteImages/ShrimpBanner.jpg'
import JackS from '../../Images/ProfileImages/JackS.jpg'
import ChristianD from '../../Images/ProfileImages/ChristianD2.jpg'

const AboutUs = () => {
    const zoomOptions = {
        threshold: 0.13, 
        triggerOnce: false, 
    };
    const zoomOptions2 = {
        threshold: 0.2, 
        triggerOnce: false, 
    };
    
    const { ref: zoom1Ref, inView: zoom1InView } = useInView(zoomOptions);
    const { ref: zoom2Ref, inView: zoom2InView } = useInView(zoomOptions);
    const { ref: zoom3Ref, inView: zoom3InView } = useInView(zoomOptions);
    const { ref: zoom4Ref, inView: zoom4InView } = useInView(zoomOptions2);

    return (
        <>
            <div className="bg-center bg-cover bg-color-background pt-36 sm:pt-52 bg-allProducts bg-blend-lighten">
                <div className="w-screen h-[400px]" ref={zoom4Ref}>
                    <Bounce top when={zoom4InView}>
                        <h1 className="text-4xl italic font-bold text-center text-black sm:text-8xl font-CabinSketch">Why Just The Heads?</h1>
                    </Bounce>
                   
                    <div className="flex flex-col text-center text-black sm:grid sm:grid-cols-2 sm:p-20 sm:pt-20 ">
                        <Roll left when={zoom4InView}>
                            <p className="flex border w-auto border-black border-solid sm:h-[400px] rounded-2xl shadow-lg m-4 text-sm sm:text-xl font-YsabeauSC sm:leading-8 px-5 sm:py-5 ">We are the head family! Just The Heads is a small company founded by three
                                best friends that was designed and developed to minimize food waste by using shrimp heads that would normally be wasted 
                                and turning them into a sustainable, yet delicious snack! With 1.3 billion pounds of fish and shrimp going to waste
                                each year, we wanted to help solve the issue of food waste. Support Just The Heads one bag and one head at a time in finding a solution to lower food waste globally.
                            </p>
                        </Roll>
                        <Roll right when={zoom4InView}>
                            <div className="flex justify-center place-items-center">
                                <img src={ShrimpBanner} alt="JustHeads" className="w-11/12 h-11/12 sm:w-[500px] sm:h-96 shadow-lg" loading="lazy"></img>
                            </div>
                        </Roll>
                    </div>
                </div>
            
                <div className='flex justify-center w-3/4 py-5 mx-auto mt-40 text-center bg-black sm:mt-60 left-1/8'>
                    <h1 className='flex items-center justify-center font-extrabold text-color-primary xl:text-4xl font-YsabeauSC '>MEET THE TEAM</h1>
                </div>

                <div className="pt-10 sm:space-y-8">
                    <div className="w-screen overflow-hidden rounded-lg shadow-md sm:grid sm:grid-cols-2 sm:pt-20 sm:pl-5 sm:pr-20" ref={zoom1Ref}>
                        <Slide left when={zoom1InView}>
                            <h1 className="px-2 text-2xl italic text-black sm:text-4xl">Jack Sonoda
                                <p className="italic text-gray-500 px-1text-xl sm:text-lg">Founder</p>
                                <p className="flex pt-5 text-sm not-italic sm:text-lg">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quidem debitis modi iste voluptates amet, excepturi officia, harum laborum suscipit odio laboriosam rerum eum! Quas labore recusandae accusantium similique modi?
                                </p>
                                <p1 className="flex pt-5 text-sm not-italic sm:text-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, optio facilis accusantium perspiciatis harum ullam quaerat provident. Sapiente sequi nisi quidem dignissimos? Dignissimos eligendi illum deleniti! Optio esse accusamus id.
                                </p1>
                            </h1>
                            <div className="flex flex-col items-center justify-center place-content-center">
                                <img 
                                    className="w-2/4 ml-auto mr-24 rounded-lg shadow-xl sm:rounded-full h-2/4 sm:w-auto sm:mb-10 sm:h-96 sm:mr-40" 
                                    src={JackS} alt="JacksIMG"
                                    loading="lazy">
                                </img> 
                            </div>
                        </Slide>
                    </div>
                    <div className="w-screen overflow-hidden rounded-lg shadow-md sm:pl-20 sm:grid sm:justify-end sm:grid-cols-2 sm:pt-5 sm:pr-5" ref={zoom2Ref}>
                        <Slide right when={zoom2InView}>
                            <img 
                                className="w-2/4 ml-auto mr-24 rounded-lg shadow-xl sm:rounded-full h-2/4 sm:w-auto sm:mb-10 sm:h-96 sm:mr-40"  
                                alt="JacobsIMG"
                                loading="lazy">
                            </img>
                            <h1 className="px-2 text-2xl italic text-black sm:text-4xl">Jacob Zinger
                                <p className="px-1 text-xl italic text-gray-500 sm:text-lg">Co-Founder</p>
                                <p className="flex pt-5 text-sm not-italic sm:text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quasi animi repellat, beatae voluptatibus modi itaque veritatis consequatur accusantium dolore doloribus vitae libero dicta tempora. Temporibus modi quas quod sapiente!
                                </p>
                                <p1 className="flex pt-5 text-sm not-italic sm:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae assumenda voluptatum id sed soluta nisi eveniet natus quia alias, doloremque vitae laboriosam unde odit earum iure deserunt similique consequuntur provident!</p1>
                            </h1>
                        </Slide>
                    </div>
                    <div className="w-screen overflow-hidden rounded-lg shadow-md sm:grid sm:grid-cols-2 sm:pt-5 sm:pl-5 sm:pr-20" ref={zoom3Ref}>
                        <Slide left when={zoom3InView}>
                            <h1 className="px-2 text-2xl italic text-black sm:text-4xl">Christian Digap
                                <p className="text-lg italic text-gray-500 ">Co-Founder</p>
                                <p className="flex pt-5 text-sm not-italic sm:text-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam rerum nostrum illo temporibus atque necessitatibus eos rem quidem aut fugit sed, illum veniam deleniti reiciendis ab tenetur blanditiis eius provident.
                                </p>
                                <p1 className="flex pt-5 text-sm not-italic sm:text-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestiae voluptatum natus incidunt ea porro enim quaerat, id ab ducimus provident, iste rem deserunt unde aperiam in nam doloremque at!
                                </p1>
                            </h1>
                            <div className="flex flex-col items-center justify-center place-content-center">
                                <img 
                                    className="w-2/4 ml-auto mr-24 rounded-lg shadow-xl sm:rounded-full h-2/4 sm:w-auto sm:mb-10 sm:h-96 sm:mr-40" 
                                    src={ChristianD} alt="ChristiansIMG"
                                    loading="lazy">
                                </img>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
            <footer class="bottom-0 ">
                <Footer></Footer>
            </footer>
        </>
    )
}

export default AboutUs