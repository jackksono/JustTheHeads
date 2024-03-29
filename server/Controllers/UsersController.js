const models = require('../Models/Model');
const bcrypt = require('bcrypt');

const WorkFactor = 10;

const usersController = {
  getBcrypt: async (req, res, next) => {
    try {
      const pass = req.body.password;
      const hash = await bcrypt.hash(pass, WorkFactor);
      req.body.password = hash;
      console.log('hash is', hash);
      res.locals.newUser = req.body;
      next();
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error while using bcrypt' });
    }
  },

  createUser: async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      const newUser = await models.Users.create({ name, email, password });
      res.locals.newUser = newUser._id.toString();
      console.log('Successfully created');
      next();
    } catch (err) {
      console.error(err, 'Error while creating user');
      res.status(500).json({ error: 'An error occurred while creating user' });
    }
  },

  verifyUser: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const newUser = await models.Users.findOne({ email });
      
      if (newUser !== null) {
        const verified = await bcrypt.compare(password, newUser.password);
        if (verified) {
          res.locals.newUser = newUser;
          console.log("Authenticated");
          return next();
        } else {
          console.log("Invalid email/password");
          return res.status(401).json({ error: "Invalid email/password" });
        }
      } else {
        console.log("Invalid email/password");
        return res.status(401).json({ error: "Invalid email/password" });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'An error occurred while verifying user' });
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      const id = req.params.id;
      const deletedUser = await models.Users.findByIdAndDelete(id);

      if (!deletedUser) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.status(200).json(deletedUser);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while deleting the user' });
    }
  },
  getProfile: async (req, res, next) => {
    // console.log(res.locals.newUser)
    try {
      if (!res.locals.newUser) {
        return res.status(401).json({ error: 'Authentication required' });
      }
      const userName = res.locals.newUser;
      return next()
      
      
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while fetching the user profile' });
    }
  }
};

module.exports = usersController;
