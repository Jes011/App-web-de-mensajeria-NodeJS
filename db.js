const db = require('mongoose');

db.Promise = global.Promise;

const conectar = async(url) => {
    await db.connect(url, {
        useNewUrlParser: true
    });
}

module.exports = conectar;
