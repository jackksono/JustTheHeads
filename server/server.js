const express = require('express');
const cors = require('cors');
require("dotenv").config() //requires install package of dotenv 
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY) 


const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());


app.post("/cart-checkout", async (req, res) => {

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
    // discounts: [{
    //     coupon: '{{coupon}}',
    //   }],
    success_url: 'https://jackksono.github.io/success',
    cancel_url: 'https://jackksono.github.io/cancel',
    });
res.send(JSON.stringify({
    url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on Port 4000"))
