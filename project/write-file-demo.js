var fs = require('fs');

// var jsonString = '{ "name": "Joe Momma"}';

var jsonString = {
    name: 'Joe Momma'
};

fs.writeFile('data2.json', JSON.stringify(jsonString), function(err) {
    if (err) {
        console.log(err);
    }
})