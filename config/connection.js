var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL){
	connection - mysql.createConnection(porcess.env.JAWSDB_URL);
} else {
		var connection = mysql.createConnection({
		  host: "localhost",
		  user: "root",
		  password: "NYUDuck",
		  database: "burgers_db"
		});
}
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;