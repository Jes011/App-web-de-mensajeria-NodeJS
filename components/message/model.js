const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },date: {
        type: Date,
        required: true
    }
})

const model = mongoose.model('Messages',mySchema);

module.exports = model;