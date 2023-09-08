const { model } = require('mongoose');
const models = require('../Models/Model')
const bcrypt = require('bcrypt')

const WorkFactor = 10
const usersController = {
    getBcrypt: (req, res, next) => {
        const pass = req.body.password;
        bcrypt.hash(pass, WorkFactor)
            .then((hash) => {
                req.body.password = hash
                console.log('hash is', hash)
                res.locals.newUser = req.body
                return next();
            })
            .catch((err) => {
                console.log(err);
                res.sendStatus(500).json({err: "Error while using bcrypt"})
              })
    },
    createUser : (req, res, next) => {
        const { name, email, password } = req.body;
        models.Users.create({ name, email, password })
            .then((newUser) => {
                res.locals.newUser = newUser._id.toString()
                console.log('Succesfully created')
                return next()
            })
            .catch ((err) => {
              console.log(err, 'Error while creating user');
              return res.status(500).json({ error: 'An error occured while creating user'})  
            })
    },
    verifyUser : (req, res, next) => {
        const { email, password } = req.body;
        // console.log(req.body);
        models.Users.findOne({email})
        .then((newUser) => {
          if (newUser !== null) {
            bcrypt.compare(password, newUser.password)
            .then((verified) => {
              if (verified) {
                res.locals.newUser = newUser;
                console.log("Authenticated");
                return next()
              } else {
                console.log("Invalid email/password");
              }
            })
          .catch((err) => {
            console.log(err)
            return res.status(500).json("Could not find user")
          })
          } else {
            console.log("Invalid email/password");
            res.sendStatus(500).json("Error in verifying user")
          }
        })
      },
    deleteUser: (req, res, next) => {
    const id = req.params.id; 
    console.log(id);
    
    models.Users.findByIdAndDelete(id)
        .then((deletedUser) => {
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(deletedUser);
        })
        .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while deleting the user' });
        });
    },
      
}

module.exports = usersController