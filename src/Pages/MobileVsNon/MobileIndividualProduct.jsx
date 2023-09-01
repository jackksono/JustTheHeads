import React, {useContext}from 'react'
import { PRODUCTS } from '../../ProductsStore'
import { useParams,  Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const MobileIndividualProduct = (props) => {
    const { webId }  = useParams()
    const cart = useContext(ShopContext)
    const product = PRODUCTS.find((product) => product.webId === webId)
    const {  id, description } = product
    const productQuantity = cart.getProductQuantity(id)
    
  return (

    <div className='flex flex-col mx-5 justify-center w-auto p-2 h-auto items-center shadow-[0px_3px_15px_rgba(0,0,0,0.2)] rounded-[25px] bg-transparent'>
        <p className='flex text-xs font-bold text-color-text lg:text-2xl font-CabinSketch'>Description:</p>
        <h1 className="items-center justify-center p-2 text-xs text-left lg:text-lg text-color-text lg:p-5 font-CabinSketch">{description}</h1>
        
    
        {productQuantity > 0 ?
        <div className="flex flex-col items-center justify-center">
            <div className='flex flex-col w-full'>
            <h1 className='text-xs font-bold text-center lg:m-2 lg:text-sm text-color-text font-CabinSketch'>In Cart: {productQuantity}</h1>
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
                        className="text-center font-CabinSketch font-bold text-sm border border-1 border-black w-[75px] h-[15px]  z-10 rounded-md text-color-text"
                        value={productQuantity}
                        onChange={(e) => cart.updateCartItemCount(Number(e.target.value), id)}
                    ></input>
                    <button
                        className="z-10 pl-2 text-sm font-medium duration-100 cursor-pointer font-CabinSketch text-color-text"
                        onClick={() => cart.addOneToCart(id)}
                    >
                    +
                    </button>
                </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center py-5 space-x-2 text-center'> 
                    <Link to='/cart'>
                        <button className="flex font-bold justify-center text-center items-center z-10 text-xs  sm:text-sm border-2 font-CabinSketch border-black border-solid min-w-[100px] py-2 px-1 rounded-lg text-color-text bg-color-primary hover:text-color-text cursor-pointer">
                            Checkout
                        </button>
                    </Link>
                    <Link to='/all-products'>
                        <button className="flex justify-center font-bold text-center items-center z-10 text-xs  sm:text-sm border-2 font-CabinSketch border-black border-solid min-w-[100px] py-2 px-1 rounded-lg text-color-text bg-color-secondary hover:text-color-text cursor-pointer">
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

export default MobileIndividualProduct