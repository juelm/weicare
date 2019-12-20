var express = require("express");
var router = express.Router();
var db = require("../db");
//var cors = require('cors');

router.post("/", function(req, res, next) {

  let deleteString = `DELETE FROM DAYLIES 
				  WHERE DailyID = '${req.body.DailyID}'`;

  db.query(deleteString, (error, result, fields) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log(result);
      res.send('Daily Deleted');
    }
  });

  // 	//res.send(json[req.params.userName]);
});

module.exports = router;