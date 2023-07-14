import React, {useState} from 'react'
import { featuredProducts } from '../FeaturedProductStore'
import Product from './Product'
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {
  const [ index, setIndex ] = useState(0)

  return (
    <div className="overflow-auto bg-orange-200 lg:pt-16 bg-allProducts bg-blend-overlay">
            <div className="relative text-4xl text-center text-black lg:text-8xl">
                <h1 className="text center font-CabinSketch">Featured Products!</h1>
            </div>
            <div className='flex items-end justify-end py-4 pr-8 text-right'>
              <Link
              to={`/all-products`}
              className="lg:text-lg italic text-black text-[12px] lg:pr-20 justify-end"
              >See All Products...</Link>
            </div>
            <div className="grid grid-cols-2 lg:pt-16 lg:w-full lg:h-auto lg:grid-cols-4 place-items-center">
                {featuredProducts.map((product) => (
                <Product data={product} index={index} setIndex={setIndex}/>
            ))}
            </div>
        </div>
  )
}

export default FeaturedProducts