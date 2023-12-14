const fs = require('fs');

fs.readFile('demo.txt', 'utf8', function(err, data) {
    fs.writeFile('demo2.txt', data, function (err) {
        if (err) throw err;
    });
})