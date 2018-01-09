var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/",function(request,response){

		burger.db.selectAll(render);
		
		function render(burgerResults){
				response.render('index',burgerResults);
		}

		
	});

router.route("/api")
	.get(function(request,response){

	});

router.route("/api/new")
	.post(function(request,response){
		var burgerName = request.body.name;
		console.log('Burger name inside route: ' + burgerName);
		burger.db.insertOne(burgerName,statusResponse);

		function statusResponse(){
		
			response.status(200).end();
		}
	})

router.route("/api/update/:id")
	.put(function(request,response){
		var id = request.params.id;
		burger.db.updateOne(id,render);

		function render(){

			response.status(200).end();
		}

	})

module.exports = router;