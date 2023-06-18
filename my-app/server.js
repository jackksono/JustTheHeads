const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51NIFnYFWsvLoj5JWtXiz2nwW3Za0aaQKB68jqXWVz1tMy2t8hrAVavI0Jc2XJ3xg5v8AhqQjAVGp1NyBYIVvQIR0008E9iWxYD') //private key in second parameter


const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.post("/cart-checkout", async (req, res) => {


console.log("This is the request body:", req.body)


    const itemsCheckout = req.body.items;
    let lineItems = [];
    itemsCheckout.forEach((item) => {
    lineItems.push(
        {
            price: item.id,
            quantity: item.quantity
        }
    )
});
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    });
    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on Port 4000"))