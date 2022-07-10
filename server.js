const express = require('express');
const bodyParser = require('body-parser');
const route = require('./network/routes')
const app = express();

app.use(bodyParser.json());

route(app);

app.listen('1853'); 