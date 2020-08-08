"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var parser = require("body-parser");
var morgan = require('morgan');
var port = 80;
var json = parser.json();
var logger = morgan('tiny');
var api = express();
api.use(json);
api.use(logger);
api.all('/', function (req, res) {
    res.status(200);
    res.json({ 'url': req.url, 'method': req.method, 'body': req.body });
});
api.all('/login', function (req, res) {
    res.status(200);
    res.json({ 'url': req.url, 'method': req.method, 'body': req.body });
});
api.listen(port, function () {
    console.log('VALHALLA API started in port ' + port);
});
