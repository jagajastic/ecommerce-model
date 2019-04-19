const fs = require('fs');
const db = require('./db');

console.log('Welcome to my ecommerce app\n Running...');

function User(username, email, password, access) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.access = access;

}

function Admin(username, email, password, access) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.access = access;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype = {
    constructor: Admin,
    readAllUser: function (access) {
        if (access === 'admin') {
            console.log(db.users);
        } else {
            console.log('Invalid credentials!');
        }
    },
    deleteSingleUser: function (id, access) {
        if (typeof id === 'number' && access === 'admin') {
            let foundIndex = db.users.findIndex(eachObject => eachObject.id === id);
            let removedUser = db.users.splice(foundIndex, 1);
            console.log(db.users);
        } else {
            console.log('Invalid credentials');
        }

    },
    deleteAllUser: function (access) {
        if (access === 'admin') {
            db.users = [];
            console.log(db.users);
        } else {
            console.log('Invalid credentials')
        }
    }

}
User.prototype = {
    constructor: User,
    saveNewUser: function () {

        if (this.access === 'user') {
            let id = null;
            db.users.length ? id = db.users[db.users.length - 1].id + 1 : id = 1;
            db.users.push({ id: id, username: this.username, email: this.email, password: this.password });
        } else if (this.access === 'admin') {
            let id = null;
            db.admin.length ? id = db.admin[db.admin.length - 1].id + 1 : id = 1;
            db.admin.push({ id: id, username: this.username, email: this.email, password: this.password });
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
            }
            return 'User not found :(';
        } else if (typeof id === 'number' && access === 'admin') {
            for (let i = 0; i < db.admin.length; i++) {
                if (db.admin[i].id === id) {
                    return [db.admin[i], 'admin'];
                }
            }
            return 'User not found :(';
        } else {
            return 'Id/access is incorrect';
        }
    },
    updateUser: function (id, access, object) {

        let userToEdit = this.readSingleUser(id, access);
        if (userToEdit[0] === 'User not found :(') {
            return 'Such user do not exist';
        } else if (userToEdit[1] === 'user') {
            object.id = id;
            let foundIndex = db.users.findIndex(eachObject => eachObject.id === object.id);
            db.users[foundIndex] = object;
        } else if (userToEdit[1] === 'admin') {
            object.id = id;
            let foundIndex = db.admin.findIndex(eachObject => eachObject.id === object.id);
            db.admin[foundIndex] = object;
        }
    },
    searchUser: function (search, access) {

        if (access === 'user' && search) {
            let searchResult = db.users.findIndex(eachObject => eachObject.username === search);
            if (db.users[searchResult] === undefined) {
                return console.log('User do not exist');
            }
            return typeof db.users[searchResult];
        } else {
            return console.log('Invalid credentials');
        }

    }
};

// let mary = new User('mary', 'mary@gmail.com', 'password', 'user');
// mary.saveNewUser();
// User.prototype.readSingleUser(3, 'user');
// console.log(db);
// User.prototype.updateUser(1, 'user', { username: 'on', email: 'on@gmail.com', password: 'onlaw' });
// User.prototype.searchUser('mary', 'user');
// Admin.prototype.deleteSingleUser(1, 'admin');
// Admin.prototype.readAllUser('admin');
// Admin.prototype.deleteAllUser('admin');
// console.log(db);

module.exports = User;
module.exports = Admin;