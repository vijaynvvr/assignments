const fs = require('fs');

fs.readFile('./week-2/01-async-js/easy/demo.txt', 'utf-8', function(err, data) {
    console.log(data);
});