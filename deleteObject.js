// Delete one object.

var config = require('./config.json');

var AWS = require('aws-sdk');

var bucket = config['bucket'];
var key = 'sample.png';

var s3Config = {
  apiVersion: '2006-03-01',
  params: {Bucket: bucket}
};
var s3 = new AWS.S3(s3Config);

var params = {
  Key: key
};
s3.deleteObject(params, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Successfully deleted ' + bucket + '/' + key);
});
