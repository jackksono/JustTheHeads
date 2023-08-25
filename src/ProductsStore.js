import ComingSoon from "../src/Images/ProductImages/ComingSoon.jpg"

const PRODUCTS = [
    {
        id: "price_1NJ3xQFWsvLoj5JW4dTvpdpp",
        webId: "1NJ3xQFWsvLoj5JW4dTvpdpp",
        productName: "The Original Head",
        price: 40,
        category: 'Chips',
        productImage: ComingSoon,
        description: "You hear the soft whoosh as waves are tossing themselves at the shore. Seagulls squawking overhead, the wind shifts and you get that wonderful ocean smell, salty, yet refreshing. Both distinct, yet oddly subtle, this mirrors our original Just The Heads Flavor! With an initial, salty crunch, followed by the sweet taste of freshly caught shrimp, this snack will give you the best of both worlds, and have you reaching for more.",
        ingredients:"Shrimp Heads, Sea Salt, Pepper, Granulated Onion Powder, Granulated Garlic Powder, Paprika, Dehydrated Garlic Slices, Dehydrated Onion, Less than 2% of Monosodium Glutamate, Brine (Sea salt, Less than 0.1% Sodium Nitrite), Sugar, Natural Flavors"
    },
    {
        id: "price_1NJ3xdFWsvLoj5JWbx09EPhW",
        webId: "1NJ3xdFWsvLoj5JWbx09EPhW",
        productName: "Spicy Spice",
        price: 20,
        category: 'Chips',
        productImage: ComingSoon,
        description: "Muy Caliente! Using peppers originating in Thailand, we have packed a major PUNCH👊🏼 with this flavor! For those who love PAIN🥵, and pushing their limits💪🏼, this is the flavor for you!",
        ingredients: "Shrimp Heads, Sea Salt, Pepper, Granulated Onion Powder, Granulated Garlic Powder, Paprika, Dehydrated Garlic Slices, Dehydrated Onion, Thai Chili Pepper, Bird's Eye Chili Powder, Less than 2% of Monosodium Glutamate, Brine (Sea salt, Less than 0.1% Sodium Nitrite), Sugar, Natural Flavors",
    },
    {
        id: "price_1NJ3xsFWsvLoj5JWNkFx6rSm",
        webId: "1NJ3xsFWsvLoj5JWNkFx6rSm",
        productName: "Soy Garlic",
        price: 50,
        category: 'Chips',
        productImage: ComingSoon,
        description: "",
        ingredients:"Shrimp Heads, Sea Salt, Pepper, Granulated Onion Powder, Granulated Garlic Powder, Paprika, Dehydrated Garlic Slices, Dehydrated Onion, Soy Powder, Less than 2% of Monosodium Glutamate, Brine (Sea salt, Less than 0.1% Sodium Nitrite), Sugar, Natural Flavors"
    },
    {
        id: "price_1NJ3y3FWsvLoj5JWJWq4W5p8",
        webId: "1NJ3y3FWsvLoj5JWJWq4W5p8",
        productName: "Crazy Cajun",
        price: 10,
        category: 'Chips',
        productImage: ComingSoon,
        description: " Cowabunga! Get ready to take your taste buds on a wild ride through the streets of New Orleans! Our Cajun flavor has been tirelessly honed to find the perfect blend of spices. For those daring connoisseurs who love blasts of flavors, this ones for you!",
        ingredients: "Shrimp Heads, Sea Salt, Pepper, Granulated Onion Powder, Granulated Garlic Powder, Paprika, Dehydrated Garlic Slices, Dehydrated Onion, Oregano, Thyme, Cayenne Pepper, Old Bay Seasoning, Less than 2% of Monosodium Glutamate, Brine (Sea salt, Less than 0.1% Sodium Nitrite), Sugar, Natural Flavors"
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
        productName: "Just The Heads T-Shirt",
        price: 10,
        category: 'Merchandise',
        productImage: ComingSoon,
        description: "A beautiful T-Shirt"
    },
    {
        id: "price_1NJ3y3FWsvLoj5JWJWq4W5p3",
        webId: "1NJ3y3FWsvLoj5JWJWq4W5p3",
        productName: "Just The Heads Hoodie",
        price: 10,
        category: 'Merchandise',
        productImage: ComingSoon,
        description: "A beautiful hoodie!"
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