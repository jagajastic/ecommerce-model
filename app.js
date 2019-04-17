const fs = require('fs');
const db = require('./db.json');

console.log('Welcome to my ecommerce app...');

let newUser = function (username, email, password) {
    let id = null;
    db.users.length ? id = db.users[db.users.length - 1].id + 1 : id = 1;
    db.users.push({id: id,username: username,email: email,password: password});
    let json = JSON.stringify(db); 
    fs.writeFileSync('db.json', json, 'utf8');
}

newUser('james', 'james@gmail.com', 'password');
console.log(db);