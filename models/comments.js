const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  content: String,
  rating: Number,
  username: String,
  monument: { type: mongoose.Schema.Types.ObjectId, ref: 'Monument' }
});

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;
