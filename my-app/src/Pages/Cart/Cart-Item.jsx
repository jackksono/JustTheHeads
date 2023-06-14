import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { Button } from "react-bootstrap"
import { getProductData } from "../../ProductsStore";


const CartItem =(props) => {
    const { id } = props.data
    const cart = useContext(ShopContext)
    const productQuantity = cart.getProductQuantity(id)
    const productData = getProductData(id)


    return (
        <div className="flex w-[700px] h-[250px] items-center shadow-[0px_3px_15px_rgba(0,0,0,0.2)] rounded-[25px] m-[30px]"> 
            <img 
                src={productData.productImage} 
                alt="productImage"
                className="w-[200px]">
            </img>
            <div className="text-black text-center items-center w-full">
                <p>
                    <b>{productData.productName}</b>
                </p>
                <p>${productData.price}</p>
                <div className="text-center font-bold m-5">
                    <button className="cursor-pointer" onClick={() => cart.deleteOneFromCart(id)}> - </button>
                    <input className='text-center ' value={productQuantity} onChange={(e) => cart.updateCartItemCount(Number(e.target.value), id)}></input>
                    <button className="cursor-pointer" onClick={() => cart.addOneToCart(id)}> + </button>
                    <div className="pt-5">
                        <Button variant="danger" 
                            className="text-center text-sm cursor-pointer text-white rounded-2xl bg-red-500 p-2 hover:text-black hover:bg-white" 
                            onClick={() => cart.deleteFromCart(id)}>
                            Remove From Cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

   
   
export default CartItem;

