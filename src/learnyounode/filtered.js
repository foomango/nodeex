var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var extFilter = '.' + process.argv[3];

fs.readdir(dir, function (err, list) {
    if (err) {
        console.log(err);
    } else {
        for (var i = 0; i < list.length; i++) {
            if (path.extname(list[i]) === extFilter) {
                console.log(list[i]);
            }
        }
    }
});
