var express = require('express');
var router = express.Router();
var db = require('../db');
var sanitizeHtml = require('sanitize-html');

router.post('/', function(req, res, next) {

	let cleanClass = sanitizeHtml(req.body.class);
	let cleanTitle = sanitizeHtml(req.body.title);
	let cleanText = sanitizeHtml(req.body.text);

	let queryString = `INSERT INTO DAYLIES (ClassID, Title, DailyText)
	VALUES (${cleanClass}, '${cleanTitle}', '${cleanText}')`;

	db.query(queryString, (error, result, fields) => {
		if (error) {
			res.send(error);
		} else {
            res.send("Record Successfully Updated");
        }
	});
});

module.exports = router;
