import Lays from "../src/Images/ProductImages/1.png"
import SweetJalapeno from "../src/Images/ProductImages/2.png"
import Forno from "../src/Images/ProductImages/3.png"
import BBQ from "../src/Images/ProductImages/4.png"



const PRODUCTS = [
    {
        id: "price_1NJ3xQFWsvLoj5JW4dTvpdpp",
        webId: "1NJ3xQFWsvLoj5JW4dTvpdpp",
        productName: "Lays (6)",
        price: 40,
        productImage: Lays
    },
    {
        id: "price_1NJ3xdFWsvLoj5JWbx09EPhW",
        webId: "1NJ3xdFWsvLoj5JWbx09EPhW",
        productName: "Sweet Jalapeno (6)",
        price: 20,
        productImage: SweetJalapeno
    },
    {
        id: "price_1NJ3xsFWsvLoj5JWNkFx6rSm",
        webId: "1NJ3xsFWsvLoj5JWNkFx6rSm",
        productName: "Forno (6)",
        price: 50,
        productImage: Forno
    },
    {
        id: "price_1NJ3y3FWsvLoj5JWJWq4W5p8",
        webId: "1NJ3y3FWsvLoj5JWJWq4W5p8",
        productName: "BBQ (6)",
        price: 10,
        productImage: BBQ
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