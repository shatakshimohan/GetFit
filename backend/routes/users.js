const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => { //GET endpoint returns all usernames
  User.find()
    .then(users => res.json(users)) //the user info is converted in json format
    .catch(err => res.status(400).json('Error: ' + err)); //in case of error
});

router.route('/add').post((req, res) => { //POST endpoint adds username
  const username = req.body.username; //gets the new username

  const newUser = new User({username}); //new user instance created 

  newUser.save() //new username gets saved
    .then(() => res.json('User added!')) 
    .catch(err => res.status(400).json('Error: ' + err)); //in case of error
});

module.exports = router;