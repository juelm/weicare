var express = require('express');
var router = express.Router();
var json = require('./WeiCareDB.json');

console.log(json["John Doe"]);


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send("Respond with a resource");
});

router.get('/:userName', function(req, res, next) {
  //let data = json[req.params.userName]
  res.send(json[req.params.userName]);
});

module.exports = router;
