const User = require('./user');

describe('Test user creation method', function () {
    test('Test user creation if it work correctly', function () {
        let mary = new User('mary', 'mary@gmail.com', 'password', 'user');
        let result = mary.saveNewUser();
        expect(result).toBe(1);
    });
});

describe('Test user creation method', function () {
    test('Test user creation when no argument is passed in the constructor', function () {
        let mary = new User();
        let result = mary.saveNewUser();
        expect(result).toBe('Please access, and argument is needed :(');
    });
});

describe('Test read Single User method', function () {
    test('Test read single user if id(number) is number', function () {
        let mary = new User('mary', 'mary@gmail.com', 'password', 'user');
        mary.saveNewUser();
        let findResult = mary.readSingleUser(1);
        expect(findResult).toMatchObject(
            {
                id: 1,
                username: 'mary',
                email: 'mary@gmail.com',
                password: 'password'
            }
        )
    });
});

describe('Test read Single User method', function () {
    test('Test read single user if string is pass as id', function () {
        let mary = new User('mary', 'mary@gmail.com', 'password', 'user');
        mary.saveNewUser();
        let findResult = mary.readSingleUser('1');
        expect(findResult).toBe('Invalid credentials');
    });
});

describe('Test read Single User method', function () {
    test('Test read single user if id do not exist in db', function () {
        let mary = new User('mary', 'mary@gmail.com', 'password', 'user');
        mary.saveNewUser();
        let findResult = mary.readSingleUser(10);
        expect(findResult).toBe('User not found :(');
    });
});

describe('Test read Single User method', function () {
    test('Test read single user when noting is pass as an argument', function () {
        let mary = new User('mary', 'mary@gmail.com', 'password', 'user');
        mary.saveNewUser();
        let findResult = mary.readSingleUser();
        expect(findResult).toBe('Invalid credentials');
    });
});

describe('Test update User method', function () {
    test('Test update user with correct id, and data', function () {
        let mary = new User('mary', 'mary@gmail.com', 'password', 'user');
        mary.saveNewUser();
        let updateResult = mary.updateUser(1, 'user',
            { username: 'on', email: 'on@gmail.com', password: 'password' });
        expect(updateResult).toBe(1);
    });
});

describe('Test update User method', function () {
    test('Test update user with incorrect id', function () {
        let mary = new User('mary', 'mary@gmail.com', 'password');
        mary.saveNewUser();
        let updateResult = mary.updateUser(9, 'user',
            { username: 'on', email: 'on@gmail.com', password: 'password' });
        expect(updateResult).toBe('Such user do not exist or Invalid credentials');
    });
});

describe('Test update User method', function () {
    test('Test update user with string as id', function () {
        let mary = new User('mary', 'mary@gmail.com', 'password');
        mary.saveNewUser();
        let updateResult = mary.updateUser('9', 'user',
            { username: 'on', email: 'on@gmail.com', password: 'password' });
        expect(updateResult).toBe('Such user do not exist or Invalid credentials');
    });
});

describe('Test update User method', function () {
    test('Test update user with no user data', function () {
        let mary = new User('mary', 'mary@gmail.com', 'password');
        mary.saveNewUser();
        let updateResult = mary.updateUser(1, 'user');
        expect(updateResult).toBe('Updated value is empty');
    });
});

describe('Test update User method', function () {
    test('Test update user no data atall', function () {
        let mary = new User('mary', 'mary@gmail.com', 'password');
        mary.saveNewUser();
        let updateResult = mary.updateUser();
        expect(updateResult).toBe('Such user do not exist or Invalid credentials');
    });
});


describe('Test search user method', function () {
    test('Test search with no data', function () {
        let mary = new User('mary', 'mary@gmail.com', 'password', 'user');
        mary.saveNewUser();
        let tolu = new User('tolu', 'tolu@gmail.com', 'password', 'user');
        tolu.saveNewUser();
        let updateResult = tolu.searchUser();
        expect(updateResult).toBeFalsy();
    });
});

describe('Test search user method', function () {
    test('Test search with data that do not exist', function () {
        let mary = new User('mary', 'mary@gmail.com', 'password', 'user');
        mary.saveNewUser();
        let tolu = new User('tolu', 'tolu@gmail.com', 'password', 'user');
        tolu.saveNewUser();
        let updateResult = tolu.searchUser('kalitun');
        expect(updateResult).toBeFalsy();
    });
});

describe('Test search user method', function () {
    test('Test search with data that exist', function () {
        let mary = new User('mary', 'mary@gmail.com', 'password');
        mary.saveNewUser();
        let tolu = new User('tolu', 'tolu@gmail.com', 'password');
        tolu.saveNewUser();
        let updateResult = tolu.searchUser('tolu');
        expect(updateResult).toMatchObject(
            {
                id: 8,
                username: 'tolu',
                email: 'tolu@gmail.com',
                password: 'password'
            }
        );
    });
});

describe('Test search user method', function () {
    test('Test search with  number', function () {
        let mary = new User('mary', 'mary@gmail.com', 'password');
        mary.saveNewUser();
        let tolu = new User('tolu', 'tolu@gmail.com', 'password');
        tolu.saveNewUser();
        let updateResult = tolu.searchUser(5);
        expect(updateResult).toBeFalsy();
    });
});