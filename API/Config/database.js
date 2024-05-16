var mysql = require('mysql');
var env = process.env;
require('dotenv').config()
var con  = mysql.createConnection({
  host: env.HOST_DATABASE,
  port: env.PORT_DATABASE,
  user: env.USER_DATABASE,
  password: env.PASSWORD_DATABASE,
  database: env.NAME_DATABASE,
});


module.exports= con;
