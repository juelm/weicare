var express = require("express");
var router = express.Router();
var db = require("../db");
//var cors = require('cors');

router.post("/", function(req, res, next) {
  let selectString; 
  if(req.body.userType === "Parent"){
	  selectString = `SELECT Title, DailyText 
						FROM DAYLIES JOIN CLASSES Using(ClassID) 
						JOIN STUDENTS Using(ClassID) 
						JOIN STUDENTPARENT Using(StudentID)
						JOIN PARENTS Using(ParentID) 
						WHERE UserName = '${req.body.userName}'`
  }else if(req.body.userType === "Teacher"){
    selectString = `SELECT Title, DailyText 
						FROM DAYLIES JOIN CLASSES Using(ClassID) 
						JOIN TEACHER Using(TeacherID) 
						WHERE UserName = '${req.body.userName}'`;

  }

  db.query(queryString, (error, result, fields) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log(result);
      res.send("Record Successfully Updated");
    }
  });

  // 	//res.send(json[req.params.userName]);
});

module.exports = router;
