var express = require("express");
var path = require("path");
var app = express();
var bodyParser= require("body-parser");
var port = process.env.PORT ||  3000;

app.use(bodyParser.urlencoded({ extended: false}));

var exphbs = require("express-handlebars");
var controller = require("./controllers/burgers_controller.js");
app.use(controller);
app.use(express.static(path.join(__dirname, 'public')));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.listen(port,function(){

  console.log("listening on " + port);
});
