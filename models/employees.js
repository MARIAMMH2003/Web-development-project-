// data is stored in this model which acts like a collection 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  userType: {
    type: String,
    enum:['client','tour-guide'],
    required: true
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;