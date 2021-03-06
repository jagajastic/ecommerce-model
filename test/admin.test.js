const Admin = require('../admin/admin')
const db = require('../db');

describe('Test Read all user method', function () {
    test('Test read all user with admin access ', function () {
        let mary = new Admin('mary', 'mary@gmail.com', 'password', 'user');
        mary.saveNewUser();
        let tolu = new Admin('tolu', 'tolu@gmail.com', 'password', 'user');
        tolu.saveNewUser();
        let adminReadallUser = tolu.readAllUser('admin');
        expect(adminReadallUser).toContainEqual(
            {
                id: 1,
                username: 'mary',
                email: 'mary@gmail.com',
                password: 'password'
            },
            {
                id: 2,
                username: 'tolu',
                email: 'tolu@gmail.com',
                password: 'password'
            }
        );
    });
});

describe('Test Read all user method', function () {
    test('Test read all user with user access ', function () {
        let mary = new Admin('mary', 'mary@gmail.com', 'password', 'user');
        mary.saveNewUser();
        let tolu = new Admin('tolu', 'tolu@gmail.com', 'password', 'user');
        tolu.saveNewUser();
        let adminReadallUser = tolu.readAllUser('user');
        expect(adminReadallUser).toBe('Invalid credentials!');
    });
});

describe('Test Delete single user method', function () {
    test('Test delete single user with admin access ', function () {
        let mary = new Admin('mary', 'mary@gmail.com', 'password', 'user');
        mary.saveNewUser();
        let tolu = new Admin('tolu', 'tolu@gmail.com', 'password', 'user');
        tolu.saveNewUser();
        let adminDeleteSingleUser = tolu.deleteSingleUser(1, 'admin');
        expect(adminDeleteSingleUser).toMatchObject(
            [{
                id: 1,
                username: 'mary',
                email: 'mary@gmail.com',
                password: 'password'
            }]
        );
    });
});

describe('Test Delete single user method', function () {
    test('Test delete single user with user access ', function () {
        let mary = new Admin('mary', 'mary@gmail.com', 'password', 'user');
        mary.saveNewUser();
        let tolu = new Admin('tolu', 'tolu@gmail.com', 'password', 'user');
        tolu.saveNewUser();
        let adminDeleteSingleUser = tolu.deleteSingleUser(1, 'user');
        expect(adminDeleteSingleUser).toBe('Invalid credentials');
    });
});

describe('Test Delete single user method', function () {
    test('Test delete single user with credentials ', function () {
        let mary = new Admin('mary', 'mary@gmail.com', 'password', 'user');
        mary.saveNewUser();
        let tolu = new Admin('tolu', 'tolu@gmail.com', 'password', 'user');
        tolu.saveNewUser();
        let adminDeleteSingleUser = tolu.deleteSingleUser();
        expect(adminDeleteSingleUser).toBe('Invalid credentials');
    });
});

describe('Test Delete All user method', function () {
    test('Test delete all user with admin access', function () {
        let mary = new Admin('mary', 'mary@gmail.com', 'password', 'user');
        mary.saveNewUser();
        let tolu = new Admin('tolu', 'tolu@gmail.com', 'password', 'user');
        tolu.saveNewUser();
        let adminDeleteAllUser = tolu.deleteAllUser('admin');
        expect(adminDeleteAllUser).toEqual([]);
    });
});

describe('Test Delete All user method', function () {
    test('Test delete all user with user access', function () {
        let mary = new Admin('mary', 'mary@gmail.com', 'password', 'user');
        mary.saveNewUser();
        let tolu = new Admin('tolu', 'tolu@gmail.com', 'password', 'user');
        tolu.saveNewUser();
        let adminDeleteAllUser = tolu.deleteAllUser('user');
        expect(adminDeleteAllUser).toEqual('Invalid credentials');
    });
});


describe('Test Delete All user method', function () {
    test('Test delete all user without credentials', function () {
        let mary = new Admin('mary', 'mary@gmail.com', 'password', 'user');
        mary.saveNewUser();
        let tolu = new Admin('tolu', 'tolu@gmail.com', 'password', 'user');
        tolu.saveNewUser();
        let adminDeleteAllUser = tolu.deleteAllUser('user');
        expect(adminDeleteAllUser).toEqual('Invalid credentials');
    });
});

describe('Test Update user method', function () {
    test('Test Update user with credentials', function () {
        let mary = new Admin('mary', 'mary@gmail.com', 'password', 'user');
        mary.saveNewUser();
        let updateResult = mary.updateUser(1, 'user',
            { username: 'on', email: 'on@gmail.com', password: 'password' });
        expect(updateResult).toBe(1);
    });
});

describe('Test update User method', function () {
    test('Test update user with incorrect id', function () {
        let mary = new Admin('mary', 'mary@gmail.com', 'password');
        mary.saveNewUser();
        let updateResult = mary.updateUser(9, 'user',
            { username: 'on', email: 'on@gmail.com', password: 'password' });
        expect(updateResult).toBe('Such user do not exist or Invalid credentials');
    });
});

describe('Test update User method', function () {
    test('Test update user with string as id', function () {
        let mary = new Admin('mary', 'mary@gmail.com', 'password');
        mary.saveNewUser();
        let updateResult = mary.updateUser('9', 'user',
            { username: 'on', email: 'on@gmail.com', password: 'password' });
        expect(updateResult).toBe('Such user do not exist or Invalid credentials');
    });
});

describe('Test update User method', function () {
    test('Test update user with no user data', function () {
        let mary = new Admin('mary', 'mary@gmail.com', 'password');
        mary.saveNewUser();
        let updateResult = mary.updateUser(1, 'user');
        expect(updateResult).toBe('Updated value is empty');
    });
});