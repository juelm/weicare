var express = require('express');
var router = express.Router();
var db = require('../db');

//if /all is called, return the full results of the db.query. to select what kind of info to return, limit the query.

router.get('/all', function(req, res, next){
	db.query("SELECT * FROM DAYLIES", (error, result, fields) => {
		if (error) {
			console.log(error);
			res.send(error);
		}else{
			console.log(result);
            res.send(result[0]);
        }
	});
	//res.send(result);
});

router.get('/:userName', function(req, res, next) {
	let nameString = ""
	//let selectString = `SELECT ParentID FROM PARENTS WHERE UserName = '${req.params.userName}'`;
	let selectString = `SELECT Title, DailyText 
						FROM DAYLIES JOIN CLASSES Using(ClassID) 
						JOIN STUDENTS Using(ClassID) 
						JOIN STUDENTPARENT Using(StudentID)
						JOIN PARENTS Using(ParentID) 
						WHERE UserName = '${req.params.userName}'`;

	db.query(selectString, (error, result, fields) => {
		if (error) {
			console.log(error);
			res.send(error);
		}else{

			console.log(result);
            res.send(result);
        }
	});
  
	//res.send(json[req.params.userName]);
  });

module.exports = router;


function selectDailies($PK, $dispDate, $dispName, $dispEmail, $numResults){
	$columnString = "SELECT";
	$fromTable = "FROM MESSAGES";
	$limit = "";
	//if PK to be displayed add it to query
	if($PK) {
		$columnString = $columnString + " MessageID, ";
	}
	//if Name to be displayed add it to query
	if($dispName) {
		$columnString = $columnString + " PostName, ";
	}
	//if Date to be displayed add it to query
	if($dispDate) {
		$columnString = $columnString + " PostDate, ";
	}
	//if Email to be displayed add it to query
	if($dispEmail) {
		$columnString = $columnString + " Email, ";
	}
	//Text will always be displayed, add it to query
	$columnString = $columnString + " Message ";
	if($numResults > 0){
		$limit = " LIMIT " + $numResults;
	}
	$wholeQuery = $columnString + $fromTable +" ORDER BY PostDate DESC, MessageID DESC " + $limit;
	return $wholeQuery;
}