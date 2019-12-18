var express = require('express');
var router = express.Router();
var db = require('../db');
var sanitizeHtml = require('sanitize-html');


router.post('/', function(req, res, next) {

	let cleanClass = sanitizeHtml(req.body.class);
	let cleanTitle = sanitizeHtml(req.body.title);
	let cleanText = sanitizeHtml(req.body.text);

	// let queryString = `INSERT INTO DAYLIES (ClassID, Title, DailyText)
	// 				VALUES (${req.body.class}, '${req.body.title}', '${req.body.text}')`;

	let queryString = `INSERT INTO DAYLIES (ClassID, Title, DailyText)
	VALUES (${cleanClass}, '${cleanTitle}', '${cleanText}')`;

	console.log(queryString);

	db.query(queryString, (error, result, fields) => {
		if (error) {
			console.log(error);
			res.send(error);
		} else {
			console.log(result);
            res.send("Record Successfully Updated");
        }
	});
});


module.exports = router;
