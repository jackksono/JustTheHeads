const express = require('express');
const cors = require('cors');
require("dotenv").config(); //used for getting dotenv 
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY) 

const path = require('path')
const app = express();

const userRouter = require('../server/Routes/UsersRoute')

app.use(cors());

app.use(express.json());
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/users', userRouter)

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

app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    // discounts: [{
    //     coupon: '{{coupon}}',
    //   }],
    success_url: 'https://localhost:3000/success',
    cancel_url: 'https://localhost:3000/cancel',
    });
res.send(JSON.stringify({
    url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on Port 4000"))
