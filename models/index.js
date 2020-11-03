const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: String,
  name: String,
  distance: Number,
  duration: Number,
  weight: Number,
  reps: Number,
  sets: Number
})

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [ ExerciseSchema ]
});

const Workout = mongoose.model("Workout", workoutSchema);
const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports.Workout = Workout;
module.exports.Exercise = Exercise;
