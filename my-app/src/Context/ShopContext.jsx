import React, {useState, createContext } from "react";
import { getProductData } from "../ProductsStore";

export const ShopContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    deleteFromCart: () => {},
    deleteOneFromCart: () => {},
    getTotal: () => {},
    getCartTotal: () => {}
});




export const ShopContextProvider = (props) => {

    const [ cartItems, setCartItems ] = useState([]);

    const getProductQuantity = (id) => {
        const quantity = cartItems.find(product => product.id === id)?.quantity;

        if (quantity === undefined) {
            return 0
        }
        return quantity
    }

    
    const deleteFromCart = (id) => {
        setCartItems(
            cartItems => 
            cartItems.filter(currentProduct => {
                return currentProduct.id !== id
            })
        )
    }

    const deleteOneFromCart = (id) => {
        const quantity = getProductQuantity(id);

        if (quantity === 1) {
            deleteFromCart(id)
        } else {
            setCartItems(
                cartItems.map(
                    product => 
                    product.id === id //condition
                    ? {...product, quantity: product.quantity - 1} //statement is true
                    : product //statement is false
                )
            )
        }
    }


    const addOneToCart = (id) => {
        const quantity = getProductQuantity(id);

        if (quantity === 0) {
            setCartItems(
                [
                    ...cartItems,
                    {
                        id: id, 
                        quantity: 1
                    }
                ]
            )
        } else {
            setCartItems(
                cartItems.map(
                    product => 
                    product.id === id//condition
                    ? {...product, quantity: product.quantity + 1} //statement is true
                    : product //statement is false
                )
            )
        }
    }



    const updateCartItemCount = (newAmount, id) => {
        const quantity = getProductQuantity(id)
            setCartItems(
                cartItems.map(
                    product => 
                    product.id === id //condition
                    ? {...product, quantity: newAmount} //statement is true
                    : product //statement is false
                )
            )
    }

    const getTotal = () => {
        let totalAmount = 0;
        cartItems.map((item) => {
            const productData = getProductData(item.id);
            totalAmount += (productData.price * item.quantity)
            console.log(totalAmount)
        })
        return totalAmount
    }
    

    const contextValue = {
        items: cartItems,
        setCartItems,
        addOneToCart,
        deleteOneFromCart,
        updateCartItemCount,
        getTotal,
        deleteFromCart,
        getProductQuantity
    }

    console.log(cartItems)

    return <ShopContext.Provider value={contextValue}>
                {props.children}
            </ShopContext.Provider>
}