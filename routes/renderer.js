var express = require('express');
var router = express.Router();
var fire = require('./fire')

router.get('/', function (req, res) {
	return res.send("<h1>Tes Express & Firebase Cloud Firestore</h1>");
});

module.exports = router;
