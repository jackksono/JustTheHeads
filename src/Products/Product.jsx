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

        const element = e.target.parentElement.querySelector('.blob-toggle');
        console.log(element)
        element.classList.remove('bg-blob1');
        element.classList.remove('bg-blob4');
        element.classList.remove('bg-blob2');
        element.classList.remove('bg-blob3');
       
        element.classList.add(`bg-${blobArray[index]}`);
        element.classList.add(`animate-blob`);
       
        const updatedIndex = index >= blobArray.length - 1 ? 0 : index + 1;
        
        setIndex(updatedIndex);

        
    }
    const blobToggleOff = (e) => {
        const element = e.target.parentElement.querySelector('.blob-toggle');
        let blobRemoveIndex;
        if(index === 0) blobRemoveIndex = blobArray.length - 1; 
        else blobRemoveIndex = index - 1; 
        element.classList.remove(`bg-${blobArray[blobRemoveIndex]}`)
        element.classList.remove(`animate-blob`)
    }

    const zoomOptions = {
        threshold: 0.125, 
        triggerOnce: false, 
    };
    const { ref: zoom1Ref, inView: zoom1InView } = useInView(zoomOptions);
    

    return (
        <>
            <div className="flex flex-col justify-center p-1 items-center w-[150px] lg:w-[300px] lg:h-[350px] lg:m-[100px] rounded-b-2xl" >
                <div className="blob-toggle absolute z-{-1} bg-center mb-32 lg:h-[500px] lg:w-[500px] duration-1000 opacity-90 "></div>
                    <Zoom top when={zoom1InView} duration={1000}>
                        <img 
                            ref={zoom1Ref}
                            src={productImage} 
                            alt="productImage"
                            className="flex lg:w-[300px] lg:h-[350px] h-[100px] w-[80px] cursor-pointer relative "
                            onClick={() => navigate(`/products/${webId}`)}
                            onMouseLeave={e => blobToggleOff(e)}
                            onMouseOver={e => blobToggle(e)}
                            loading="lazy">
                        </img>
                    </Zoom>
                    
                    <Link
                        to={`/products/${webId}`}
                        className="lg:text-lg italic text-[8px] pr-12 lg:pr-40 z-0 hover:text-white hover:underline hover:underline-offset-4 hover:decoration-color-secondary duration-100"
                        >More Info...
                    </Link>
                    
                    <h1 className="z-0 font-bold text-color-text lg:pt-3">
                        <p className=" font-CabinSketch font-bold lg:text-3xl text-[15px] p-0">{productName}</p>
                    </h1>
                    <p className="relative lg:mt-2 lg:text-lg text-[12px] text-center z-0 text-color-text">${price}</p>
                    
                    {productQuantity> 0 ? 
                    <>
                        <h1 className='lg:m-2 lg:text-sm text-[10px] font-bold text-center text-color-text z-10'>In Cart: {productQuantity}</h1>
                        <div className="flex items-center justify-center lg:text-sm text-[xs]">
                            <button className='cursor-pointer lg:text-xl text-[10px] pr-2 z-10 text-color-text hover:text-white duration-100' onClick={() => cart.deleteOneFromCart(id)}> - </button>
                            <input className='text-center lg:text-sm text-[12px] w-[75px] h-[15px] lg:w-[100px] lg:h-[25px] z-10 rounded-md text-color-text ' value={productQuantity} onChange={(e) => cart.updateCartItemCount(Number(e.target.value), id)}></input>
                            <button className='cursor-pointer lg:text-xl text-[10px] z-10 pl-2 text-color-text hover:text-white duration-100' onClick={() => cart.addOneToCart(id)}> + </button>
                        </div>
                        <button
                            onClick={() => navigate('/cart')}
                            className="text-[6px] mt-0 text-color-text w-[50px] lg:w-auto bg-color-secondary hover:bg-red-400 border-2 duration-100 border-black lg:text-sm lg:my-2 lg:py-1 rounded-2xl z-10 lg:px-8">
                            Checkout
                        </button>
                    </>
                    :
                    <button className=" z-0 text-[10px] font-CabinSketch font-bold w-[100px] lg:text-sm text-center border-2 border-color-secondary bg-color-primary rounded-lg text-color-text hover:bg-black hover:text-color-secondary cursor-pointer lg:min-w-[100px] lg:px-2 lg:py-1 lg:mt-2 duration-100"
                        onClick={(e) => {
                            cart.addOneToCart(id);
                            blobToggle(e)}}
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