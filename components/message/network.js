
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();
const multer = require('multer');
const upload = multer({
    dest:'public/files/'
})


router.get('/', (req, res) => {
    controller.getMessageList(req.query.name)
        .then(mess => res.send(mess))
        .catch(err => res.send(err));
});

router.post('/',upload.single('file'),(req, res) => {
    console.log('one more');
    controller.addMessage(req.body.name, req.body.menssage, req.body.chat, req.file)
        .then(resp => {
            console.log(resp);
            response(req, res, { Status: 'Mensaje enviado correctamente', resp }, 201);
        })
        .catch(err => {
            console.error(err);
            response(req, res, { Status: 'Error mensaje invalido' }, 400);
        });
});

router.patch('/:id', (req, res) => {
    controller.updateMessage(req.params.id, req.body.message)
        .then((infoMessage)=>{
            response(req,res,{Status:'Mensaje editado correctamente',infoMessage},200)
        }).catch((err)=>{
            response(req,res,{Status:'Error '+err},400);
        });
});

router.delete('/:id',(req,res)=>{
    controller.deleteMessage(req.params.id)
    .then((mess)=>{
        response(req,res,{Status:mess},200);
    })
    .catch((err)=>{
        response(req,res,{Status: `Error ${err}`},400)
    });
});

module.exports = router;