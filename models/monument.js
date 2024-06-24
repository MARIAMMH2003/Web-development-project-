const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MuseumSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    
  
    MuseumId:{ type: String,required:true },
    picture: {
      type: String,
      required: false
  },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: false
    },
    __v: {
        type: Number,
        select: false 
    }
});

const Monument = mongoose.model('Monument', MuseumSchema);

module.exports = Monument;
