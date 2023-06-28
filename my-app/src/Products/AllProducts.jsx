import React from "react";
import {PRODUCTS} from '../ProductsStore'
import Product from "./Product";



const AllProducts = () => {
    return (
        <div className="pt-44 overflow-auto">
            <div className="relative text-black text-center text-4xl">
                <h1 className="text center">All Products</h1>
            </div>
            <div className="grid grid-cols-3 w-full h-auto place-items-center">
                {PRODUCTS.map((product) => (
                <Product data={product}/>
            ))}
            </div>
        </div>
    )
}

export default AllProducts;