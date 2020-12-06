const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//creating exercise schema with validations inside it
const exerciseSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
}); //records time for when it was created or when it was modified

const Exercise = mongoose.model('Exercise', exerciseSchema); //because we will be exporting it

module.exports = Exercise;