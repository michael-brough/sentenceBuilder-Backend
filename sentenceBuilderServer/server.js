const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'sys'
})

connection.connect(function(err) {
if (err) throw err;
  connection.query("SELECT * FROM words", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
	connection.end()
  });
});



