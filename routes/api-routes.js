const router = require("express").Router();
const Workout = require("../models").Workout

router.get("/workouts", (req, res) => {
    Workout.find({})
    .sort( {day: 1 })
    .then(dbWorkout => {
        res.json(dbWorkout)
    }).catch(err => {
        res.status(400).json(err)
    })
})

router.get("/workouts/range", (req, res) => {
  Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout)
  }).catch(err => {
    res.status(400).json(err)
  })
})

router.post("/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


router.put("/workouts/:id", (req, res) => {
  console.log("1")
  Workout.findById(req.params.id, function(err, workout) {
    if(err) {
      res.status(400).json(err)
    }
    else{
      console.log("2")
      workout.exercises.push(
        {
          type: req.body.type,
          name: req.body.name,
          distance: req.body.distance,
          duration: req.body.duration,
          weight: req.body.weight,
          reps: req.body.reps,
          sets: req.body.sets
        }
      )
      Workout.updateOne(
        {
          _id: req.params.id
          
        },
        {
          $set: {
            id: req.params.id,
            exercises: workout.exercises
          }
        }
      ).then(function (updateRes) {
        console.log("3") 
        if(updateRes.ok == 0){
            res.status(400).json(err)
          }
            res.status(200)
        })
    }
  })
})



module.exports = router