const db = require('./db');

function User(username, email, password, access) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.access = access;

}

User.prototype = {
    constructor: User,
    saveNewUser: function () {

        if (this.access === 'user') {
            let id = null;
            db.users.length ?
                id = db.users[db.users.length - 1].id + 1 : id = 1;
            return db.users.push(
                {
                    id: id,
                    username: this.username,
                    email: this.email,
                    password: this.password
                }
            );
        } else if (this.access === 'admin') {
            let id = null;
            db.admin.length ?
                id = db.admin[db.admin.length - 1].id + 1 : id = 1;
            return db.admin.push(
                {
                    id: id,
                    username: this.username,
                    email: this.email,
                    password: this.password
                });
        } else {
            return 'Please access, and argument is needed :(';
        }
    },
    readSingleUser: function (id) {

        if (typeof (id) === 'number') {
            for (let i = 0; i < db.users.length; i++) {
                if (db.users[i].id === id) {
                    return db.users[i];
                }
            }
            return 'User not found :(';
        } else {
            return 'Invalid credentials';
        }
    },
    updateUser: function (id, access, object) {

        let userToEdit = this.readSingleUser(id, access);
        if (userToEdit === 'User not found :(' || userToEdit === 'Invalid credentials') {
            return 'Such user do not exist or Invalid credentials';
        } else if (access === 'user' && object) {
            object.id = id;
            let foundIndex =
                db.users.findIndex(eachObject => eachObject.id === object.id);
            db.users[foundIndex] = object;
            return 1;
        } else if (access === 'admin' && object) {
            object.id = id;
            let foundIndex =
                db.admin.findIndex(eachObject => eachObject.id === object.id);
            db.admin[foundIndex] = object;
            return 1;
        } else {
            return 'Updated value is empty';
        }
    },
    searchUser: function (search) {

        if (search !== '' || typeof search !== 'string') {
            let searchResult =
                db.users.findIndex(eachObject => eachObject.username === search);
            if (db.users[searchResult] === undefined) {
                return false;
            }
            return db.users[searchResult];
        } else {
            return 'Invalid credentials';
        }

    }
};

module.exports = User;