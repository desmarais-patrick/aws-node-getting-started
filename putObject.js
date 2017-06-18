// Adds object, but maybe different from upload...not managed?!
var config = require('./config.json');

var AWS = require('aws-sdk');

var s3 = new AWS.S3();

var bucket = config['bucket'];
var key = 'hello_world.txt';

var params = {
  Bucket: bucket,
  Key: key,
  Body: 'Hello World!'
};

s3.putObject(params, function (err, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Successfully uploaded data to " + bucket + "/" + key);
});
