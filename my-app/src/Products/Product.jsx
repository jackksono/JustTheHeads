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
        <div className="flex flex-col justify-center items-center w-[300px] h-[350px] m-[100px] rounded-b-2xl">
            <div>
            <img 
                src={productImage} 
                alt="productImage"
                className="flex w-[300px] h-[350px] cursor-pointer"
                onClick={() => navigate(`/products/${webId}`)}>
                
            </img>
            <Link
            to={`/products/${webId}`}
            className="text-sm"
            >More Info...</Link>
            
            </div>
            <div className="m-[20px] text-center text-2xl">
                <p className="text-black font-bold">
                    <b className="font-bold">{productName}</b>
                </p>
                <p className="relative mt-2 text-center text-lg">${price}</p>
                
                {productQuantity> 0 ? 
                <>
                    <h1 className='counterHandler text-center text-sm text-black font-bold m-5'>In Cart: {productQuantity}</h1>
                    <div className="text-sm">
                        <button className='cursor-pointer' onClick={() => cart.deleteOneFromCart(id)}> - </button>
                        <input className='text-center ' value={productQuantity} onChange={(e) => cart.updateCartItemCount(Number(e.target.value), id)}></input>
                        <button className='cursor-pointer' onClick={() => cart.addOneToCart(id)}> + </button>
                    </div>
                </>
                :
                <button className="bg-transparent text-sm text-center items-center justify-center border-2 border-black border-solid min-w-[100px] px-[10px] py-[5px] rounded-lg text-black hover:bg-black hover:text-white cursor-pointer "
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