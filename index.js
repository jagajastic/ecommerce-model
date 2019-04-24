const User = require('./user/user');
const db = require('./db');
const Order = require('./order/order')
const Admin = require('./admin/admin');


// User privilege
let mary = new User('mary', 'mary@gmail.com', 'password', 'user');
mary.saveNewUser();
console.log(db);

console.log(mary.readSingleUser(1));

console.log(mary.updateUser(1, 'user',
    { username: 'todd', email: 'tood@gmail.com', password: 'toddopo' }));
console.log(db);

console.log(mary.searchUser('to'));

// Admin privilege
let Alu = new Admin('Alu', 'Alu@gmail.com', 'password', 'admin');
Alu.saveNewUser();
console.log(db);

console.log(Alu.deleteSingleUser(1, 'admin'));
console.log(db);

console.log(Alu.updateUser(2, 'user',
    { username: 'edited', email: 'edited@gmail.com', password: 'editedpassword' }));
console.log(db);

console.log(Alu.readSingleUser(2));

console.log(Alu.deleteAllUser('admin'));


// create order 
let david = new Admin('david', 'david@gmail.com', 'davidpassword', 'user');
david.saveNewUser();
console.log(Order.createOrder(1, ['egg', 'bread', 'sadin']));
console.log(Order.createOrder(1, ['yam', 'beans', 'stew']));
console.log(db.store);

console.log(Order.orderAction.readOrderById(2, 'admin'));

console.log(Order.orderAction.readAllOrder('admin'));

//  update 
// Order.createOrder(1, ['egg', 'bread', 'sadin']);
Order.createOrder(1, ['cassava', 'coco', 'abacha']);
console.log(Order.orderAction.updateOrder(1, {
    id: 1,
    user_id: 1,
    dateOfOrder: '2019-3-1',
    timeOfOrder: '9:19:11',
    product: ['kunu', 'qwaba', 'donkuwa']
}, 'admin'));
console.log(db.store);


 // delete

 console.log(Order.orderAction.deleteOrderById(1, 'admin'));
 console.log(db.store);

//   delete all

console.log(Order.orderAction.deleteAllOrder('admin'));
console.log(db);