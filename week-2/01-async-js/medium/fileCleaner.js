const fs = require('fs');

fs.readFile('data.txt', 'utf-8', (err, data) => {
    console.log(typeof data);
    data = data.split(/ +/g).join(' ').trim();
    fs.writeFile('data.txt', data, (err) => {
        if (err) throw err;
    })
})