var express = require('express')
var app = express()
var path = require('path')
var mysql = require('mysql');
const unirest = require('unirest')
const TOKEN_URL = 'https://api-sandbox.safetrek.io/v1/alarms'

const token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5FWTBPVVV3TVRSRU5qUTRSVUZDTkVJd01rUTBSVEUwUVRJMFF6ZzRSVGc1T0RBMFJEWXhOUSJ9.eyJodHRwOi8vY2xpZW50LW5hbWUiOiJIQUNLX1VWQSIsImlzcyI6Imh0dHBzOi8vbG9naW4tc2FuZGJveC5zYWZldHJlay5pby8iLCJzdWIiOiJzbXN8NWFiNzFmZjlhNjgwM2E5MTkxMWU3ODNkIiwiYXVkIjpbImh0dHBzOi8vYXBpLXNhbmRib3guc2FmZXRyZWsuaW8iLCJodHRwczovL3NhZmV0cmVrLXNhbmRib3guYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTUyMTk1NDI0NywiZXhwIjoxNTIxOTkwMjQ3LCJhenAiOiJtNXFYRjV6dE9kVDRjZFF0VWJaVDJnckJoRjE4N3Z3NiIsInNjb3BlIjoib3BlbmlkIHBob25lIG9mZmxpbmVfYWNjZXNzIn0.SSaNKxAofJu7AKkA_KaozSBkBFnksjziaLyH2cF1ineBqR_7aYC4i21Z42SmGRPBt5zuk4pddyk9I2uzkSQC2fbKhowZvFQ5lwTxtoKFUBB2vUKvJLxK4epOIFfwNUGs57NHkHmRlVX0ZDE4TsfwSo_5lff7GSfQmuBMIfaOVa4i_S3SaNF0QbC_ggFf2DZEngFUggQSr85Ag6dM0bUwkQmFAgefmUyVIlzw9xjZ0af9GIGTUoBjjR_Xpn223flGsKfmAEtXifVHw7Hac_UGFJ-RaMUpsRuBIuqSyjfgGo9yGXUnfLssoPg-ELH9VAVuYBLVcieeEGWLqtzCNVV6Ew"


app.use(express.static(path.join(__dirname,"public")))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Queries Database
app.get('/all', function(req, res){
	var con = mysql.createConnection({
		host: "35.231.114.23",
		user: "crimecast",
		password: "badboi",
		database: "crime"
	});
	con.connect();
	con.query("select * from crime", function(err, result, fields){
		if(err)throw err;
		res.send(result);
		console.log("Queryed /all");
		console.log(result);
	});
});

//Add Report to crime db
app.get('/report', function(req,res){
	var query = req.query;
	var con = mysql.createConnection({
		host: "35.231.114.23",
		user: "crimecast",
		password: "badboi",
		database: "crime"
	});
	con.connect();
	let qstring = "insert into crime values(now(), "+query.lat+"," +query.lng +",\""+ query.type+ "\")";
	console.log(qstring);

	con.query(qstring, function(err, result, fields){
		if(err)throw err;
		console.log("Added into DB:");
		console.log(query);
	});
})

//SafeTrek Alert
app.get('/help', function(req, res){
	//Send POST request
	var query = req.query;
	console.log(query.police, query.fire, query.med, query.lat, query.lng);
	
	unirest.post(TOKEN_URL)
       .headers({'Authorization': token, 'Content-Type': 'application/json'})
       .send({
    		"services":{
				"police": req.query.police=='true',
				"fire": req.query.fire=='true',
				"medical":req.query.med=='true'
			},        
			"location.coordinates": {
		    	 "lat": parseFloat(req.query.lat),
   				 "lng": parseFloat(req.query.lng),
     			 "accuracy": 5
   			 }
	    })
       .end((response) => {
			console.log(response.body.id);
			res.send(response.body.id);
		});
	
});



app.listen(8080)
console.log('CrimeCast Backend on 8080');
