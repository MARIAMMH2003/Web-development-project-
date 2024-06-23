const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MonumentSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    }
});

const Monument = mongoose.model('Monument', MonumentSchema);

module.exports = Monument;
