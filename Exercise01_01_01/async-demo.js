var fs = require('fs');
function phoneNumber(err, data) {
    console.log('data: ', data);
}

fs.readdir('../', phoneNumber);
console.log("This Code is last");