// Checks if object exists through headObject.
var config = require('./config.json');

var AWS = require('aws-sdk');

var bucket = config['bucket'];
var key = 'hello_world2.txt';

var s3Config = {
  apiVersion: '2006-03-01',
  params: {Bucket: bucket}
};
var s3 = new AWS.S3(s3Config);

var params = {
  Key: key
};
s3.headObject(params, function (err) {
  if (err) {
    if (err.code === 'NotFound') {
      console.log(bucket + '/' + key + ' does not exist. :(');
      return;
    }

    console.log(err);
    return;
  }

  console.log(bucket + '/' + key + ' exists! :)');
});
