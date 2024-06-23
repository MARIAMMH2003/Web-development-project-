
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
  email:{
    type:String,
    required:true,
    unique:true
  },
  usertype:{
    type:String,
    required:true,
    enum:['client','tour-guide', 'admin'] 
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;