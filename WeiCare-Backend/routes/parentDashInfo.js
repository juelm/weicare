var express = require("express");
var router = express.Router();
var db = require("../db");

//if /all is called, return the full results of the db.query. to select what kind of info to return, limit the query.

router.get("/:userName", function(req, res, next) {
  let selectString = 
            `SELECT Students.FirstName as StudentFirstName, Students.LastName as StudentLastName, 
            Teachers.FirstName as FirstName, Teachers.LastName as LastName, 
            Teachers.Email as Email, Classes.ClassID as classID
						FROM TEACHERS JOIN CLASSES Using(TeacherID) 
            JOIN STUDENTS Using(ClassID)
            JOIN STUDENTPARENT Using(StudentID)
            JOIN PARENTS Using(ParentID)
            WHERE Parents.UserName= '${req.params.userName}'`;

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
