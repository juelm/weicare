var express = require("express");
var router = express.Router();
var db = require("../db");

//if /all is called, return the full results of the db.query. to select what kind of info to return, limit the query.

router.get("/:classRoom", function(req, res, next) {

  let selectString = `SELECT FirstName, LastName 
						FROM STUDENTS JOIN CLASSES Using(ClassID) 
						WHERE Classroom= '${req.params.classRoom}'`;

  db.query(selectString, (error, result, fields) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log(result);
      res.send(result);
    }
  });

});

module.exports = router;
