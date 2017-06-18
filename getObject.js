// Download one object.
var config = require('./config.json');

var AWS = require('aws-sdk');
var fs = require('fs');

var s3 = new AWS.S3({
  signatureVersion: 'v4'
});

var bucket = config['bucket'];
var key = 'sample.txt';

var params = {
  Bucket: bucket,
  Key: key,
};
s3.getObject(params, function (err, data) {
  if (err) {
    if (err.code === "NoSuchKey") {
      console.log("File not found! :(");
      return;
    }

    console.log(err);
    return;
  }

  console.log('Successfully downloaded file ' + bucket + '/' + key);
  console.log('Length =', data.ContentLength, 'bytes');
  console.log('Last Modified =', data.LastModified);
  console.log('Data =\n```\n', data.Body.toString(), '\n```\n');
});
