var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

exports.connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});

exports.connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + exports.connection.threadId);
});