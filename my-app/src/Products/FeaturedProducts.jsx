import React from 'react'
import { featuredProducts } from '../FeaturedProductStore'
import Product from './Product'

const FeaturedProducts = () => {
  return (
    <div className="overflow-auto bg-orange-200  lg:pt-28">
            <div className="relative text-4xl text-center text-black lg:text-6xl">
                <h1 className="text center font-Ewert">Featured Products!</h1>
            </div>
            <div className="grid grid-cols-2 lg:pt-16 lg:w-full lg:h-auto lg:grid-cols-4 place-items-center">
                {featuredProducts.map((product) => (
                <Product data={product}/>
            ))}
            </div>
        </div>
  )
}

export default FeaturedProducts