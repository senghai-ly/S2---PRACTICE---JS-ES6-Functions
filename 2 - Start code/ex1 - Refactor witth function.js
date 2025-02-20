// THE CONTEXT
// In the provided code, there's an array named shoppingCart representing a user's shopping cart with items containing 'name', 'price', and 'quantity' properties.
// The current code calculates the total price of items in the shopping cart without using functions.

// THE PROBLEM
// - This code works only for this specific shopping cart. But we want to be able to compute the total price for any shopping cart

// YOUR JOB
// Your task is to refactor the code by extracting the logic for calculating the total price into a reusable function.
// Write a function named calculateTotalPrice that takes the shoppingCart array as a parameter and returns the total price.

// TO CHECK
// Check that your code still produce the same result
// Check that your code can work with many shopping carts

// let shoppingCart = [
//   { name: "Apples", price: 2.5, quantity: 3 },
//   { name: "Bananas", price: 1.5, quantity: 2 },
//   { name: "Oranges", price: 3, quantity: 1 },
// ];

// // Calculate total price without using functions
// let totalPrice = 0;
// for (let item of shoppingCart) {
//   totalPrice += item.price * item.quantity;
// }
// console.log("Total price:", totalPrice);

// Function to calculate total price of any shopping cart
function calculateTotalPrice(cart) {
  let totalPrice = 0;
  for (let item of cart) {
    totalPrice += item.price * item.quantity;
  }
  return totalPrice;
}

// Example usage with the provided shoppingCart
let shoppingCart = [
  { name: "Apples", price: 2.5, quantity: 3 },
  { name: "Bananas", price: 1.5, quantity: 2 },
  { name: "Oranges", price: 3, quantity: 1 },
];

// Calculate total price using the new function
let totalPrice = calculateTotalPrice(shoppingCart);
console.log("Total price:", totalPrice);

// Test with another shopping cart
let anotherShoppingCart = [
  { name: "Milk", price: 1.2, quantity: 4 },
  { name: "Bread", price: 2.0, quantity: 2 },
  { name: "Eggs", price: 0.3, quantity: 12 },
];

let anotherTotalPrice = calculateTotalPrice(anotherShoppingCart);
console.log("Another total price:", anotherTotalPrice);