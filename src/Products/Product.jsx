import React, { useContext, useEffect} from "react";

import { useNavigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

import { useInView } from 'react-intersection-observer';
import Zoom from 'react-reveal/Zoom'

const Product = (props) => {
    const navigate = useNavigate()

    const { id, productName, price, productImage, webId} = props.data
    const cart = useContext(ShopContext)
    const { index, setIndex } = props;
    const productQuantity = cart.getProductQuantity(id)
    
    const blobArray = ['blob1', 'blob2', 'blob3', 'blob4'];

    useEffect(() => {
        const storedIndex = localStorage.getItem("blobIndex");
        if (storedIndex) {
          setIndex(Number(storedIndex));
        }
      }, [setIndex]);
    
      useEffect(() => {
        localStorage.setItem("blobIndex", String(index));
      }, [index]);
   
    const blobToggle = (e) => {
        
        // console.log('mouse entered')
        // console.log(e.target.parentElement.querySelector('.blob-toggle').classList.toggle(`bg-${blobArray[index]}`)
        // console.log(index)
     
        const element = e.target.parentElement.querySelector('.blob-toggle');
        element.classList.remove('bg-blob2')
        element.classList.remove('bg-blob3')
        // console.log('index: ', index, blobArray[index]);
        element.classList.add(`bg-${blobArray[index]}`)
        element.classList.add(`animate-blob`)
        
        // console.log(element.className)
        // console.log(element.classList)
        const updatedIndex = index >= blobArray.length - 1 ? 0 : index + 1;
        // console.log('updatedIndex: ', updatedIndex);
        setIndex(updatedIndex);
        // const blob = document.querySelector('.blob-toggle');
        // blob.forEach((element) => {
        //     element.classList.toggle(`bg-${blobArray[index]}`);
        // })
        // blob.classList.toggle(`bg-blob1`);
        // console.log(index); 

        
    }
    const blobToggleOff = (e) => {
       
        const element = e.target.parentElement.querySelector('.blob-toggle');
        // console.log(element)
        let blobRemoveIndex;
        if(index === 0) blobRemoveIndex = blobArray.length - 1; //element.classList.remove(`bg-blob4`)
        else blobRemoveIndex = index - 1; //else element.classList.remove(`bg-${blobArray[index -1 ]}`)
        element.classList.remove(`bg-${blobArray[blobRemoveIndex]}`)
        element.classList.remove(`animate-blob`)
        // console.log('blob removed:',`bg-${blobArray[index -1 ]}`)
        // const blob = document.querySelectorAll('.blob-toggle');
        // console.log('mouse left')
        // blob.forEach((element) => {
        //     element.classList.toggle('bg-none');
        // })
    }

    const zoomOptions = {
        threshold: 0.15, 
        triggerOnce: false, 
    };
    const { ref: zoom1Ref, inView: zoom1InView } = useInView(zoomOptions);
    

    return (
        <>
            <div className="flex flex-col justify-center p-1 items-center w-[150px] lg:w-[300px] lg:h-[350px] lg:m-[100px] rounded-b-2xl" >
                <div className="blob-toggle absolute z-{-1} bg-center mb-32 lg:h-[550px] lg:w-[550px] duration-1000"
                ></div>
                
                    <Zoom top when={zoom1InView} duration={1000}>
                        <img 
                            ref={zoom1Ref}
                            src={productImage} 
                            alt="productImage"
                            className="flex lg:w-[300px] lg:h-[350px] h-[100px] w-[80px] cursor-pointer relative "
                            onClick={() => navigate(`/products/${webId}`)}
                            onMouseLeave={e => blobToggleOff(e)}
                            onMouseOver={e => blobToggle(e)}>
                        </img>
                    </Zoom>
                    

                    <Link
                    to={`/products/${webId}`}
                    className="lg:text-lg italic text-[8px] pr-12 lg:pr-40 z-0 hover:text-white duration-100"
                    >More Info...</Link>
                    
                
                        <p className="z-0 font-bold text-black lg:pt-3">
                            <b className=" font-CabinSketch font-bold lg:text-3xl text-[15px] p-0">{productName}</b>
                        </p>
                        <p className="relative lg:mt-2 lg:text-lg text-[12px] text-center z-0 text-black">${price}</p>
                        
                        {productQuantity> 0 ? 
                        <>
                            <h1 className='lg:m-2 lg:text-sm text-[10px] font-bold text-center text-black z-10'>In Cart: {productQuantity}</h1>
                            <div className="flex items-center justify-center lg:text-sm text-[xs]">
                                <button className='cursor-pointer lg:text-xl text-[10px] pr-2 z-10 text-black hover:text-white duration-100' onClick={() => cart.deleteOneFromCart(id)}> - </button>
                                <input className='text-center lg:text-sm text-[12px] w-[75px] h-[15px] lg:w-[100px] lg:h-[25px] z-10 rounded-md text-black ' value={productQuantity} onChange={(e) => cart.updateCartItemCount(Number(e.target.value), id)}></input>
                                <button className='cursor-pointer lg:text-xl text-[10px] z-10 pl-2 text-black hover:text-white duration-100' onClick={() => cart.addOneToCart(id)}> + </button>
                            </div>
                            <button
                            onClick={() => navigate('/checkout')}
                            className="text-[6px] mt-0 text-black w-[50px] lg:w-auto bg-red-300 hover:bg-red-600 border-2 duration-100 border-black lg:text-sm lg:my-2 lg:py-1 rounded-2xl z-10 lg:px-8">
                                Checkout
                            </button>
                        </>
                        :
                        <button className=" z-0 bg-transparent text-[10px] w-[100px] lg:text-sm text-center border-2 border-black rounded-lg text-black hover:bg-black hover:text-white cursor-pointer lg:min-w-[100px] lg:px-2 lg:py-1 lg:mt-2 duration-100 dur "
                            onClick={() => cart.addOneToCart(id)}
                            onMouseLeave={e => blobToggleOff(e)}
                            onMouseOver={e => blobToggle(e)}
                            >
                            Add To Cart {productQuantity> 0 && <> ({productQuantity}) </>}
                        </button>
                        }
            </div>
        </>
    )
}

export default Product