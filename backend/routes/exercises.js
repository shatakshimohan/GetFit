const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => { //GET endpoint returns all exercises
  Exercise.find()
    .then(exercises => res.json(exercises)) //the user info is converted in json format
    .catch(err => res.status(400).json('Error: ' + err)); //in case of error
});

router.route('/add').post((req, res) => { //POST endpoint adds all exercise specifications
  const username = req.body.username; 
  const description = req.body.description; 
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  //gets the username, description, duration and date
  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  }); //using all the variables declared above, newExercise is created

  newExercise.save() //newExercise gets saved
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err)); //in case of error
});

router.route('/:id').get((req, res) => { // /:id GET endpoint returns an exercise item given an id
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => { // /:id DELETE endpoint deletes an exercise item given an id
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => { // the /update/:id POST endpoint updates an existing exercise item using id
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;