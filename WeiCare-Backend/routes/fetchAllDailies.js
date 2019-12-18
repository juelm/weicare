var express = require("express");
var router = express.Router();
var db = require("../db");
//var cors = require('cors');

router.post("/", function(req, res, next) {
  let selectString;
  console.log("HEEEEELLLOOOOO!");
  console.log(req.body);
  if (req.body.userType === "Parent") {
    selectString = `SELECT Title, DailyText, DailyDate
						FROM DAYLIES JOIN CLASSES Using(ClassID) 
						JOIN STUDENTS Using(ClassID) 
						JOIN STUDENTPARENT Using(StudentID)
						JOIN PARENTS Using(ParentID) 
						WHERE UserName = '${req.body.user}'`;
  } else if (req.body.userType === "Teacher") {
    selectString = `SELECT Title, DailyText, DailyDate
						FROM DAYLIES JOIN CLASSES Using(ClassID) 
						JOIN TEACHERS Using(TeacherID) 
						WHERE UserName = '${req.body.user}'`;
  }

  db.query(selectString, (error, result, fields) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log(result);
      res.send(result);
    }
  });

  // 	//res.send(json[req.params.userName]);
});

module.exports = router;
