const fs = require('fs');

fs.readFile('demo.txt', 'utf8', function(err, data) {
    console.log(data);
})

for(let i = 0; i < 1000000000000; i++) continue;
