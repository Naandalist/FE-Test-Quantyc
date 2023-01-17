const array = ["1", "2", "3", "1", "a", "b", "b"];

// 1: Using Set
const array1 = [...new Set(array)];
console.log(array1);

// 2: Using Filter
const array2 = array.filter((item, index) => array.indexOf(item) === index);
console.log(array2);

// // 3: Using Reduce
const array3 = array.reduce(
  (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
  []
);
console.log(array3);

// RESULT:
// [ '1', '2', '3', 'a', 'b' ]
