const message = require('../components/message/network');

module.exports = (server)=>{
    server.use('/menssage',message)
}