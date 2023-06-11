import React, { useContext } from "react";
import PRODUCTS from "../../Products";
import { ShopContext } from "../../Context/ShopContext";
import CartItem from "./Cart-Item";


const CheckOut = () => {

    const { cartItems } = useContext(ShopContext)
    return (
        <div className="flex flex-col justify-center items-center  pt-44 text-lg">
            <div>
                <h1 className="text-center text-black text-2xl">Your Cart Items</h1>
            </div>
            <div className="">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product}></CartItem>
                    }})}
            </div>
        </div>
    )
}

export default CheckOut