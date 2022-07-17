const message = require('../components/message/network');
const user = require('../components/user/network');
const chat = require('../components/chat/network')

module.exports = (server)=>{
    server.use('/menssage',message);
    server.use('/user',user);
    server.use('/chat',chat);
}