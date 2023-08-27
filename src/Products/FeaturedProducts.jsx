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
    <div className="overflow-auto overflow-x-hidden bg-color-background lg:pt-16 bg-allProducts bg-blend-lighten lg:py-5">
            <div 
              className="relative text-4xl text-center text-colors-text lg:text-8xl"
              ref={zoom1Ref}>
              <Flip top when={zoom1InView} delay={500}>
                <h1 className="underline text-center font-bold font-CabinSketch underline-offset-[20%] decoration-color-primary">Featured Products!</h1>
              </Flip>
            </div>
            <div className='flex items-end justify-end py-2 pr-8 text-right'>
              <Link
              to={`/all-products`}
              className="lg:text-lg italic text-colors-text text-[12px] py-2 lg:pr-20 justify-end hover:text-white hover:decoration-2 hover:underline hover:underline-offset-4 hover:decoration-color-secondary"
              >See All Products...</Link>
            </div>
            <div className="grid grid-cols-2 pt-5 lg:w-full lg:h-auto lg:grid-cols-4 place-items-center">
                {featuredProducts.map((product) => (
                <Product data={product} index={index} setIndex={setIndex}/>
            ))}
            </div>
        </div>
  )
}

export default FeaturedProducts