const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CommentSchema = new Schema({
    username: {
        type: String,
        required: true
    },
 
    
  
    MuseumId:{ type: String,required:true },
    content: {
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

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
