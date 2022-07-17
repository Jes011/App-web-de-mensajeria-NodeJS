const express = require('express');
const controller = require('./controller');
const router = express.Router();
const response = require('../../network/response');

router.get('/', (req, res) => {
    controller.getChat(req.query.id)
        .then(mess => response(req, res, { Status: 'Chats obtenidos', mess }, 200))
        .catch(err => response(req, res, { Error: err }, 400))
})
router.post('/', (req, res) => {
    controller.addChat(req.body.users)
        .then(mess => response(req, res, { Status: 'Chat agregado', mess }, 200))
        .catch(err => response(req, res, { Error: err }, 400))
})

module.exports = router;