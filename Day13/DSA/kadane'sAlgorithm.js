// what is kadane's algorithm?:
// Kadane's algorithm is a popular algorithm used to find the maximum sum of a contiguous subarray within a one-dimensional array of numbers. It works by iterating through the array and keeping track of the current sum of the subarray being considered. If the current sum becomes negative, it resets to zero, as a negative sum would not contribute to a maximum sum in future iterations. The algorithm also keeps track of the maximum sum encountered during the iteration.Here is a simple implementation of Kadane's algorithm:
   
const kadanesAlgorithm = (arr) => {
    let currentSum = arr[0]
    let maxSum = arr[0]

    for(let i =1; i<arr.length; i++){
        currentSum = Math.max(arr[i], currentSum + arr[i])
        maxSum = Math.max(currentSum,maxSum)
    }
    return maxSum
}


console.log(kadanesAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4]
))