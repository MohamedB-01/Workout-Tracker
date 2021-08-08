const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Choose type of workout "
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a name of workout "
      },
      distance: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      duration: {
        type: Number,
      },
    }
  ]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;