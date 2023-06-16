import React, { useContext } from 'react'
import { PRODUCTS } from '../ProductsStore'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const IndividualProduct = (props) => {
    const { webId }  = useParams()
    const cart = useContext(ShopContext)
    const product = PRODUCTS.find((product) => product.webId === webId)
    const { productImage, productName, id, description } = product
    const productQuantity = cart.getProductQuantity(id)

    

    
    
    

  return (
    <div className='pt-48'>
        <h1 className='text-4xl text-black text-center'>{productName}</h1>
        <div className='flex p-8'>
            <img 
                src={productImage}
                alt='productImage'
                className='h-[800px] w-[600px]'>
            </img>
            <div className='w-[700px] h-[250px] items-center shadow-[0px_3px_15px_rgba(0,0,0,0.2)] rounded-[25px] m-[30px] p-5'>
                <p className='relative text-black '>Description:</p>
                <h1 className="text-black items-center justify-center text-center p-5">{description}</h1>

                {productQuantity > 0 ?
                
                <h2 className="flex justify-center text-center text-sm pt-20">
                    <button className='cursor-pointer' onClick={() => cart.deleteOneFromCart(id)}> - </button>
                    <input className='text-center ' value={productQuantity} onChange={(e) => cart.updateCartItemCount(Number(e.target.value), id)}></input>
                    <button className='cursor-pointer' onClick={() => cart.addOneToCart(id)}> + </button>
                </h2>
                :
                <h2 className="flex justify-center text-center text-sm pt-20">
                    <button className="flex justify-center text-center items-center bg-transparent text-sm border-2 border-black border-solid min-w-[100px] px-[10px] py-[5px] rounded-lg text-black hover:bg-black hover:text-white cursor-pointer "
                        onClick={() => cart.addOneToCart(id)}
                        >
                        Add To Cart {productQuantity> 0 && <> ({productQuantity}) </>}
                    </button>
                </h2>
                }
            </div>
            
        </div>
        
    </div>
  )
}

export default IndividualProduct