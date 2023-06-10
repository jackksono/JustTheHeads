import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const Product = (props) => {
    const { id, productName, price, productImage } = props.data
    const { addToCart } = useContext(ShopContext)
    return (
        <div className="flex flex-col justify-center items-center w-[300px] h-[350px] m-[100px] rounded-b-2xl">
            <img 
                src={productImage} 
                alt="productImage"
                className="flex w-[300px] h-[350px]">
            </img>
            <div className="m-[20px] text-center text-2xl">
                <p className="text-black font-bold">
                    <b className="font-bold">{productName}</b>
                </p>
                <p className="relative mt-2 text-center text-lg">${price}</p>
                <button className="bg-transparent text-sm text-center items-center justify-center border-2 border-black border-solid min-w-[100px] px-[10px] py-[5px] rounded-lg text-black hover:bg-black hover:text-white cursor-pointer "
                    onClick={() => addToCart(id)}
                    >
                    Add To Cart</button>
            </div>
        </div>
    )
}

export default Product