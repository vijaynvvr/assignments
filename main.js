const express = require('express');
const fs = require('fs');


const app = express();

app.get('/', (req, res) => {
    fs.readFile('/01-js', 'utf-8', (err, data) => {
        res.json(data);
        console.log(1);
    });
});

app.listen(3000);