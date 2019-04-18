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
            for (let i = 0; i < db.users.length; i++) {
                if (db.users[i].id === id) {
                    return [db.users[i], 'user'];
                }
                return 'User not found :(';
            }
        } else if (typeof id === 'number' && access === 'admin') {
            for (let i = 0; i < db.admin.length; i++) {
                if (db.admin[i].id === id) {
                    return [db.admin[i], 'admin'];
                }
                return 'User not found :(';
            }
        } else {
            return 'Id/access is incorrect';
        }
    },
    updateUser: function (id, access, object) {

        let userToEdit = this.readSingleUser(id, access);
        if (userToEdit[0] === 'User not found :(') {
            console.log('Such user do not exist');
            return 'Such user do not exist';
        } else if (userToEdit[1] === 'user') {
            object.id = id;
            let foundIndex = db.users.findIndex(x => x.id == object.id);
            db.users[foundIndex] = object;
            let json = JSON.stringify(db);
            fs.writeFileSync('db.json', json, 'utf8');
        } else if (userToEdit[1] === 'admin') {
            object.id = id;
            let foundIndex = db.admin.findIndex(x => x.id == object.id);
            db.admin[foundIndex] = object;
            let json = JSON.stringify(db);
            fs.writeFileSync('db.json', json, 'utf8');
        }
    }
};

let mary = new createNewUser('mary', 'mary@gmail.com', 'password', 'user');
mary.saveNewUser();
createNewUser.prototype.readSingleUser(1, 'admin');
createNewUser.prototype.updateUser(1, 'admin', { username: 'on', email: 'on@gmail.com', password: 'onlaw' });