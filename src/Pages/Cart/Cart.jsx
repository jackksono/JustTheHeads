import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import CartItem from "./Cart-Item";
import Footer from "../Footer";

const CheckOut = () => {
    const navigate = useNavigate()
    const cart = useContext(ShopContext)
    
    const checkout = async () => {
        await fetch('http://localhost:4000/cart-checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url);
            }
        });
    }

    // const generateStripeCheckoutUrl = () => {
    //     const dynamicStripeUrl = "YOUR_DYNAMIC_STRIPE_URL";
    //     navigate(`/custom-stripe-checkout?url=${encodeURIComponent(dynamicStripeUrl)}`);
    //   };

    return (
        <div className="flex flex-col items-center justify-center text-lg bg-orange-200 pt-28 bg-allProducts bg-blend-overlay">
            {cart.getTotal() > 0 ?
            <div>
                <h1 className="text-3xl text-center text-black">Your Cart Items</h1>
            </div>
            : <></>} {/*Turnary to show Cart Items if cart has an item; otherwise will be blank*/}

            <div>
            {cart.items.map((product) => {
                    return <CartItem data={product}></CartItem>
                })}
            </div>

            {cart.getTotal() > 0 ?

            <div className="flex items-center justify-center w-auto h-auto">
                <p className="flex justify-center text-black lg:text-2xl "> Subtotal: ${cart.getTotal()}</p>
                <button 
                    onClick={() => navigate('/all-products')} 
                    className="lg:w-[200px] w-[120px] h-[50px] flex justify-center place-content-start items-center bg-orange-500 duration-100 text-black hover:bg-black hover:text-white rounded-[8px] m-2 lg:m-[10px] cursor-pointer"> 
                    Continue Shopping 
                </button>
                <button 
                    className="lg:w-[200px] h-[50px] bg-orange-500 text-black hover:bg-black hover:text-white duration-100 rounded-[8px] lg:m-[10px] w-[120px] cursor-pointer"
                    onClick={checkout}>
                    Checkout 
                </button>
            </div>
            : <h1 className="text-gray-700">Your Cart is Empty</h1>} {/*Turnary to display items in cart; otherwise will display msg*/}
            <div>
                <Footer/>
            </div>
        </div>
        
    )
}

export default CheckOut