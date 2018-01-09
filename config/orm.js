var connection = require("./connection.js");

var db = {

	selectAll: function(callback){

		connection.query('SELECT * FROM burgers', function (error, results, fields) {
  			if (error) throw error;
  	
  		 	var burgers = [];
  		 	var eatenBurgers = [];
  		 	for (i=0;i<results.length;i++){
  		 		if(!results[i].devoured){

  		 			burgers.push(results[i]);
  		 		}
  		 		else {
  		 			eatenBurgers.push(results[i]);
  		 		}
 			}

  			callback({burgers:burgers,eatenBurgers:eatenBurgers});
		});
	},
	insertOne: function(burgerName,callback){
		connection.query('INSERT INTO burgers (burger_name) VALUES (?)',[burgerName], function (error, results, fields) {
  			if (error) throw error;	
			callback();
		});
	},
	updateOne: function(id,callback){
		connection.query('UPDATE burgers SET devoured = 1 WHERE id= ?',[id], function (error, results, fields) {
  			if (error) throw error;
  		
  		 	
  			callback();
		});



	}


} 

module.exports = db;