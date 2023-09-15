import React, {useContext}from 'react'
import { PRODUCTS } from '../../ProductsStore'
import { useParams,  Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const DesktopIndividualProduct = () => {
    const { webId }  = useParams()
    const cart = useContext(ShopContext)
    const product = PRODUCTS.find((product) => product.webId === webId)
    const {  id, description } = product
    const productQuantity = cart.getProductQuantity(id)
    
  return (
    <div className='lg:w-[700px] 2xl:w-[1000px] mx-5 sm:mx-0 justify-center w-full p-2 h-auto lg:h-[400px] items-center shadow-[0px_3px_15px_rgba(0,0,0,0.2)] rounded-[25px]  lg:ml-20 lg:p-5 bg-white bg-opacity-40'>
        <p className='relative text-[15px] text-color-text lg:text-2xl font-CabinSketch font-bold'>Description:</p>
        <h1 className="items-center justify-center p-2 text-xs text-left lg:text-lg text-color-text lg:p-5 font-CabinSketch">{description}</h1>
        
    
        {productQuantity > 0 ?
        <div className="flex flex-col items-center justify-center">
            <h1 className='lg:m-2 lg:text-sm text-[10px] font-bold text-center text-color-text font-CabinSketch'>In Cart: {productQuantity}</h1>
            <div className="flex items-center justify-center text-sm text-center">
                <p className="flex justify-center pr-5 font-bold text-color-text font-CabinSketch">Quantity:</p>
                <div className="flex">
                    <button
                        className="z-10 pr-2 text-xs font-medium duration-100 cursor-pointer lg:text-xl font-CabinSketch text-color-text hover:text-white"
                        onClick={() => cart.deleteOneFromCart(id)}
                    >
                    -
                    </button>
                    <input
                        className="text-center font-CabinSketch font-bold lg:text-sm text-[12px] w-[75px] h-[15px] lg:w-[100px] lg:h-[25px] z-10 rounded-md text-color-text"
                        value={productQuantity}
                        onChange={(e) => cart.updateCartItemCount(Number(e.target.value), id)}
                    ></input>
                    <button
                        className="z-10 pl-2 text-xs font-medium duration-100 cursor-pointer font-CabinSketch lg:text-xl text-color-text hover:text-white"
                        onClick={() => cart.addOneToCart(id)}
                    >
                    +
                    </button>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center py-5 text-center sm:space-x-5'> 
                    <Link to='/cart'>
                        <button className="flex font-bold justify-center text-center items-center z-10 text-xs  sm:text-sm border-2 font-CabinSketch border-black border-solid min-w-[100px] py-[7px] sm:px-[10px] sm:py-[5px] rounded-lg text-color-text bg-color-primary hover:text-color-text cursor-pointer">
                            Checkout
                        </button>
                    </Link>
                    <Link to='/all-products'>
                        <button className="flex justify-center font-bold text-center items-center z-10 text-xs  sm:text-sm border-2 font-CabinSketch border-black border-solid min-w-[100px]  sm:px-[10px] sm:py-[5px] rounded-lg text-color-text bg-color-secondary hover:text-color-text cursor-pointer">
                            Continue Shopping
                        </button>
                    </Link>
                </div>
            </div>
                :
                <h2 className="flex justify-center text-xs text-center sm:text-sm ">
                    <button className="flex justify-center text-center font-bold items-center bg-color-primary  border-2 font-CabinSketch  border-black border-solid px-[5px] py-[2.5px] sm:min-w-[100px] sm:px-[10px] sm:py-[5px] rounded-lg text-color-text hover:bg-black hover:text-white cursor-pointer "
                        onClick={() => cart.addOneToCart(id)}
                        >
                        Add To Cart {productQuantity> 0 && <> ({productQuantity}) </>}
                    </button>
                </h2>
                } 
        </div>
  )
}

export default DesktopIndividualProduct