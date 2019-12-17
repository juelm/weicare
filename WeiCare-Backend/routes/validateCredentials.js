var express = require('express');
var router = express.Router();
var db = require('../db');;

router.post('/', function (req, res, next) {
	console.log(`Hello ${req.body}`);
	console.log(req.body.class);

	let queryString = `SELECT UserType FROM Teachers WHERE UserName = '${req.body.userName}' AND Password = '${req.body.password}' UNION SELECT UserType FROM Parents WHERE UserName = '${req.body.userName}' AND Password = '${req.body.password}'`;

	console.log(queryString);

	db.query(queryString, (error, result, fields) => {
		if (error) {
			console.log(error);
			res.send(null);
		} else {
			console.log(result);
            res.send(result);
		}
	});
});


module.exports = router;
