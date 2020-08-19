"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var morgan = require('morgan');
var app = express();
var path = require("path");
var router = require('./routes');
var bodyParser = require('body-parser');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use('/api', router);
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
var port = 3000;
app.listen(port, function () {
    console.log("Listening " + port);
});
