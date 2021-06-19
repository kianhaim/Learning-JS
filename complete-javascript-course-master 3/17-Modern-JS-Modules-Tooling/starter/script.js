'use strict';
console.log('Importing Module');

// Importing Module
//import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
//console.log(price, tq);
//addToCart('bread', 5);

/////////////////////////////////////////

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// Do not mix default and named exports
//import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('orange', 10);
add('apples', 12);

console.log(cart);
