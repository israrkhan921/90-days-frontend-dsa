// Max Sum SubArray
// Given an array of integers, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// Example 1:
// Input: [-2,1,-3,4,-1,2,1,-5,4]  
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.    
 

// first approach: O(n^2) time complexity brute force approach:
function maxSubArray(arr) {
    let maxSum = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        let currentSum = 0;
        for (let j = i; j < arr.length; j++) {
            currentSum += arr[j];
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    return maxSum;
}



// second approach: O(n) time complexity using Kadane's algorithm:
function maxSubArray(arr) {
    if (arr.length === 0) return 0;

    let currentSum = arr[0];
    let maxSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}


// Example usage:
const arr = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(arr)); // Output: 6


