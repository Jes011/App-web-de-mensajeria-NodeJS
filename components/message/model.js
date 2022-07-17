const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: {
        type: Schema.ObjectId,
        ref: 'users',
        required: true
    },
    chat: {
        type: Schema.ObjectId,
        ref: 'chats',
        required: true
    },
    message: {
        type: String,
        required: true
    }, date: {
        type: Date,
        required: true
    }, file: {
        type: String,
        required: false
    }
})

const model = mongoose.model('Messages', mySchema);

module.exports = model;