// Arrays

// add or remove element in array

// add element in array
let arr = [1, 2, 3];
arr.push(4); // adds 4 at the end of the array
console.log(arr); // Output: [1, 2, 3, 4]

// remove element from array
arr.pop(); // removes the last element from the array
console.log(arr); // Output: [1, 2, 3]

// add element at the beginning of the array
arr.unshift(0); // adds 0 at the beginning of the array
console.log(arr); // Output: [0, 1, 2, 3]

// remove element from the beginning of the array
arr.shift(); // removes the first element from the array
console.log(arr); // Output: [1, 2, 3]

// add element at a specific index
arr.splice(1,0,2)
console.log(arr); // Output: [1, 2, 2, 3]

// remove element from a specific index
arr.splice(1,1)
console.log(arr); // Output: [1, 2, 3]


// explaination of splice method: The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The first parameter is the index at which to start changing the array, the second parameter is the number of elements to remove, and the third parameter (optional) is the element(s) to add to the array.

