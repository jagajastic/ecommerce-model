const fs = require('fs');
const db = require('./db.json');

console.log('Welcome to my ecommerce app...');

let newUser = function (username, email, password) {

    // get the length of the db + 1 and use it as the next id
    let id = null;
    db.users.length ? id = db.users[db.users.length - 1].id + 1 : id = 1;

    // push some data to the db
    db.users.push({id: id,username: username,email: email,password: password});

    // write the db to a file
    let json = JSON.stringify(db); // stringify the db file to json object
    fs.writeFileSync('db.json', json, 'utf8');
}

newUser('james', 'james@gmail.com', 'password');
console.log(db);