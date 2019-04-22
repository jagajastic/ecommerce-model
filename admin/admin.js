const User = require('../user/user');
const db = require('../db');


function Admin(username, email, password, access) {
    User.call(this, username, email, password, access);
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.readAllUser = function (access) {
    if (typeof access === 'string' && access === 'admin') {
        return db.users;
    } else {
        return 'Invalid credentials!';
    }
};

Admin.prototype.deleteSingleUser = function (id, access) {
    if (typeof id === 'number' && typeof access === 'string' && access === 'admin') {
        let foundIndex = db.users.findIndex(eachObject => eachObject.id === id);
        let removedUser = db.users.splice(foundIndex, 1);
        return removedUser;
    } else {
        return 'Invalid credentials';
    }

};

Admin.prototype.deleteAllUser = function (access) {
    if (access === 'admin') {
        db.users = [];
        return db.users;
    } else {
        return 'Invalid credentials';
    }
};

module.exports = Admin;