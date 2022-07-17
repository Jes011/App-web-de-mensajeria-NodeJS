const store = require('./Store');

function addChat(users) {
    return new Promise((resolve, reject) => {
        store.addChat({users: users}).then(mess => {
            resolve(mess);
        }).catch(err => reject(err))
    })
}

function getChat(id) {
    return new Promise((resolve, reject) => { store.getChats(id).then(mess => resolve(mess)).catch(err=>reject(err))})
}

module.exports = {
    addChat,
    getChat
}