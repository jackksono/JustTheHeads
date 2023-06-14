const express = require('express');
let cors = require('cors');
const stripe = require('stripe')('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') //private key in second parameter


const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.post('/cart-checkout', async (req, res) => {


console.log(req.body)


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
    const session = await stripe.checkout.session.create({
        line_items: lineItems,
        mode: 'payment',
        success_URL: 'https://localhost:3000/success',
        cancel_URL: 'https://localhost:3000/cancel',
    });
    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on Port 4000"))
