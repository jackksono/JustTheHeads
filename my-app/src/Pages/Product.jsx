import React from "react";

const Product = (props) => {
    const { id, productName, price, productImage } = props.data

    return (
        <div className="flex flex-col justify-center items-center w-[300px] h-[350px] m-[100px] rounded-b-2xl">
            <img 
                src={productImage} 
                alt="productImage"
                className="w-[400px]">
            </img>
            <div className="mt-[100] text-center text-3xl">
                <p className="">
                    <b>{productName}</b>
                </p>
                <p className="relative mt-2 text-center text-xl">${price}</p>
            </div>
        </div>
    )
}

export default Product