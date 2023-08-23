import Lays from "../src/Images/ProductImages/1.png"
import SweetJalapeno from "../src/Images/ProductImages/2.png"
import Forno from "../src/Images/ProductImages/3.png"
import BBQ from "../src/Images/ProductImages/4.png"
import ComingSoon from "../src/Images/ProductImages/ComingSoon.jpg"



const PRODUCTS = [
    {
        id: "price_1NJ3xQFWsvLoj5JW4dTvpdpp",
        webId: "1NJ3xQFWsvLoj5JW4dTvpdpp",
        productName: "Lays (6)",
        price: 40,
        category: 'Chips',
        productImage: Lays,
        description: "Classic is boring, But it is classy",
        ingredients:"Salt, Pepper"
    },
    {
        id: "price_1NJ3xdFWsvLoj5JWbx09EPhW",
        webId: "1NJ3xdFWsvLoj5JWbx09EPhW",
        productName: "Sweet Jalapeno (6)",
        price: 20,
        category: 'Chips',
        productImage: SweetJalapeno,
        description: "This Sweet Jalapeno be so sooo sweet. Mhm mhm goodness"
    },
    {
        id: "price_1NJ3xsFWsvLoj5JWNkFx6rSm",
        webId: "1NJ3xsFWsvLoj5JWNkFx6rSm",
        productName: "Forno (6)",
        price: 50,
        category: 'Chips',
        productImage: Forno,
        description: "What is a Forno? Not sure if I've ever tried or even heard of this in my life"
    },
    {
        id: "price_1NJ3y3FWsvLoj5JWJWq4W5p8",
        webId: "1NJ3y3FWsvLoj5JWJWq4W5p8",
        productName: "BBQ (6)",
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
        category: 'Merchandise',
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