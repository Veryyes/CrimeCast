const unirest = require('unirest')
const TOKEN_URL = 'https://api-sandbox.safetrek.io/v1/alarms'

const token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5FWTBPVVV3TVRSRU5qUTRSVUZDTkVJd01rUTBSVEUwUVRJMFF6ZzRSVGc1T0RBMFJEWXhOUSJ9.eyJodHRwOi8vY2xpZW50LW5hbWUiOiJIQUNLX1VWQSIsImlzcyI6Imh0dHBzOi8vbG9naW4tc2FuZGJveC5zYWZldHJlay5pby8iLCJzdWIiOiJzbXN8NWFiNzFmZjlhNjgwM2E5MTkxMWU3ODNkIiwiYXVkIjpbImh0dHBzOi8vYXBpLXNhbmRib3guc2FmZXRyZWsuaW8iLCJodHRwczovL3NhZmV0cmVrLXNhbmRib3guYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTUyMTk1NDI0NywiZXhwIjoxNTIxOTkwMjQ3LCJhenAiOiJtNXFYRjV6dE9kVDRjZFF0VWJaVDJnckJoRjE4N3Z3NiIsInNjb3BlIjoib3BlbmlkIHBob25lIG9mZmxpbmVfYWNjZXNzIn0.SSaNKxAofJu7AKkA_KaozSBkBFnksjziaLyH2cF1ineBqR_7aYC4i21Z42SmGRPBt5zuk4pddyk9I2uzkSQC2fbKhowZvFQ5lwTxtoKFUBB2vUKvJLxK4epOIFfwNUGs57NHkHmRlVX0ZDE4TsfwSo_5lff7GSfQmuBMIfaOVa4i_S3SaNF0QbC_ggFf2DZEngFUggQSr85Ag6dM0bUwkQmFAgefmUyVIlzw9xjZ0af9GIGTUoBjjR_Xpn223flGsKfmAEtXifVHw7Hac_UGFJ-RaMUpsRuBIuqSyjfgGo9yGXUnfLssoPg-ELH9VAVuYBLVcieeEGWLqtzCNVV6Ew"

unirest.post(TOKEN_URL)
       .headers({'Authorization': token, 'Content-Type': 'application/json'})
       .send({
    		"services":{
				"police": false,
				"fire": false,
				"medical":true
			},        
			"location.coordinates": {
		    	 "lat": 34.32334,
   				 "lng": -117.3343,
     			 "accuracy": 5
   			 }
	    })
       .end((response) => {
			console.log(JSON.stringify(response));
		});


