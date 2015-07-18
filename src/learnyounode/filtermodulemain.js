var filter = require('./filtermodule.js');

filter(process.argv[2], process.argv[3], function (err, data) {
    if (err) {
        console.log(err);
    } else {
        data.forEach(function (fileName) {
            console.log(fileName);
        });
    }
});
