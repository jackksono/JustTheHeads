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
    password: {type: String, required: true},
    points: {type: Number, required: false},
})

const reviewSchema = new Schema({
    review: {type:String, required:true},
})

const productSchema = new mongoose.Schema({
    webId: String,
    // Other product fields here
    comments: [
      {
        userId: String,
        ratingValue: Number,
        comment: String,
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  });

  const commentSchema = new mongoose.Schema({
    webId: String,
    userId: String,
    name: String,
    comment: String,
    inStock: Number,
    rating: Number,
    date: {
      type: Date,
      default: Date.now,
    },
  });

const sessionSchema = new Schema({
    cookieId: { type: String, required: true, unique: true },
    createdAt: { type: Date, expires: 3000000000000000000, default: Date.now }
    });
    

const Users = mongoose.model('users', userSchema);
const Reviews = mongoose.model('reviews', reviewSchema);
const Products = mongoose.model('product', productSchema);
const Comment = mongoose.model('Comment', commentSchema);
const Session = mongoose.model('session', sessionSchema)


module.exports = {
    Users,
    Reviews,
    Products,
    Session,
    Comment
}