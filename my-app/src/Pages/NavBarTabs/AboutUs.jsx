import React from "react";
import Footer from "../Footer";
const AboutUs = () => {

    return (
        <>
            <div className="pt-48">
                <div className="w-screen h-[200px]">
                    <h1 className="text-center text-black text-7xl font-YsabeauSC">Why Just The Heads?</h1>
                    <div className="grid grid-cols-2 p-20 pt-10 text-center text-black">
                        <p>You have chosen head. 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis qui libero consequatur id. Accusantium nostrum consequatur soluta nemo neque? Nemo, mollitia et voluptates assumenda voluptatum ut molestias perferendis provident architecto?
                        </p>
                        <img src="" alt="JustHeads"></img>
                    </div>
                </div>
            
                <div className="pt-20 text-orange-500">
                    <h1 className="pt-10 text-center text-7xl">Meet the Team!</h1>
                    </div>
                        <div className="grid w-screen grid-cols-2 pt-5 pl-5 pr-20 overflow-hidden rounded-lg shadow">
                            <h1 className="text-2xl italic text-black">Jack Sonoda
                                <p className="flex pt-5 text-lg not-italic">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quidem debitis modi iste voluptates amet, excepturi officia, harum laborum suscipit odio laboriosam rerum eum! Quas labore recusandae accusantium similique modi?
                                </p>
                                <p1 className="flex pt-5 text-lg not-italic">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, optio facilis accusantium perspiciatis harum ullam quaerat provident. Sapiente sequi nisi quidem dignissimos? Dignissimos eligendi illum deleniti! Optio esse accusamus id.
                                </p1>
                            </h1>
                            <img className="ml-auto rounded-full shadow-xl w-96 h-96"  alt="JacksIMG"></img> 
                        </div>
                        <div className="grid justify-end w-screen grid-cols-2 pt-5 pl-20 pr-5 overflow-hidden rounded-lg shadow">
                            <img className="rounded-full shadow-xl w-96 h-96"  alt="JacobsIMG"></img>
                            <h1 className="text-2xl italic text-black">Jacob Zinger
                                <p className="flex pt-5 text-lg not-italic">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quasi animi repellat, beatae voluptatibus modi itaque veritatis consequatur accusantium dolore doloribus vitae libero dicta tempora. Temporibus modi quas quod sapiente!
                                </p>
                                <p1 className="flex pt-5 text-lg not-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae assumenda voluptatum id sed soluta nisi eveniet natus quia alias, doloremque vitae laboriosam unde odit earum iure deserunt similique consequuntur provident!</p1>
                            </h1>
                        </div>
                        <div className="grid w-screen grid-cols-2 pt-5 pl-5 pr-20 overflow-hidden rounded-lg shadow">
                            
                            <h1 className="text-xl italic text-black">Christian Digap
                                <p className="flex pt-5 text-lg not-italic text-black">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam rerum nostrum illo temporibus atque necessitatibus eos rem quidem aut fugit sed, illum veniam deleniti reiciendis ab tenetur blanditiis eius provident.
                                </p>
                                <p1 className="flex pt-5 text-lg not-italic text-black">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestiae voluptatum natus incidunt ea porro enim quaerat, id ab ducimus provident, iste rem deserunt unde aperiam in nam doloremque at!
                                </p1>
                            </h1>
                            <img className="ml-auto rounded-full shadow-xl w-96 h-96" alt="ChristiansIMG"></img>
                        </div>
                </div>
            <footer class="bottom-0 ">
                <Footer></Footer>
            </footer>
        </>
    )
}

export default AboutUs