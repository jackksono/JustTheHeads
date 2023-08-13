import React, {useState} from 'react'

import { featuredProducts } from '../FeaturedProductStore'
import Product from './Product'
import { Link } from 'react-router-dom'

import { useInView } from 'react-intersection-observer'
import Flip from 'react-reveal/Flip'

const FeaturedProducts = () => {
  const [ index, setIndex ] = useState(0)

  const zoomOptions = {
    threshold: 0.3, // Adjust this threshold value to your desired visibility trigger point
    triggerOnce: false, // Set to true so that the animation only happens once
  };
  const { ref: zoom1Ref, inView: zoom1InView } = useInView(zoomOptions);

  return (
    <div className="overflow-auto overflow-x-hidden bg-orange-300 lg:pt-16 bg-allProducts bg-blend-overlay lg:py-5">
            <div 
              className="relative text-4xl text-center text-black lg:text-8xl"
              ref={zoom1Ref}>
                <Flip top when={zoom1InView} delay={500}>
                  <h1 className="text center font-CabinSketch">Featured Products!</h1>
                </Flip>
            </div>
            <div className='flex items-end justify-end py-4 pr-8 text-right'>
              <Link
              to={`/all-products`}
              className="lg:text-lg italic text-black text-[12px] lg:pr-20 justify-end hover:text-white"
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