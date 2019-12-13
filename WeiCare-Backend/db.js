var db = require('mysql');
var dbCred = require('./dbCreds.json');
var connection = db.createConnection(dbCred);

module.exports = connection;
