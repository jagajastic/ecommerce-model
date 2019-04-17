const fs = require('fs');
const db = require('./db.json');

console.log('Welcome to my ecommerce app\n Running...');

function createNewUser(username, email, password, access) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.access = access;

}

createNewUser.prototype = {
    constructor: createNewUser,
    saveNewUser: function () {
        if (this.access === 'user') {
            let id = null;
            db.users.length ? id = db.users[db.users.length - 1].id + 1 : id = 1;
            db.users.push({ id: id, username: this.username, email: this.email, password: this.password });
            let json = JSON.stringify(db);
            fs.writeFileSync('db.json', json, 'utf8');
        } else if (this.access === 'admin') {
            let id = null;
            db.admin.length ? id = db.admin[db.admin.length - 1].id + 1 : id = 1;
            db.admin.push({ id: id, username: this.username, email: this.email, password: this.password });
            let json = JSON.stringify(db);
            fs.writeFileSync('db.json', json, 'utf8');
        } else {
            console.log('please access argument is needed :(');
        }
    },
    readSingleUser: function (id, access) {
        if (typeof (id) === 'number' && access === 'user') {
            db.users.map(user => user.id === id ? console.log(user): 'User not found');
        }else if(typeof (id) === 'number' && access === 'admin') {
            db.admin.map(admin => admin.id === id ? console.log(admin): 'Admin not found');
        }
    }
};

let mary = new createNewUser('mary', 'mary@gmail.com', 'password', 'user');
mary.saveNewUser();
createNewUser.prototype.readSingleUser(1, 'admin');