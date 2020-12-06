const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//creating user schema with validations inside it
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
}); //records time for when it was created or when it was modified

const User = mongoose.model('User', userSchema); //because we will be exporting it


module.exports = User;