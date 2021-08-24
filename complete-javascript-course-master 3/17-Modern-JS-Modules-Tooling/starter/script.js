'use strict';

import { addToCart, shippingCost } from './shoppingCart.js';

console.log('Importing Module');

// Importing Module
//import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
//console.log(price, tq);
//addToCart('bread', 5);

///////////////////////////////////////// ES 6 Module Import and Export ///////////////////

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
/*
////////////// Old way to implement Modules /////////////////////////////

const ShoppingCart2 = (function () {
  const shippingCost = 10;
  const cart = [];
  const totalPrice = 230;
  const totalQuantity = 10;

  const addToCart = function (product, quantity) {
    cart.push(product, quantity);
    console.log(`${quantity} ${product}  added to the cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} order from supllier`);
  };

  return {
    addToCart,
    cart,
    totalQuantity,
    totalPrice,
    orderStock,
    //shippingCost,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 5);

console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);

////////////////Node Js/ Common Module ////////////////////////

// Export

// export.addToCart = function (product, quality) {
//     cast.push({product, quality});
//     console.log(`${quality} ${product} added tp cart (shipping cost is ${ shippingCost})`)
// };

// Import
//const {addToCart} = require('./shoppingCart.js')


*/
///////////////// Introdution to NPM ////////////////////////////////

//import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 10 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
//// Lodash clone didnt change
console.log(stateDeepClone);

//// Load parts that are changed ///

if (module.hot) {
  module.hot.accept();
}
