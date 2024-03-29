const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    users: {
        type:[Schema.ObjectId],
        ref:'users',
        required: true
    }
})

const Model = mongoose.model('chats', mySchema);

module.exports = Model;