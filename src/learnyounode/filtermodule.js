var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, function (err, list) {
        if (err) {
            callback(err);
        } else {
            var result = [];
            list.forEach(function (fileName) {
                if (path.extname(fileName) === '.' + ext) {
                    result.push(fileName);
                }
            });

            callback(null, result);
        }
    });
};
