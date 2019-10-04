var fs = require('fs');

const express = require('express');
const app = express();
const fetch = require('node-fetch');
const port = 8080;

app.listen(port, function() {
    console.log('Server listening on localhost:%s', port);
});

app.use('message', function(req, res) {
    console.log('User requested')
})

var data = fetch('https://swapi.co/api/people/')
    .then(res => res.json())
    .then(json => console.log(json));

fs.writeFile('swData.json', JSON.stringify(data), function(err) {
    if (err) {
        console.log(err);
        }
})