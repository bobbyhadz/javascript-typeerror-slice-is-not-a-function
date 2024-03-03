// TypeError: slice is not a function in JavaScript

// EXAMPLE 1 - Convert the value to the correct type before calling `slice()`

// ✅ convert to String before calling slice()
const num = 9876;
const result1 = num.toString().slice(2);
console.log(result1); // 👉️ "76"

// ✅ convert to array before calling slice()
const set = new Set(['a', 'b', 'c']);
const result2 = Array.from(set).slice(2);
console.log(result2); // 👉️ ['c']

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if the value is of the correct type before calling `slice`

// // ✅ check if STRING before calling slice()
// const num = 9876;
// const result1 = typeof num === 'string' ? num.slice(2) : '';
// console.log(result1); // 👉️ ""

// // ✅ check if ARRAY before calling slice()
// const set = new Set(['a', 'b', 'c']);
// const result2 = Array.isArray(set) ? set.slice(2) : [];
// console.log(result2); // 👉️ []

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using a simple `if` statement

// // ✅ check if STRING before calling slice()

// const num = 9876;

// let result1 = '';

// if (typeof num === 'string') {
//   result1 = num.slice(2);
// } else {
//   console.log('The value is not a string');
// }

// console.log(result1);

// // -----------------------------------------------

// // ✅ check if ARRAY before calling slice()
// const set = new Set(['a', 'b', 'c']);

// let result2 = [];

// if (Array.isArray(set)) {
//   result2 = set.slice(2);
// } else {
//   console.log('The value is not an array');
// }

// console.log(result2); // 👉️ []

// ------------------------------------------------------------------

// // EXAMPLE 4 - Accessing a property on an object before calling `slice()`

// const obj = {
//   name: 'bobbyhadz.com',
//   letters: ['a', 'b', 'c', 'd'],
// };

// // ✅ access string property
// const result1 = obj.name.slice(0, 5);
// console.log(result1); // 👉️ 'bobby'

// // ✅ access array property
// const result2 = obj.letters.slice(2);
// console.log(result2); // 👉️ ['c', 'd']
