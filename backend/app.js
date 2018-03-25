var express = require('express')
var app = express()
var path = require('path')
var mysql = require('mysql');

app.use(express.static(path.join(__dirname,"public")))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/all', function(req, res){
	console.log('got it');
	let con = mysql.createConnection({
		host: "35.231.114.23",
		user: "crimecast",
		password: "badboi",
		database: "crime"
	});
	con.connect();
	con.query("select * from crime", function(err, res, fields){
		if(err)throw err;
		console.log(res);
	});
})

app.listen(8080)
console.log('CrimeCast Backend on 8080');
