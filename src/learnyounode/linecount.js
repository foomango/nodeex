var fs = require('fs');

var filePath = process.argv[2];
var buf = fs.readFileSync(filePath);
var str = buf.toString();
var lines = str.split('\n').length - 1;
console.log(lines);
