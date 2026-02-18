// explain Prefix Sum in JavaScript with an example.

// Prefix Sum is a technique used to calculate the cumulative sum of an array. It allows you to quickly find the sum of any subarray by using the precomputed prefix sums. The idea is to create a new array where each element at index `i` contains the sum of all elements from the original array up to index `i`.
// Here's an example of how to implement Prefix Sum in JavaScript:

const prefixSum = (arr) => {
    const prefixArr = []
    let currentSum = 0
    for(let i =0; i<arr.length; i++){
        currentSum += arr[i]
        prefixArr.push(currentSum)
    }
    return prefixArr

}
// Example usage:
const arr = [1, 2, 3, 4, 5];
console.log(prefixSum(arr)); // Output: [1, 3, 6, 10, 15]

// In this example, the `prefixSum` function takes an array as input and computes the prefix sums. The `currentSum` variable keeps track of the cumulative sum as we iterate through the array. The resulting `prefixSums` array contains the cumulative sums at each index, allowing us to quickly calculate the sum of any subarray by using the formula: `sum(i, j) = prefixSums[j] - prefixSums[i - 1]` (with appropriate handling for edge cases).

