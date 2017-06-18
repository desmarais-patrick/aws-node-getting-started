// List objects, but no download.

var config = require('./config.json');

var AWS = require('aws-sdk');

var bucket = config['bucket'];

var s3Config = {
  apiVersion: '2006-03-01',
  params: {Bucket: bucket}
};
var s3 = new AWS.S3(s3Config);

var prefix = '';
var params = {
  Prefix: prefix
};
s3.listObjects(params, function (err, data) {
  if (err) {
    console.log(err);
    return;
  }

  var href = this.request.httpRequest.endpoint.href;
  data.Contents.forEach(function (object, index) {
    console.log("Object #", index + 1);
    console.log("link =", href + bucket + "/" + object.Key);
    console.log("bucket =", bucket);
    console.log("prefix =", prefix);
    console.log("key =", object.Key);
    console.log("object =", object);
    console.log("-----------------------\n");
  });
});
