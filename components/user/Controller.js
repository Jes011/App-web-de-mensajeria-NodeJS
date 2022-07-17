const store = require('./Store')

function getUserList(id){
    return new Promise((resolve,reject)=>{
        const users = store.getUserList(id);
        if(users.length){
            reject('usuarios no encontrados');
        }else{
            resolve(users);
        }
    })
}

function addUser(name) {
    return new Promise((resolve, reject) => {
        if (name) {
            resolve(store.addUser({ name: name, date: new Date() }));
        } else {
            reject('name invalido');
        }
    })
}

function deleteUser(id) {
    return new Promise((resolve, reject) => {

        if (id) {
            store.deleteUser(id).then(data => {
                if (data.deletedCount != 1) {
                    reject('usuario no encontrado')
                } else {
                    resolve('usuario eliminado')
                }
            }).catch(err => reject(err));

        } else {
            reject('id invalido')
        }
    })
}

function updateUser(id,name){
    return new Promise((resolve,reject)=>{

        if(!id || !name){
            reject('id o name invalidos');
        }else{
            if(store.updateUser(id,name)){
                resolve('informacion actualizada')
            }else{
                reject('usuario no encontrado')
            }
        }
    })
}

module.exports = {
    addUser,
    deleteUser,
    updateUser,
    getUserList
}