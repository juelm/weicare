var express = require("express");
var router = express.Router();
var db = require("../db");
//var cors = require('cors');

router.post("/Teachers", function(req, res, next) {
    let status = true;
    let updatePhone = `UPDATE TEACHERS 
                  SET Phone = ${req.body.phone}
                  WHERE TeacherID = '${req.body.id}'`;

    let updateEmail = `UPDATE TEACHERS 
    SET Email = ${req.body.email}
    WHERE TeacherID = '${req.body.id}'`;

    let updateFirstName = `UPDATE TEACHERS 
    SET FirstName = ${req.body.fName}
    WHERE TeacherID = '${req.body.id}'`;

    let updateLastName = `UPDATE TEACHERS 
    SET LastName = ${req.body.lName}
    WHERE TeacherID = '${req.body.id}'`;
    
  

  status = await db.query(updatePhone, (error, result, fields) => {
    if (error) {
      //console.log(error);
      //res.send(error);
      return false;
    } else {
      //console.log(result);
      //res.send('Daily Deleted');
      return true;
    }
  });

  status = await db.query(updateEmail, (error, result, fields) => {
    if (error) {
      //console.log(error);
      //res.send(error);
      return false;
    } else {
      //console.log(result);
      //res.send('Daily Deleted');
      return true;
    }
  });

  status = await db.query(updateFirstName, (error, result, fields) => {
    if (error) {
      //console.log(error);
      //res.send(error);
      return false;
    } else {
      //console.log(result);
      //res.send('Daily Deleted');
      return true;
    }
  });

  status = await db.query(updateLastName, (error, result, fields) => {
    if (error) {
      //console.log(error);
      //res.send(error);
      return false;
    } else {
      //console.log(result);
      //res.send('Daily Deleted');
      return true;
    }
  });

  // 	//res.send(json[req.params.userName]);
});



//------------------Parents---------------------


router.post("/Parents", function(req, res, next) {
    let status = true;
    let updatePhone = `UPDATE PARENTS 
                  SET Phone = ${req.body.phone}
                  WHERE ParentID = '${req.body.id}'`;

    let updateEmail = `UPDATE PARENTS 
    SET Email = ${req.body.email}
    WHERE ParentID = '${req.body.id}'`;

    let updateFirstName = `UPDATE PARENTS
    SET FirstName = ${req.body.fName}
    WHERE ParentID = '${req.body.id}'`;

    let updateLastName = `UPDATE PARENTS 
    SET LastName = ${req.body.lName}
    WHERE ParentID = '${req.body.id}'`;
    
  

  status = await db.query(updatePhone, (error, result, fields) => {
    if (error) {
      //console.log(error);
      //res.send(error);
      return false;
    } else {
      //console.log(result);
      //res.send('Daily Deleted');
      return true;
    }
  });

  status = await db.query(updateEmail, (error, result, fields) => {
    if (error) {
      //console.log(error);
      //res.send(error);
      return false;
    } else {
      //console.log(result);
      //res.send('Daily Deleted');
      return true;
    }
  });

  status = await db.query(updateFirstName, (error, result, fields) => {
    if (error) {
      //console.log(error);
      //res.send(error);
      return false;
    } else {
      //console.log(result);
      //res.send('Daily Deleted');
      return true;
    }
  });

  status = await db.query(updateLastName, (error, result, fields) => {
    if (error) {
      //console.log(error);
      //res.send(error);
      return false;
    } else {
      //console.log(result);
      //res.send('Daily Deleted');
      return true;
    }
  });

  // 	//res.send(json[req.params.userName]);
});

module.exports = router;