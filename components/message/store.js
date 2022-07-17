const Model = require('./model');

const addMessage = (message) => {
    const myMSG = new Model(message);
    myMSG.save();
}

const getMessageList = (name) => {

    return new Promise((resolve, reject) => {
        let query = {};
        if (name) {
            query = { name: name };
        }

        Model.find(query).populate('name').exec((err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        });
    }
    )
}


const updateMessage = async (id, message) => {
    let foundMessage = await Model.findOne({ _id: id });

    if (foundMessage) {
        foundMessage.message = message;
        foundMessage = await foundMessage.save();
    }


    return foundMessage;
}

const deleteMessage = (id) => {
    return Model.deleteOne({ _id: id });
}

module.exports = {
    addMessage,
    getMessageList,
    updateMessage,
    deleteMessage
}