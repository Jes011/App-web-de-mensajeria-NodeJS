const store = require('./store')

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (user && message) {
            store.addMessage({ name: user, message: message, date: new Date() });
            resolve('Mensaje agregado con exito')
        } else {
            reject('Error Menssage incompleto');
        }
    })
}

function getMessageList() {
    return new Promise((resolve, reject) => {
        const messages = store.getMessageList();
        if (messages) {
            resolve(messages);
        }else{
            reject('No hay elementos en la lista')
        }
    });
}

module.exports = {
    addMessage,
    getMessageList
};