import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';


const CartItem =(props) => {
    const { id, productName, price, productImage } = props.data
    const { cartItems } = useContext(ShopContext)


    return (
        <div className='w-[700px] h-[250px] flex items-center shadow-[0_0px_3px_15px_rgba(0,0,0,0.3)] rounded-[25px] m-[30px] '> 
        <img 
            src={productImage} 
            alt='productImage'
            className='w-[200px]'>
        </img>
            <div>
                <b className='text-bold w-full text-{30px}'>{productName}</b>
                <p>${price}</p>
                <div className=''>
                    <button> - </button>
                    <input value={cartItems[id]}></input>
                    <button> + </button>
                </div>
            </div>
        </div>
    )
}

   
   
export default CartItem;

