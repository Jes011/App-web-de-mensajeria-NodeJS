const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;
db.connect('mongodb+srv://pepe:contraseña123@cluster0.cbkvn6f.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true
});

const addMessage =(message)=>{
    const myMSG = new Model(message);
    myMSG.save();
}

const getMessageList = async()=>{
    const messages =  await Model.find();
    return messages;
}

module.exports = {
    addMessage,
    getMessageList
}