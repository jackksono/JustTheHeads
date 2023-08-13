import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { getProductData } from "../../ProductsStore";


const CartItem =(props) => {
    const { id } = props.data
    const cart = useContext(ShopContext)
    const productQuantity = cart.getProductQuantity(id)
    const productData = getProductData(id)


    return (
        <div className="flex lg:w-[700px] w-[350px] lg:h-[250px] items-center shadow-[0px_3px_15px_rgba(0,0,0,0.2)] rounded-[25px] m-[30px]"> 
            <img 
                src={productData.productImage} 
                alt="productImage"
                className="w-[100px] h-auto lg:w-[200px]">
            </img>
            <div className="items-center w-full text-center text-black">
                <p>
                    <b>{productData.productName}</b>
                </p>
                <p>${productData.price}</p>
                <div className="m-5 font-bold text-center">
                    <button className="text-sm cursor-pointer" onClick={() => cart.deleteOneFromCart(id)}> - </button>
                    <input className='text-center w-[100px] ' value={productQuantity} onChange={(e) => cart.updateCartItemCount(Number(e.target.value), id)}></input>
                    <button className="cursor-pointer" onClick={() => cart.addOneToCart(id)}> + </button>
                    <div className="pt-5">
                        <button  
                            className="p-2 text-sm text-center text-white bg-red-500 cursor-pointer rounded-2xl hover:text-black hover:bg-white" 
                            onClick={() => cart.deleteFromCart(id)}>
                            Remove From Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

   
   
export default CartItem;

