const Model = require('./Model');

function addChat(users){
    const chat = new Model(users);
    console.log(chat)
    return chat.save();
}

function getChats(id){
    return new Promise((resolve,reject)=>{
        Model.find((id)?{_id:id}:{}).populate('users').exec((err,data)=>{
            if(err){
                console.log(err)
                reject(err);
            }else{
                console.log(data)
                resolve(data);
            }
        });
    })
}

module.exports = {
    addChat,
    getChats
}