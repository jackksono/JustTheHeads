const express = require('express')


const usersController = require('../Controllers/UsersController')

const router = express.Router()

router.post('/signup', usersController.getBcrypt, usersController.createUser, (req, res) => {
    if (res.locals.newUser) {
      // User successfully created
      res.status(200).json( res.locals.newUser);
    } else {
      // User creation failed
      res.status(400).json({ error: 'Unable to create user' });
    }
  });

  router.post('/delete/:id', usersController.deleteUser,  (req, res ) => { //deletes a user
    res.status(200).json(res.locals.deletedUser);
  });

  router.post('/verify', usersController.verifyUser, (req, res) => {
    if (res.locals.newUser) {
      res.status(200).json(res.locals.newUser)
    } else {
      res.status(401).json({error: 'Authentication failed'})
    }
  })

  router.get('/profile', usersController.getProfile, (req, res) => {
    res.status(200).json(res.locals.newUser)
  })

module.exports = router