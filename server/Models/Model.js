const { connect } = require ('mongoose');
const mongoose = require('mongoose')
require("dotenv").config();

const MONGO_URI = process.env.MONGO_DB; //need connection
const options = {
    useUnifiedTopology: true,
  };
  
connect(MONGO_URI, options)
.then(() => console.log('Connected to MongoDB.'))
.catch(err => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type:String, required:true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const reviewSchema = new Schema({
    review: {type:String, required:true},
})

const productSchema = new mongoose.Schema({
    productName: String,
    // Other product-related fields
    ratings: [
        {
        userId: String, // Optional: If you want to track who rated
        ratingValue: Number,
        },
    ],
    });

const sessionSchema = new Schema({
    cookieId: { type: String, required: true, unique: true },
    createdAt: { type: Date, expires: 3000000000000000000, default: Date.now }
    });
    

const Users = mongoose.model('users', userSchema);
const Reviews = mongoose.model('reviews', reviewSchema);
const Products = mongoose.model('product', productSchema)
const Session = mongoose.model('session', sessionSchema)


module.exports = {
    Users,
    Reviews,
    Products,
    Session
}