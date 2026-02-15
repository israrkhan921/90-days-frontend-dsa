// Remove Duplicates from Array:
// Given an array of integers, remove the duplicate elements and return a new array with only unique values.

// Example:
// Input: [1, 2, 3, 2, 4, 1]
// Output: [1, 2, 3, 4]
function removeDuplicates(arr) {
    // Create a new Set to store unique values
    const uniqueSet = new Set(arr);
    // Convert the Set back to an array    return Array.from(uniqueSet);
}
// Test the function
const inputArray = [1, 2, 3, 2, 4, 1];
const result = removeDuplicates(inputArray);
console.log(result); // Output: [1, 2, 3, 4]




