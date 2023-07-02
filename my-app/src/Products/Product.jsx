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
        <div className="flex flex-col justify-center items-center md:w-[300px] md:h-[350px] md:m-[100px] sm:w-full sm:p-2 rounded-b-2xl">
            <div>
            <img 
                src={productImage} 
                alt="productImage"
                className="flex md:w-[300px] md:h-[350px] sm:h-[25px] sm:w-[15px] cursor-pointer"
                onClick={() => navigate(`/products/${webId}`)}>
                
            </img>
            <Link
            to={`/products/${webId}`}
            className="text-sm italic"
            >More Info...</Link>
            
            </div>
            <div className="m-2 text-center">
                <p className="font-bold text-black">
                    <b className="font-serif font-bold ">{productName}</b>
                </p>
                <p className="relative mt-2 text-lg text-center">${price}</p>
                
                {productQuantity> 0 ? 
                <>
                    <h1 className='m-2 text-sm font-bold text-center text-black'>In Cart: {productQuantity}</h1>
                    <div className="flex items-center justify-center text-sm">
                        <button className='cursor-pointer' onClick={() => cart.deleteOneFromCart(id)}> - </button>
                        <input className='text-center ' value={productQuantity} onChange={(e) => cart.updateCartItemCount(Number(e.target.value), id)}></input>
                        <button className='cursor-pointer' onClick={() => cart.addOneToCart(id)}> + </button>
                    </div>
                    <button
                    onClick={() => navigate('/checkout')}
                    className="w-full mt-2 text-sm text-black bg-red-300 border-2 border-black rounded-2xl">
                        Checkout
                    </button>
                </>
                :
                <button className="bg-transparent text-sm text-center border-2 border-black rounded-lg text-black hover:bg-black hover:text-white cursor-pointer min-w-[100px] px-2 py-1 mt-2 "
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