const router = require("express").Router();
const Workout = require("../models").Workout

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .sort( {day: -1 })
    .then(dbWorkout => {
        res.json(dbWorkout)
    }).catch(err => {
        res.status(400).json(err)
    })
})

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout)
  }).catch(err => {
    res.status(400).json(err)
  })
})

router.post("/api/workouts", ({ body }, res) => {
    console.log(body, "My Body")
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


router.put("/api/workouts/:id", (req, res) => {
  Workout.update(
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function (dbWorkout) {
      res.json(dbWorkout)
    })
})



module.exports = router