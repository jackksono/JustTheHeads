import React from "react";
import PRODUCTS from '../Products'
import Product from "./Product";

const AllProducts = () => {
    return (
        <div className="pt-44">
            <div className="relative text-black text-center text-4xl">
                <h1>All Products</h1>
            </div>
            <div className="text-black">
                {" "}
                {PRODUCTS.map((product) => (
                <Product data={product}/>
            ))}
            </div>
        </div>
    )
}

export default AllProducts;