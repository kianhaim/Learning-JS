/// Exporting Module
console.log(`Exporting Module`);

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product}  added to the cart`);
};

const totalPrice = 230;
const totalQuantity = 10;

export { totalPrice, totalQuantity as tq };
