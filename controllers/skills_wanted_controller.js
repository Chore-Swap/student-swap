const express = require("express");
const app = express();
const path = require("path");
const body = require("body-parser");
const db = require(path.join(__dirname,".." ,"models"));


module.exports = function(app) {

	// app.get("/", function(req, res) {
	//   var hbsObject = {};
	//     res.render("index", hbsObject);
	// });

};