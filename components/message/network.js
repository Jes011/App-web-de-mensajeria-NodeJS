
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();


router.get('/', (req, res) => {
    controller.getMessageList()
        .then(mess => res.send(mess))
        .catch(err => res.send(err));
});

router.post('/', (req, res) => {
    console.log('one more');
    controller.addMessage(req.body.name, req.body.menssage)
        .then(resp => {
            console.log(resp);
            response(req, res, { Status: 'Mensaje enviado correctamente', resp }, 201);
        })
        .catch(err => {
            console.error(err);
            response(req, res, { Status: 'Error mensaje invalido' }, 400);
        });
});

router.patch('/:id',(req,res)=>{
    console.log(req.params.id);
    res.send();
})

module.exports = router;