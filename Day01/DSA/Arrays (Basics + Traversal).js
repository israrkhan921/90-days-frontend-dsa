// Day 1: DSA (Data Structures and Algorithms) - Arrays (Basics + Traversal)

// what is an Arrray?
// An array is a data structure that can hold a fixed number of values of the same type. It is a collection of elements, each identified by an index or key. Arrays are used to store multiple values in a single variable, making it easier to manage and manipulate data.

// How to declare an array in JavaScript?
// In JavaScript, you can declare an array using square brackets [] and separating the elements with commas. Here are a few examples:
// Declaring an array of numbers
// let numbers = [1,2,3,4,5];
// Declaring an array of strings
// let fruits = ["apple","banana","orange"]
// Declaring an empty array
// let emptyArray = [];



// Traversing an array
// Traversing an array means accessing each element of the array one by one. There are several ways to traverse an array in JavaScript:
// 1. Using a for loop
// let numbers = [1,2,3,4,5];
// console.log(numbers.length);

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// explaination: In this example, we use a for loop to iterate through the numbers array. We start with an index i initialized to 0, and we continue looping until i is less than the length of the array. Inside the loop, we access each element of the array using numbers[i] and print it to the console.




// 2. Using a for...of loop
// let fruits = ["apple","banana","orange"];
// for (let fruit of fruits){
//     console.log(fruit);
// }

// explaination: In this example, we use a for...of loop to iterate through the fruits array. The variable fruit takes on the value of each element in the array during each iteration, and we print it to the console.




// 3. Using the forEach() method
// let numbers = [1,2,3,4,5];
// numbers.forEach(function(number) {
//     console.log(number);
// });
// explaination: In this example, we use the forEach() method to traverse the numbers array. The forEach() method takes a callback function as an argument, which is executed for each element in the array. The current element being processed is passed as an argument to the callback function, and we print it to the console.


// we can perform the action on each element of the array usin the forEach() method.
// expample:if we want to multiply each element of of the numbers array by 2 and print the result like this:
// let numbers = [10,20,30,40,50]
// numbers.forEach(function(number){
//      console.log(number*2);
// })




// why we can not return a forEach loop? The forEach() method does not return a new array or any value. It is designed to execute a provided function once for each array element, but it does not return anything. If you want to create a new array based on the original array, you should use the map() method instead, which returns a new array with the results of calling a provided function on every element in the calling array.

// what is callback function?A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. In the context of array traversal, a callback function is used to perform a specific action on each element of the array. For example, in the forEach() method, the callback function is called for each element in the array, allowing you to perform operations such as logging the element to the console, modifying it, or performing any other desired action.





// 4. Using the map() method
// let numbers = [5,6, 7,8,9]
// let squaredNumbers = numbers.map(function(number){
//     return number * number;
// })

// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


// explaination: In this example, we use the map() method to create a new array called squaredNumbers. The map() method takes a callback function as an argument, which is executed for each element in the numbers array. The callback function takes the current element (number) and returns its square. The map() method then constructs a new array with the results of calling the callback function on every element in the original array, resulting in an array of squared numbers.




// 5. Using the for...in loop (not recommended for arrays)
let numbers = [1,2,3,4,5];
for (let index in numbers){
   console.log( index, numbers[index]);
}

// explaination: In this example, we use a for...in loop to iterate through the numbers array. The variable index takes on the value of each index in the array during each iteration. We can access the corresponding element using numbers[index] and print both the index and the element to the console. However, it is generally not recommended to use a for...in loop for arrays because it iterates over all enumerable properties, including those inherited from the prototype chain, which can lead to unexpected behavior. It is better to use a for loop, for...of loop, or array methods like forEach() or map() for traversing arrays.

// on next day i will work on Sum, min, max in arrays