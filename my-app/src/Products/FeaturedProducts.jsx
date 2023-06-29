import React from 'react'
import { featuredProducts } from '../FeaturedProductStore'
import Product from './Product'

const FeaturedProducts = () => {
  return (
    <div className="pt-28 overflow-auto">
            <div className="relative text-black text-center text-4xl">
                <h1 className="text center">Featured Products!</h1>
            </div>
            <div className="grid grid-cols-2 w-full h-auto place-items-center">
                {featuredProducts.map((product) => (
                <Product data={product}/>
            ))}
            </div>
        </div>
  )
}

export default FeaturedProducts