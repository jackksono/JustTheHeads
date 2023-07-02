import React, { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

const Product = (props) => {
    const navigate = useNavigate()

    const { id, productName, price, productImage, webId } = props.data
    const cart = useContext(ShopContext)

    const productQuantity = cart.getProductQuantity(id)

    return (
        <>
        <div className="flex flex-col justify-center items-center w-[150px] lg:w-[300px] lg:h-[350px] lg:m-[100px] p-2 rounded-b-2xl">
            <div>
            <img 
                src={productImage} 
                alt="productImage"
                className="flex lg:w-[300px] lg:h-[350px] h-[100px] w-[75px] cursor-pointer"
                onClick={() => navigate(`/products/${webId}`)}>
                
            </img>
            <Link
            to={`/products/${webId}`}
            className="lg:text-sm italic text-[6px]"
            >More Info...</Link>
            </div>
            <div className="text-center lg:m-2">
                <p className="font-bold text-black">
                    <b className="font-serif font-bold lg:text-xl text-[8px] ">{productName}</b>
                </p>
                <p className="relative lg:mt-2 lg:text-lg text-[6px] text-center">${price}</p>
                
                {productQuantity> 0 ? 
                <>
                    <h1 className='lg:m-2 lg:text-sm text-[10px]font-bold text-center text-black'>In Cart: {productQuantity}</h1>
                    <div className="flex items-center justify-center lg:text-sm text-[xs]">
                        <button className='cursor-pointer' onClick={() => cart.deleteOneFromCart(id)}> - </button>
                        <input className='text-center ' value={productQuantity} onChange={(e) => cart.updateCartItemCount(Number(e.target.value), id)}></input>
                        <button className='cursor-pointer' onClick={() => cart.addOneToCart(id)}> + </button>
                    </div>
                    <button
                    onClick={() => navigate('/checkout')}
                    className="text-sm text-black bg-red-300 border-2 border-black lg:w-full lg:mt-2 rounded-2xl">
                        Checkout
                    </button>
                </>
                :
                <button className="bg-transparent text-[6px] lg:text-sm text-center border-2 border-black rounded-lg text-black hover:bg-black hover:text-white cursor-pointer lg:min-w-[100px] w-[50px] lg:px-2 lg:py-1 lg:mt-2 "
                    onClick={() => cart.addOneToCart(id)}
                    >
                    Add To Cart {productQuantity> 0 && <> ({productQuantity}) </>}
                </button>
                }
            </div>
        </div>
        </>
    )
}

export default Product