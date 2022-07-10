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
        } else {
            reject('No hay elementos en la lista')
        }
    });
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            reject('argumentos invalidos')
        } else {
            const foundMessage = await store.updateMessage(id,message);

            if (!foundMessage) {
                reject('id de mensaje no encontrado');
            } else {
                resolve(foundMessage);
            }
        }
    });
};
module.exports = {
    addMessage,
    getMessageList,
    updateMessage
};