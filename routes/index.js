var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('index', { title: 'FullStack Vietnam' });
	var obj;
	fs.readFile('./db/home.json', 'utf8', function (err, data) {
		if (err) throw err;
		obj = JSON.parse(data);
		res.render('index', { dataTruong:obj });
	});
});

module.exports = router;
