const router = require('express').Router();
const Workout = require('../models/workout.js'); 

//route for getLastWorkout() from api.js
router.get('/api/workouts', (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

//route for addExercise(data) from api.js
router.put('/api/workouts/:id', async (req, res) => {
    Workout.findByIdAndUpdate(req.params.id,
      {
        $push: { exercises: req.body }
      },
      { 
        new: true 
      },
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
module.exports = router;