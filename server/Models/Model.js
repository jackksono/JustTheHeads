import { connect } from 'mongoose';
const mongoose = require('mongoose')
const MONGO_URI = ''; //need connection

const options = {
    useUnifiedTopology: true,
    dbName: 'Cluster0'
  };
  
  connect(MONGO_URI, options)
    .then(() => console.log('Connected to MongoDB.'))
    .catch(err => console.log(err));

    const Schema = mongoose.Schema;

    const userSchema = new Schema({
        firstName: {type: String, required: true},
        lastName: {type:String, required:true},
        email: {type: String, required: true, unique: false},
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
    const Products = mongoose.model('rating', productSchema)
    const Session = mongoose.model('session', sessionSchema)


    module.exports = {
        Users,
        Reviews,
        Products,
        Session
    }