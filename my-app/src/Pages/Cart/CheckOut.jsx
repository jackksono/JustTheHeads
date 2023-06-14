import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PRODUCTS from "../../ProductsStore";
import { ShopContext } from "../../Context/ShopContext";
import CartItem from "./Cart-Item";



const CheckOut = () => {

    const { cartItems, getTotal } = useContext(ShopContext)
   

    const checkoutRequest = async () => {
        await fetch('http://localhost:3000/cart-checkout', {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({items: cartItems})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url)
            }
        })
    }
    const navigate = useNavigate()



    return (
        <div className="cart flex flex-col justify-center items-center  pt-48 text-lg">
            {getTotal() > 0 ?
            <div>
                <h1 className="text-center text-black text-3xl">Your Cart Items</h1>
            </div>
            : <></>} {/*Turnary to show Cart Items if cart has an item; otherwise will be blank*/}
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
                <button 
                    className="w-[200px] h-[50px] bg-black text-white rounded-[8px] m-[10px] cursor-pointer"
                    onClick={checkoutRequest}
                > Checkout </button>
            </div>
            : <h1 className="text-black">Your Cart is Empty</h1>} {/*Turnary to display items in cart; otherwise will display msg*/}
        </div>
    )
}

export default CheckOut