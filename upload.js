// Upload a file in a managed way.
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
  Body: fs.createReadStream('./test-data/sample.txt'),
  ACL: 'public-read'
};

s3.upload(params, function (err, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Successfully uploaded file! :)');
  console.log('URL =', data.Location);
  console.log('Bucket =', data.Bucket);
  console.log('Key =', data.Key);
  console.log('Path =', data.Bucket + '/' + data.Key);
});
