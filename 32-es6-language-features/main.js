// Spread operator with arrays
const nums = [1, 2, 3];

const mergedArray = [...nums, 4, 5]; // [1, 2, 3, 4, 5]
// If we don't use the spread operator we end up with a nested array
const nestedArray = [nums, 4, 5]; // [[1, 2, 3], 4, 5]

console.log(mergedArray);

// // We can slice arrays to copy them
// let slicedArray = mergedArray.slice();
// // The spread operator can also be used to copy arrays
// let spreadArray = [...mergedArray];
// // This is only a reference to the array
// let lazyArray = mergedArray;

// const pepperoni = { toping: 'Pepperoni' };

// const pizza = {
//   ...pepperoni,
//   price: '$8',
//   size: 'medium',
// };

// console.log(pizza);

// const myArr = [1, 2, 3];
