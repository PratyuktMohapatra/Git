let fruits = ['apple', 'orange', 'banana'];
console.log('Original array:', fruits);

fruits.push('grape');
console.log('After push:', fruits);

let poppedFruit = fruits.pop();
console.log('After pop:', fruits, 'Popped element:', poppedFruit);

let greeting = 'Hello, World!';
console.log('Original string:', greeting);

console.log('Uppercase:', greeting.toUpperCase());
console.log('Sliced:', greeting.slice(0, 5));

let number = 42.5678;
console.log('Original number:', number);
console.log('Rounded:', Math.round(number));

let stringNumber = '123.45';
console.log('Parsed number:', parseFloat(stringNumber));
