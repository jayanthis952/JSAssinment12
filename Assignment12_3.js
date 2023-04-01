// Take input from user
let arr = prompt("Enter an array of numbers separated by commas:").split(",").map(Number);

// Using map to square the elements of the original array
let squaredArr = arr.map(num => num * num);

// Display the new squared array
console.log(squaredArr);

// Using map to create a mapping for the squared array
let mapping = squaredArr.map(num => num);

// Display the mapping for the squared array
console.log(mapping);
