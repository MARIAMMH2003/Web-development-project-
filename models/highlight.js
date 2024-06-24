const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const highlightSchema = new Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true }
});

const Highlight = mongoose.model('Highlight', highlightSchema);
module.exports = Highlight;
