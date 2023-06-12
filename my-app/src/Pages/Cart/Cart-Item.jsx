import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { Button } from 'react-bootstrap'


const CartItem =(props) => {
    const { id, productName, price, productImage } = props.data
    const { cartItems, addToCart, removeFromCart, updateCartItemCount, deleteFromCart } = useContext(ShopContext)


    return (
        <div className='cartItem w-[700px] h-[250px] flex items-center shadow-[0px_3px_15px_rgba(0,0,0,0.2)] rounded-[25px] m-[30px]'> 
        <img 
            src={productImage} 
            alt='productImage'
            className='w-[200px]'>
        </img>
            <div className='description text-black text-center items-center w-full'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
                <div className='counterHandler text-center font-bold m-5'>
                    <button className='cursor-pointer' onClick={() => removeFromCart(id)}> - </button>
                    <input className='text-center ' value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}></input>
                    <button className='cursor-pointer' onClick={() => addToCart(id)}> + </button>
                    {/* <div className='pt-5'>
                        <Button variant='danger' className='text-center text-sm cursor-pointer text-white rounded-2xl bg-red-500 p-2' onClick={() => deleteFromCart(id)}>Remove From Cart</Button>
                    </div> */}
                    
                </div>
            </div>
        </div>
    )
}

   
   
export default CartItem;

