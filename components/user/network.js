const express = require('express');
const controller = require('./Controller');
const response = require('../../network/response')
const router = express.Router();

router.get('/', (req, res) => {
    controller.getUserList(req.body.id).then((mess)=>{
        response(req, res, { Status: 'usuarios encontrados', mess }, 200);
    }).catch(err=>{
        response(req, res, { Status: 'Error ' + err }, 400);
    })
})
router.post('/', (req, res) => {
    controller.addUser(req.body.name).then((mess) => {
        response(req, res, { Status: 'usuario agregado correctamente', mess }, 200);
    }).catch(err => {
        response(req, res, { Status: 'Error ' + err }, 400)
    })
})

router.delete('/:id', (req, res) => {
    controller.deleteUser(req.params.id).then((mess) => {
        response(req, res, { Status: 'usuario eliminado correctamente', mess }, 200)
    }).catch((err) => {
        response(req, res, { Status: 'Error ' + err }, 400);
    });
})

router.patch('/:id', (req, res) => {
    controller.updateUser(req.params.id, req.body.name).then((mess) => {
        response(req, res, { Status: 'Mensaje actualizado correctamente', mess }, 200)
    }).catch((err) => {
        response(req, res, { Status: 'Error ' + err }, 400)
    });
})
module.exports = router;
