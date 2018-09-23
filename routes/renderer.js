var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	return res.send("<h1>Tes Express & Firebase Cloud Firestore</h1>");
});

module.exports = router;
