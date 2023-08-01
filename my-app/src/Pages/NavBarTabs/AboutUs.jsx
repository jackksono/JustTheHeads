import React, { useRef } from "react";
import Footer from "../Footer";

import Bounce from 'react-reveal/Bounce'
import Slide from 'react-reveal/Slide'
import Roll from 'react-reveal/Roll'
import { useInView } from 'react-intersection-observer';

import ShrimpBanner from '../../Images/SiteImages/ShrimpBanner.jpg'
import JackS from '../../Images/ProfileImages/JackS.jpg'

const AboutUs = () => {
    const zoomOptions = {
        threshold: 0.35, 
        triggerOnce: false, 
    };
    const zoomOptions2 = {
        threshold: 0.9, 
        triggerOnce: false, 
    };
    const { ref: zoom1Ref, inView: zoom1InView } = useInView(zoomOptions);
    const { ref: zoom2Ref, inView: zoom2InView } = useInView(zoomOptions);
    const { ref: zoom3Ref, inView: zoom3InView } = useInView(zoomOptions);
    const { ref: zoom4Ref, inView: zoom4InView } = useInView(zoomOptions2);

    return (
        <>
            <div className="lg:pt-36">
                <div className="w-screen h-[400px]" ref={zoom4Ref}>
                    <Bounce top when={zoom4InView}>
                        <h1 className="italic text-center text-black text-7xl font-YsabeauSC">Why Just The Heads?</h1>
                    </Bounce>
                   
                    <div className="grid grid-cols-2 text-center text-black lg:p-20 lg:pt-20 ">
                        <Roll left when={zoom4InView}>
                            <p className="border border-black border-solid lg:h-[400px] rounded-2xl shadow-lg">You have chosen head. 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis qui libero consequatur id. Accusantium nostrum consequatur soluta nemo neque? Nemo, mollitia et voluptates assumenda voluptatum ut molestias perferendis provident architecto?
                            </p>
                        </Roll>
                        <Roll right when={zoom4InView}>
                            <div className="flex justify-center place-items-center">
                                <img src={ShrimpBanner} alt="JustHeads" className="lg:w-[500px] lg:h-96 shadow-lg"></img>
                            </div>
                        </Roll>
                    </div>
                </div>
            
                <div className="pt-40 text-orange-500">
                    <h1 className="pt-10 text-center text-7xl">Meet the Team!</h1>
                </div>

                <div className="lg:space-y-8 ">
                    <div className="grid w-screen grid-cols-2 pt-20 pl-5 pr-20 overflow-hidden rounded-lg shadow-md" ref={zoom1Ref}>
                        <Slide left when={zoom1InView}>
                            <h1 className="text-4xl italic text-black">Jack Sonoda
                                <p className="flex pt-5 text-lg not-italic">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quidem debitis modi iste voluptates amet, excepturi officia, harum laborum suscipit odio laboriosam rerum eum! Quas labore recusandae accusantium similique modi?
                                </p>
                                <p1 className="flex pt-5 text-lg not-italic">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, optio facilis accusantium perspiciatis harum ullam quaerat provident. Sapiente sequi nisi quidem dignissimos? Dignissimos eligendi illum deleniti! Optio esse accusamus id.
                                </p1>
                            </h1>
                            <div className="flex flex-col items-center justify-center">
                                <img className="ml-auto rounded-full shadow-xl lg:w-96 lg:h-96 lg:mr-40" src={JackS} alt="JacksIMG"></img> 
                            </div>
                        </Slide>
                    </div>
                    <div className="grid justify-end w-screen grid-cols-2 pt-5 pl-20 pr-5 overflow-hidden rounded-lg shadow-md" ref={zoom2Ref}>
                        <Slide right when={zoom2InView}>
                            <img className="rounded-full shadow-xl w-96 h-96"  alt="JacobsIMG"></img>
                            <h1 className="text-2xl italic text-black">Jacob Zinger
                                <p className="flex pt-5 text-lg not-italic">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quasi animi repellat, beatae voluptatibus modi itaque veritatis consequatur accusantium dolore doloribus vitae libero dicta tempora. Temporibus modi quas quod sapiente!
                                </p>
                                <p1 className="flex pt-5 text-lg not-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae assumenda voluptatum id sed soluta nisi eveniet natus quia alias, doloremque vitae laboriosam unde odit earum iure deserunt similique consequuntur provident!</p1>
                            </h1>
                        </Slide>
                    </div>
                    <div className="grid w-screen grid-cols-2 pt-5 pl-5 pr-20 overflow-hidden rounded-lg shadow-md" ref={zoom3Ref}>
                        <Slide left when={zoom3InView}>
                            <h1 className="text-xl italic text-black">Christian Digap
                                <p className="flex pt-5 text-lg not-italic text-black">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam rerum nostrum illo temporibus atque necessitatibus eos rem quidem aut fugit sed, illum veniam deleniti reiciendis ab tenetur blanditiis eius provident.
                                </p>
                                <p1 className="flex pt-5 text-lg not-italic text-black">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestiae voluptatum natus incidunt ea porro enim quaerat, id ab ducimus provident, iste rem deserunt unde aperiam in nam doloremque at!
                                </p1>
                            </h1>
                            <div className="flex flex-col items-center justify-center">
                                <img className="ml-auto rounded-full shadow-xl w-96 h-96" alt="ChristiansIMG"></img>
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