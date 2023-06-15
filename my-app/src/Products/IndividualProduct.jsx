import React, { useContext } from 'react'
import { PRODUCTS } from '../ProductsStore'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const IndividualProduct = (props) => {
    const { webId, id }  = useParams()
    const product = PRODUCTS.find((product) => product.webId === webId)
    const { productImage, productName } = product
    
    const cart = useContext(ShopContext)
    const productQuantity = cart.getProductQuantity(id)

  return (
    <div className='pt-48'>
        <h1 className='text-4xl text-black text-center'>{productName}</h1>
        <div className='flex flex-cols p-8'>
            <img 
                src={productImage}
                alt='productImage'
                className='h-[800px] w-[600px]'>
            </img>
            <div className='flex w-[700px] h-[250px] items-center shadow-[0px_3px_15px_rgba(0,0,0,0.2)] rounded-[25px] m-[30px] p-5'>
                <p className='relative pb-44 text-black '>Description:</p>
                <p1 className="flex pb-24 text-black">This is about the product</p1>
            </div>
            <div className="text-sm">
                        <button className='cursor-pointer' onClick={() => cart.deleteOneFromCart(id)}> - </button>
                        <input className='text-center ' value={productQuantity} onChange={(e) => cart.updateCartItemCount(Number(e.target.value), id)}></input>
                        <button className='cursor-pointer' onClick={() => cart.addOneToCart(id)}> + </button>
            </div>
        </div>
    </div>
  )
}

export default IndividualProduct