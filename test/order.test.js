
const Order = require('../order/order');
const User = require('../user/user');

describe('Test Create new order method', function () {
    test('Test create new order when user do not exist', function () {
        let mary = new User('mary', 'mary@gmail.com', 'pass', 'user');
        mary.saveNewUser();
        let createOrder = Order.createOrder(50, ['egg', 'bread', 'sadin']);
        expect(createOrder).toBe('User do not exist :(');
    });
});

describe('Test Create new order method', function () {
    test('Test create new order', function () {
        let mary = new User('mary', 'mary@gmail.com', 'pass', 'user');
        mary.saveNewUser();
        let createOrder = Order.createOrder(1, ['egg', 'bread', 'sadin']);
        expect(createOrder).toBe('Order created successfully');
    });
});

describe('Test Create new order method', function () {
    test('Test create new order with no data', function () {
        let mary = new User('mary', 'mary@gmail.com', 'pass', 'user');
        mary.saveNewUser();
        let createOrder = Order.createOrder();
        expect(createOrder).toBe('Invalid credentials!');
    });
});

describe('Test Create new order method', function () {
    test('Test create new order user id only', function () {
        let mary = new User('mary', 'mary@gmail.com', 'pass', 'user');
        mary.saveNewUser();
        let createOrder = Order.createOrder(1);
        expect(createOrder).toBe('Invalid credentials!');
    });
});

describe('Test Read order by Id method', function () {
    test('Test Read order with id & admin', function () {
        let mary = new User('mary', 'mary@gmail.com', 'pass', 'user');
        mary.saveNewUser();
        Order.createOrder(1, ['egg', 'bread', 'sadin']);
        let readOrderById = Order.orderAction.readOrderById(1, 'admin');
        expect(readOrderById).toBeDefined();
    });
});

describe('Test Read order by Id method', function () {
    test('Test Read order with id that do not exist', function () {
        let mary = new User('mary', 'mary@gmail.com', 'pass', 'user');
        mary.saveNewUser();
        Order.createOrder(1, ['egg', 'bread', 'sadin']);
        let readOrderById = Order.orderAction.readOrderById(9, 'admin');
        expect(readOrderById).toBe('Item do not exist!');
    });
});

describe('Test Read order by Id method', function () {
    test('Test Read order with id only', function () {
        let mary = new User('mary', 'mary@gmail.com', 'pass', 'user');
        mary.saveNewUser();
        Order.createOrder(1, ['egg', 'bread', 'sadin']);
        let readOrderById = Order.orderAction.readOrderById(1);
        expect(readOrderById).toBe('Invalid credentials');
    });
});

describe('Test Read order by Id method', function () {
    test('Test Read order with no params', function () {
        let mary = new User('mary', 'mary@gmail.com', 'pass', 'user');
        mary.saveNewUser();
        Order.createOrder(1, ['egg', 'bread', 'sadin']);
        let readOrderById = Order.orderAction.readOrderById(1);
        expect(readOrderById).toBe('Invalid credentials');
    });
});


describe('Test Read all order method', function () {
    test('Test Read all order with admin', function () {
        let mary = new User('mary', 'mary@gmail.com', 'pass', 'user');
        mary.saveNewUser();
        Order.createOrder(1, ['egg', 'bread', 'sadin']);
        Order.createOrder(1, ['cassava', 'coco', 'abacha']);
        let readAllOrder = Order.orderAction.readAllOrder('admin');
        expect(readAllOrder).toBeDefined();
    });
});

describe('Test Read all order method', function () {
    test('Test Read all order with user access', function () {
        let mary = new User('mary', 'mary@gmail.com', 'pass', 'user');
        mary.saveNewUser();
        Order.createOrder(1, ['egg', 'bread', 'sadin']);
        Order.createOrder(1, ['cassava', 'coco', 'abacha']);
        let readAllOrder = Order.orderAction.readAllOrder('user');
        expect(readAllOrder).toBe('Invalid credentials!');
    });
});

describe('Test Read all order method', function () {
    test('Test Read all order with no access', function () {
        let mary = new User('mary', 'mary@gmail.com', 'pass', 'user');
        mary.saveNewUser();
        Order.createOrder(1, ['egg', 'bread', 'sadin']);
        Order.createOrder(1, ['cassava', 'coco', 'abacha']);
        let readAllOrder = Order.orderAction.readAllOrder();
        expect(readAllOrder).toBe('Invalid credentials!');
    });
});

describe('Test Update order method', function () {
    test('Test update order', function () {
        let mary = new User('mary', 'mary@gmail.com', 'pass', 'user');
        mary.saveNewUser();
        Order.createOrder(1, ['egg', 'bread', 'sadin']);
        Order.createOrder(1, ['cassava', 'coco', 'abacha']);
        let updateOrder = Order.orderAction.updateOrder(1, {
            id: 1,
            user_id: 1,
            dateOfOrder: '2019-3-1',
            timeOfOrder: '9:19:11',
            product: ['kunu', 'qwaba', 'donkuwa']
        }, 'admin');
        expect(updateOrder).toBe('Update successfully!');
    });
});

describe('Test Update order method', function () {
    test('Test update order with order that do not exist', function () {
        let mary = new User('mary', 'mary@gmail.com', 'pass', 'user');
        mary.saveNewUser();
        Order.createOrder(1, ['egg', 'bread', 'sadin']);
        Order.createOrder(1, ['cassava', 'coco', 'abacha']);
        let updateOrder = Order.orderAction.updateOrder(20, {
            id:1,
            user_id: 1,
            dateOfOrder: '2019-3-1',
            timeOfOrder: '9:19:11',
            product: ['kunu', 'qwaba', 'donkuwa']
        }, 'admin');
        expect(updateOrder).toBe('Item do not exist!');
    });
});

describe('Test Update order method', function () {
    test('Test update order with user access', function () {
        let mary = new User('mary', 'mary@gmail.com', 'pass', 'user');
        mary.saveNewUser();
        Order.createOrder(1, ['egg', 'bread', 'sadin']);
        Order.createOrder(1, ['cassava', 'coco', 'abacha']);
        let updateOrder = Order.orderAction.updateOrder(7, {
            id:1,
            user_id: 1,
            dateOfOrder: '2019-3-1',
            timeOfOrder: '9:19:11',
            product: ['kunu', 'qwaba', 'donkuwa']
        }, 'user');
        expect(updateOrder).toBe('Invalid credentails');
    });
});

describe('Test Delete By Id method', function () {
    test('Test Delete order, pass id and access', function () {
        let mary = new User('mary', 'mary@gmail.com', 'pass', 'user');
        mary.saveNewUser();
        Order.createOrder(1, ['egg', 'bread', 'sadin']);
        Order.createOrder(1, ['cassava', 'coco', 'abacha']);
        let updateOrder = Order.orderAction.deleteOrderById(1, 'admin');
        expect(updateOrder).toBe('Delete successfully!');
    });
});

describe('Test Delete By Id method', function () {
    test('Test Delete order with wrong id', function () {
        let mary = new User('mary', 'mary@gmail.com', 'pass', 'user');
        mary.saveNewUser();
        Order.createOrder(1, ['egg', 'bread', 'sadin']);
        Order.createOrder(1, ['cassava', 'coco', 'abacha']);
        let updateOrder = Order.orderAction.deleteOrderById(40, 'admin');
        expect(updateOrder).toBe('Item do not exist!');
    });
});

describe('Test Delete By Id method', function () {
    test('Test Delete order with wrong id', function () {
        let mary = new User('mary', 'mary@gmail.com', 'pass', 'user');
        mary.saveNewUser();
        Order.createOrder(1, ['egg', 'bread', 'sadin']);
        Order.createOrder(1, ['cassava', 'coco', 'abacha']);
        let updateOrder = Order.orderAction.deleteOrderById(1, 'user');
        expect(updateOrder).toBe('Invalid credentials!');
    });
});

describe('Test Delete All order method', function () {
    test('Test Delete all order with admin access', function () {
        let mary = new User('mary', 'mary@gmail.com', 'pass', 'user');
        mary.saveNewUser();
        Order.createOrder(1, ['egg', 'bread', 'sadin']);
        Order.createOrder(1, ['cassava', 'coco', 'abacha']);
        let updateOrder = Order.orderAction.deleteAllOrder('admin');
        expect(updateOrder).toBe('Delete all record successfully!');
    });
});

describe('Test Delete All order method', function () {
    test('Test Delete all order without admin access', function () {
        let mary = new User('mary', 'mary@gmail.com', 'pass', 'user');
        mary.saveNewUser();
        Order.createOrder(1, ['egg', 'bread', 'sadin']);
        Order.createOrder(1, ['cassava', 'coco', 'abacha']);
        let updateOrder = Order.orderAction.deleteAllOrder('user');
        expect(updateOrder).toBe('Invalid credentials!');
    });
});

describe('Test Delete All order method', function () {
    test('Test Delete all order with no data', function () {
        let mary = new User('mary', 'mary@gmail.com', 'pass', 'user');
        mary.saveNewUser();
        Order.createOrder(1, ['egg', 'bread', 'sadin']);
        Order.createOrder(1, ['cassava', 'coco', 'abacha']);
        let updateOrder = Order.orderAction.deleteAllOrder();
        expect(updateOrder).toBe('Invalid credentials!');
    });
});