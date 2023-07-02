import React from 'react'
import { featuredProducts } from '../FeaturedProductStore'
import Product from './Product'

const FeaturedProducts = () => {
  return (
    <div className="overflow-auto bg-orange-200 pt-28">
            <div className="relative text-6xl text-center text-black">
                <h1 className="text center font-Ewert">Featured Products!</h1>
            </div>
            <div className="grid w-full h-auto pt-16 md:grid-cols-4 sm:grid-cols-2 place-items-center">
                {featuredProducts.map((product) => (
                <Product data={product}/>
            ))}
            </div>
        </div>
  )
}

export default FeaturedProducts