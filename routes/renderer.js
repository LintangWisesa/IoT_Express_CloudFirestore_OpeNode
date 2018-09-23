var express = require('express');
var router = express.Router();
var fire = require('./fire')

router.get('/', function (req, res) {
	return res.send("<h1>Tes Express & Firebase Cloud Firestore</h1>");
});

router.get('/data', (req, res)=>{
	const db = fire.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    var wholeData = []
	db.collection('lin_esp8266').orderBy('waktu', 'asc').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        // console.log(doc.id, '=>', doc.data());
        // console.log(doc.data().name + doc.data().age);
        // console.log(doc.data());
        wholeData.push(doc.data())
      });
      console.log(wholeData)
      res.send(wholeData)
    })
    .catch(error => {
      console.log('Error!', error);
    })
})

router.post('/data', (req, res)=>{
	const db = fire.firestore();
	db.settings({
      timestampsInSnapshots: true
    });
    db.collection('lin_esp8266').add({
      nama: req.body.nama,
	  usia: req.body.usia,
	  waktu: new Date()
    });
    res.send({
        nama: req.body.nama,
		usia: req.body.usia,
		waktu: new Date(),
        status: 'POST data sukses!'
    })
})

module.exports = router;
