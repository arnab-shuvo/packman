import express = require('express');
const { getSize, getVersion } = require('../controller/sizeController');

const router = express.Router();

router.get('/size', getSize);
router.post('/version', getVersion);

module.exports = router;
