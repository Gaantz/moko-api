import express = require('express');
import parser = require('body-parser');

const morgan = require('morgan');
const PORT = process.env.PORT || 80;

const json = parser.json()
const logger = morgan('tiny');
const api: express.Application = express();

api.use(json);
api.use(logger);

api.all('/', function (req, res) { 
    res.status(200);
    res.json({'url': req.url, 'method': req.method, 'body': req.body });
});

api.all('/login', function(req, res) {
    res.status(200);
    res.json({'url': req.url, 'method': req.method, 'body': req.body });
 });

api.listen(PORT, function() {
    console.log('VALHALLA API started in port ' + PORT);
});