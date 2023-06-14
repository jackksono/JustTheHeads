import React, {useState, createContext } from "react";
import PRODUCTS from "../ProductsStore";

export const ShopContext = createContext(null);




export const ShopContextProvider = (props) => {

    const [ cartItems, setCartItems ] = useState([]);

    const getProductQuantity = () => {
        const quantity = cartItems.find(product => product === product.id)?.quantity;

        if (quantity === undefined) {
            return 0
        }
        return quantity
    }

    
    const deleteFromCart = (itemID) => {
        setCartItems(
            cartItems => 
            cartItems.filter(currentProduct => {
                return currentProduct.id !== itemID
            })
        )
    }

    const deleteOneFromCart = (itemID) => {
        const quantity = getProductQuantity(itemID);

        if (quantity === 0) {
            setCartItems(
                [
                    ...cartItems,
                    {
                        id: itemID, 
                        quantity: 1
                    }
                ]
            )
        } else {
            setCartItems(
                cartItems.map(
                    product => 
                    product.id === itemID //condition
                    ? {...product, quantity: product.quantity - 1} //statement is true
                    : product //statement is false
                )
            )
        }
    }


    const addToCart = (itemID) => {
        const quantity = getProductQuantity(itemID);

        if (quantity === 0) {
            setCartItems(
                [
                    ...cartItems,
                    {
                        id: itemID, 
                        quantity: 1
                    }
                ]
            )
        } else {
            setCartItems(
                cartItems.map(
                    product => 
                    product.id === itemID //condition
                    ? {...product, quantity: product.quantity + 1} //statement is true
                    : product //statement is false
                )
            )
        }
    }



    const updateCartItemCount = (newAmount, itemID) => {
        const quantity = getProductQuantity(itemID)

        if (quantity === 1) {
            deleteFromCart(itemID);
        } else {
            setCartItems(
                cartItems.map(
                    product => 
                    product.id === itemID //condition
                    ? {...product, quantity: product.quantity - 1} //statement is true
                    : product //statement is false
                )
            )
        }
    }

    const getTotal = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount;
    }

    const getCartTotal = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalAmount += cartItems[item]
            }
        }
        return totalAmount;
    }

    const contextValue = {
        cartItems,
        setCartItems,
        addToCart,
        deleteOneFromCart,
        updateCartItemCount,
        getTotal,
        deleteFromCart,
        getCartTotal,
        getProductQuantity
    }

    console.log(cartItems)

    return <ShopContext.Provider value={contextValue}>
                {props.children}
            </ShopContext.Provider>
}