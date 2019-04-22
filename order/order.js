const db = require('../db');
const User = require('../user/user');

function Order() { }

Order.createOrder = function (user_id, product) {
    if(typeof user_id === 'number' && typeof product === 'object' && product.length !== 0){
        let checkIfUserExist = db.users.findIndex(eachObject => eachObject.id === user_id);
        if(typeof checkIfUserExist === 'number' && checkIfUserExist !== -1){
            this.user_id = user_id;
            this.product = product;
            let newDate = new Date();
            let dateOfOrder = newDate.getFullYear() + "-" + newDate.getMonth() + "-" + newDate.getDay();
            let timeOfOrder = newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds();
            let id = null;
            db.store.length ?
                id = db.store[db.store.length - 1].id + 1 : id = 1;
            db.store.push({
                id: id,
                user_id: user_id,
                dateOfOrder: dateOfOrder,
                timeOfOrder: timeOfOrder,
                product: product
            });
        
            return 'Order created successfully';
        }else{
            return 'User do not exist :('
        }
    }else {
        return 'Invalid credentials!';
    }
}

Order.orderAction = {
    readOrderById: function (id, accesss) {
        if (typeof id === 'number' && accesss === 'admin') {
            let findIndexHere = db.store.findIndex(eachObject => eachObject.id === id);
            if (typeof findIndexHere === 'number' && findIndexHere !== -1) {
                return db.store[findIndexHere];
            } else {
                return 'Item do not exist!';
            }
        } else {
            return 'Invalid credentials';
        }
    },
    readAllOrder: function (accesss) {
        if (typeof accesss === 'string' && accesss === 'admin') {
            return db.store;
        } else {
            return 'Invalid credentials!';
        }
    },
    updateOrder: function (id, itemToChangeWithExistingitem, accesss) {
        if (typeof id === 'number' && typeof accesss === 'string' && accesss === 'admin') {
            let findIndexHere = db.store.findIndex(eachObject => eachObject.id === id);
            if (typeof findIndexHere === 'number' && findIndexHere !== -1) {
                db.store[findIndexHere] = itemToChangeWithExistingitem;
                return 'Update successfully!'
            } else {
                return 'Item do not exist!';
            }
        } else {
            return 'Invalid credentails';
        }
    },
    deleteOrderById: function (id, accesss) {
        if (typeof id === 'number' && typeof accesss === 'string' && accesss === 'admin') {
            let findIndexHere = db.store.findIndex(eachObject => eachObject.id === id);
            if (typeof findIndexHere === 'number' && findIndexHere !== -1) {
                db.store.splice(findIndexHere, 1);
                return 'Delete successfully!'
            } else {
                return 'Item do not exist!';
            }
        } else {
            return 'Invalid credentials!';
        }
    },
    deleteAllOrder: function (accesss) {
        if (typeof accesss === 'string' && accesss === 'admin') {
            db.store = [];
            return 'Delete all record successfully!'
        } else {
            return 'Invalid credentials!';
        }
    }
}

module.exports = Order;