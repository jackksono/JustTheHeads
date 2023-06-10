import React, { useContext } from "react";
import PRODUCTS from "../../Products";
import Product from "../Product";
import { ShopContext } from "../../Context/ShopContext";


const CheckOut = () => {

    const { cartItems } = useContext(ShopContext)
    return (
        <div>
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div>
                {" "}
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <cartItems data={product}/>
                    }})}
            </div>
        </div>
    )
}

export default CheckOut