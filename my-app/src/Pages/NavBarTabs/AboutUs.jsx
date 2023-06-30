import React from "react";
import Footer from "../Footer";
const AboutUs = () => {

    return (
        <>
            <div className="pt-24">
            
        <div className="pt-20  text-orange-500">
            <div className="text-7xl text-center pt-10">Meet the Team!</div>
        </div>
                <div className="pl-5 pr-20 grid grid-cols-2 w-screen rounded-lg overflow-hidden shadow pt-5">
                    <h1 className="text-2xl italic text-black">Jack Sonoda
                        <p className="flex text-sm not-italic pt-5">
                        Hello - my name is Jack Sonoda. Previously, I was a scientist working in the research and development of new and upcoming 
                        lateral flow diagnostic assays and made the change to learn and become the software engineer I am today. I have a lot of 
                        experience in all aspects of the diagnostic field since my previous company was very small. Fun fact,  most of Covid-19 
                        tests on the markets and the ones that were sent out by the government for free were created by me and a small team! I have 
                        also had a huge contribution and involvement across many other projects involving the research and development of new and 
                        upcoming diagnostic assays.

                        <p1 className="flex not-italic text-sm p-6 text-black">
                        Now, I am a full stack software engineer who likes to code applications and solve problems on a daily basis. 
                        I am extremely passionate about TypeScript, React, Redux, Express, SQL, and noSQL databases when coding out large or 
                        small scale applications.  I recently did a sponsored tech-talk by JEENY and Bractlet that was focused on the topic of 
                        React Hooks and why I prefer them over class components. In my free time outside of coding, I enjoy many activities and hobbies such 
                        as hiking, going to the beach, and competitive online games with friends. Most recently, I had the opportunity to work on an open source 
                        project called Swell which is an electron desktop application used to test endpoints over multiple streaming technologies.
                        </p1>
                        </p>
                    </h1>
                    <img className="rounded-full w-96 h-96 shadow-xl ml-auto"  alt="JacksIMG"></img> 
                </div>
                <div className="pl-20 pr-5 justify-end grid grid-cols-2 w-screen rounded-lg overflow-hidden shadow pt-5">
                    <img className="rounded-full w-96 h-96 shadow-xl"  alt="JacobsIMG"></img>
                    <h1 className="text-2xl italic text-black">Jacob Zinger
                        <p className="flex not-italic text-lg pt-5">
                        Filler filler filler
                        </p>
                    </h1>
                </div>
                <div className="pl-5 pr-20 grid grid-cols-2 w-screen rounded-lg overflow-hidden shadow pt-5">
                    
                    <h1 className="text-xl italic text-black">Christian Digap
                        <p className="flex not-italic text-lg pt-5 text-black">
                        Filler
                        </p>
                        <p1 className="flex not-italic text-lg pt-5 text-black">
                        Filler
                        </p1>
                    </h1>
                    <img className="rounded-full w-96 h-96 shadow-xl ml-auto" alt="ChristiansIMG"></img>
                </div>
            </div>
            <footer class="pt-80 bottom-0 ">
                <Footer></Footer>
            </footer>
        </>
    )
}

export default AboutUs