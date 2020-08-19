"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var _a = require('../controller/sizeController'), getSize = _a.getSize, getVersion = _a.getVersion;
var router = express.Router();
router.get('/size', getSize);
router.post('/version', getVersion);
module.exports = router;
