var http = require('http');

var results = [];
var count = 3;

for (var i = 0; i < 3; i++) {
    results[i] = '';

    // override i from parent closure
    (function (i) {
        http.get(process.argv[2 + i], function (response) {
            response.setEncoding('utf8');

            response.on('data', function (data) {
                results[i] += data;
            });

            response.on('end', function () {
                count--;
            });
        });
    }(i));
}

var interval = setInterval(function () {
    if (count === 0) {
        clearInterval(interval);
        for (var i = 0; i < results.length; i++) {
            console.log(results[i]);
        }
    }
}, 200);
