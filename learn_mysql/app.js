var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'daolang',
  password : 'qq111111!',
  database : 'daolang'
});
 
connection.connect();
 
connection.query('SELECT * FROM daolang.student limit 0,2', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0]);
});

