const express = require('express');
const bodyParser = require('body-parser');
const route = require('./network/routes')
const db = require('./db');
const app = express();

db('mongodb+srv://pepe:contraseña123@cluster0.cbkvn6f.mongodb.net/?retryWrites=true&w=majority');
app.use(bodyParser.json());

app.use('/',express.static('./public/'))
route(app);

app.listen('1853'); 