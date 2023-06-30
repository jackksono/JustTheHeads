import React from 'react'
import { featuredProducts } from '../FeaturedProductStore'
import Product from './Product'

const FeaturedProducts = () => {
  return (
    <div className="pt-28 overflow-auto bg-orange-200">
            <div className="relative text-black text-center text-6xl">
                <h1 className="text center font-Ewert">Featured Products!</h1>
            </div>
            <div className="grid grid-cols-4 w-full h-auto place-items-center pt-16">
                {featuredProducts.map((product) => (
                <Product data={product}/>
            ))}
            </div>
        </div>
  )
}

export default FeaturedProducts