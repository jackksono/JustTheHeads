import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PRODUCTS from "../../ProductsStore";
import { ShopContext } from "../../Context/ShopContext";
import CartItem from "./Cart-Item";



const CheckOut = () => {

    const navigate = useNavigate()

    const { cartItems, getTotal } = useContext(ShopContext)
    return (
       
           
        
        <div className="cart flex flex-col justify-center items-center  pt-48 text-lg">
            {getTotal() > 0 ?
            <div>
                <h1 className="text-center text-black text-3xl">Your Cart Items</h1>
            </div>
            : <></>}
            <div>

                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product}></CartItem>
                    }})}
            </div>
            {getTotal() > 0 ?

            <div className="">
                <p className="text-black"> Subtotal: ${getTotal()}</p>
                <button onClick={() => navigate('/all-products')} className="w-[200px] h-[50px] bg-black text-white rounded-[8px] m-[10px] cursor-pointer"> Continue Shopping </button>
                <button className="w-[200px] h-[50px] bg-black text-white rounded-[8px] m-[10px] cursor-pointer"> Checkout </button>
            </div>
            : <h1 className="text-black">Your Cart is Empty</h1>}
        </div>
    )
}

export default CheckOut