import Lays from "../src/Images/ProductImages/1.png"
import SweetJalapeno from "../src/Images/ProductImages/2.png"
import Forno from "../src/Images/ProductImages/3.png"
import BBQ from "../src/Images/ProductImages/4.png"
import ComingSoon from "../src/Images/ProductImages/ComingSoon.jpg"



const PRODUCTS = [
    {
        id: "price_1NJ3xQFWsvLoj5JW4dTvpdpp",
        webId: "1NJ3xQFWsvLoj5JW4dTvpdpp",
        productName: "The Original Head",
        price: 40,
        category: 'Chips',
        productImage: Lays,
        description: "You hear the soft whoosh as waves are tossing themselves at the shore. Seagulls squawking overhead, the wind shifts and you get that wonderful ocean smell, salty, yet refreshing. Both distinct, yet oddly subtle, this mirrors our original Just The Heads Flavor! With an initial, salty crunch, followed by the sweet taste of freshly caught shrimp, this snack will give you the best of both worlds, and have you reaching for more.",
        ingredients:"Shrimp Heads, Sea Salt, Pepper, Granulated Onion Powder, Granulated Garlic Powder, Paprika, Less than 2% of Monosodium Glutamate and Sodium Nitrite, Sugar, Natural Flavors"
    },
    {
        id: "price_1NJ3xdFWsvLoj5JWbx09EPhW",
        webId: "1NJ3xdFWsvLoj5JWbx09EPhW",
        productName: "Spicy Spice",
        price: 20,
        category: 'Chips',
        productImage: SweetJalapeno,
        description: "This Sweet Jalapeno be so sooo sweet. Mhm mhm goodness",
        ingredients: "",
    },
    {
        id: "price_1NJ3xsFWsvLoj5JWNkFx6rSm",
        webId: "1NJ3xsFWsvLoj5JWNkFx6rSm",
        productName: "Soy Garlic",
        price: 50,
        category: 'Chips',
        productImage: Forno,
        description: "What is a Forno? Not sure if I've ever tried or even heard of this in my life"
    },
    {
        id: "price_1NJ3y3FWsvLoj5JWJWq4W5p8",
        webId: "1NJ3y3FWsvLoj5JWJWq4W5p8",
        productName: "Crazy Cajun",
        price: 10,
        category: 'Chips',
        productImage: BBQ,
        description: "The tasty goodness of campfire smoke straight to the throat. Enjoy with NEW BBQ chips"
    },
    {
        id: "price_1NJ3y3FWsvLoj5JWJWq4W5p7",
        webId: "1NJ3y3FWsvLoj5JWJWq4W5p7",
        productName: "Salted Egg Yolk (6)",
        price: 20,
        category: 'Chips',
        productImage: ComingSoon,
        description: "Americas favorite Asian snack flavor: The Salted Egg Yolk"
    },
    {
        id: "price_1NJ3y3FWsvLoj5JWJWq4W5p4",
        webId: "1NJ3y3FWsvLoj5JWJWq4W5p4",
        productName: "Crazy Cajun (6)",
        price: 10,
        category: 'Merchandise',
        productImage: ComingSoon,
        description: "The tasty goodness of campfire smoke straight to the throat. Enjoy with NEW BBQ chips"
    },
    {
        id: "price_1NJ3y3FWsvLoj5JWJWq4W5p3",
        webId: "1NJ3y3FWsvLoj5JWJWq4W5p3",
        productName: "Original (6)",
        price: 10,
        category: 'Merchandise',
        productImage: ComingSoon,
        description: "The tasty goodness of campfire smoke straight to the throat. Enjoy with NEW BBQ chips"
    }
]

const getProductData = (id) => {
    let productData = PRODUCTS.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " +id);
        return undefined;
    }
    return productData
}

export {PRODUCTS, getProductData}