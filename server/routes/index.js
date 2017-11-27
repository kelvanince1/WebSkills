var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');

let {Skills} = require('../dynamoDB');

AWS.config.update({
  region: "us-east-1"
});


var docClient = new AWS.DynamoDB.DocumentClient();

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/skills');
});

router.get('/skills', function(req, res, next) {
  Skills
    .scan()
    .then(data => res.send(data))
    .catch(err => console.log(err));
});

// The router.use method can be used to define middleware
// In this case, we are using a :UserId variable which is defined by the url
// path extension. This correlates to the partition key in DynamoDB, and it
// is this variable which our Query looks for.
router.get('/skills/:username', function(req, res) {
  const username = req.params.username;
  var params = {
    TableName : "Skills",
    KeyConditionExpression: "username = :v1",
    ExpressionAttributeValues: {
        ":v1":username
      }
    };
  docClient.query(params, function(err, data) {
    if(err) {
      console.log(err, err.stack);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
