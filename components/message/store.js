const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;
db.connect('mongodb+srv://pepe:contraseña123@cluster0.cbkvn6f.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

const addMessage = (message) => {
    const myMSG = new Model(message);
    myMSG.save();
}

const getMessageList = async () => {
    const messages = await Model.find();
    return messages;
}

const updateMessage = async (id, message) => {
    let foundMessage = await Model.findOne({ _id: id });

    if (foundMessage) {
        foundMessage.message = message;
        foundMessage = await foundMessage.save();
    }

    
    return foundMessage;
}

module.exports = {
    addMessage,
    getMessageList,
    updateMessage
}