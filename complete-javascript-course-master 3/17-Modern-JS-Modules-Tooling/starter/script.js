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
/*
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('orange', 10);
add('apples', 12);

console.log(cart);
*/

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
