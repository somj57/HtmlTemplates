//npm init
//npm install express
//nodemon app.js
// npm install body-parser

const express = require("express");
const app = express();
const https=require("https");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));


app.get("/",function(req,res){
	res.sendFile(__dirname +"/signup.html")	
});
app.get("/style.css",function(req,res){
	res.sendFile(__dirname +"/style.css")	
});









app.listen(3000,function(){
	console.log("Server started at port 3000");
});