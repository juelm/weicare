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
            res.send(result);
        }
		// var $PK = 1;
		// var $dispName = result[0]["DisplayName"];
		// var $dispDate = result[0]["DisplayDate"];
		// var $dispEmail = result[0]["DisplayEmail"];
		// var $numResults = result[0]["TotalResults"];
		// var selectState = selectColumns($PK, $dispDate, $dispName, $dispEmail, $numResults);
		// console.log(selectState);
		// db.query(selectState, (error, results, fields) => {
		// 	if (error) {
		// 	res.send(error);
		// 	} else {
		// 		res.send(results);
		// 	}
		// });
	});

});

module.exports = router;


function selectColumns($PK, $dispDate, $dispName, $dispEmail, $numResults){
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