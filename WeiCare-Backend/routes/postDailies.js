var express = require('express');
var router = express.Router();
var db = require('../db');
//var cors = require('cors');


router.post('/', function(req, res, next) {
	console.log(`Hello ${req.body}`);
	console.log(req.body.class);
	
	// let nameString = ""
	//let selectString = `SELECT ParentID FROM PARENTS WHERE UserName = '${req.params.userName}'`;
	// let classString = `SELECT classID 
	// 					FROM CLASSES JOIN TEACHERS Using(TeacherID) 
	// 					WHERE UserName = '${req.body.user}'`;

	let queryString = `INSERT INTO DAYLIES (ClassID, Title, DailyText)
					VALUES (${req.body.class}, '${req.body.title}', '${req.body.text}')`;

	console.log(queryString);

	db.query(queryString, (error, result, fields) => {
		if (error) {
			console.log(error);
			res.send(error);
		}else{

			console.log(result);
            res.send("Record Successfully Updated");
        }
	});
  
// 	//res.send(json[req.params.userName]);
});


module.exports = router;
