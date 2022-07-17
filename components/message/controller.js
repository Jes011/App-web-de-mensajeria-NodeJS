const store = require('./store')

function addMessage(user, message,chat,file) {
    return new Promise((resolve, reject) => {
        if (user && message && chat) {
            console.log(file);
            store.addMessage({ name: user,chat:chat, message: message, date: new Date(),file:(file)?`localhost:1853/files/${file.filename}`:''});
            resolve('Mensaje agregado con exito')
        } else {
            reject('Error Menssage incompleto');
        }
    })
}

function getMessageList(name) {
    return new Promise((resolve, reject) => {
        store.getMessageList(name).then(mess=>resolve(mess)).catch(err=>reject(err));
    });
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            reject('argumentos invalidos')
        } else {
            const foundMessage = await store.updateMessage(id, message);

            if (!foundMessage) {
                reject('id de mensaje no encontrado');
            } else {
                resolve(foundMessage);
            }
        }
    });
};

function deleteMessage(id) {
    return new Promise((resolve, reject) => {

        if (id) {
            store.deleteMessage(id).then((mess) => {
                if(mess.deletedCount!=1){
                    reject('mensaje no existente')
                }else{
                    resolve('mensaje eliminado')
                }
            }).catch(() => reject('error'))
        } else {
            reject('error id invalido')
        }
    })
}

module.exports = {
    addMessage,
    getMessageList,
    updateMessage,
    deleteMessage
};