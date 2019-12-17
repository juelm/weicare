var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser=require('body-parser');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var getDailiesRouter = require('./routes/getDailies');
var postDailiesRouter = require('./routes/postDailies');

var classRoster = require('./routes/classRoster');
var parentDashInfo = require('./routes/parentDashInfo.js')
var validateCredentialsRouter = require('./routes/validateCredentials');

var validateCredentialsRouter = require('./routes/validateCredentials');


var app = express();

//PORT = 8080;

//Set port to 8080 so that react app can use 3000
//app.set('port', 8080);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/getDailies', getDailiesRouter);
app.use('/api/postDailies', postDailiesRouter);

app.use('/api/classRoster', classRoster); 
app.use('/api/parentDashInfo', parentDashInfo); 

app.use('/api/validateCredentials', validateCredentialsRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//app.listen(app.get('port'), () => console.log("Listening on port " + app.get('port')))

module.exports = app;
