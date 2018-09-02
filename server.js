var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var apihello = require('./routes/apihello');
var usersRouter = require('./routes/users');

var server = express();

const port = process.env.PORT || 5000;

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));

server.use('/', indexRouter);
server.use('/api/hello', apihello);
server.use('/users', usersRouter);



server.listen(port, () => console.log(`Listening on port ${port}`));


module.exports = server;
