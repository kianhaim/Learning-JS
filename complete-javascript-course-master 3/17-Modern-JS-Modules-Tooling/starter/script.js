'use strict';

// Importing Module
import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

console.log('Importing Module');

addToCart('bread', 5);

console.log(price, tq);
