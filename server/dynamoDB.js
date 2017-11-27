const credentials = {
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  region: 'us-east-1'
};

var dynasty = require('dynasty')(credentials);

exports.Skills = dynasty.table('Skills');
