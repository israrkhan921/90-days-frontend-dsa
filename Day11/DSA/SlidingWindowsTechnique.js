// explain sliding window technique:
// The sliding window technique is a powerful algorithmic approach used to solve problems that involve finding a contiguous subarray or substring that satisfies certain conditions. It is particularly useful for problems related to arrays and strings.

// The main idea behind the sliding window technique is to maintain a "window" that represents a portion of the array or string. This window can be expanded or contracted as needed to find the desired solution. The technique typically involves two pointers, often referred to as the "left" and "right" pointers, which define the boundaries of the window.
// Here's a step-by-step explanation of how the sliding window technique works:
// 1. Initialize two pointers: Start with both the left and right pointers at the beginning of the array or string.
// 2. Expand the window: Move the right pointer to the right, expanding the window, until you find a valid solution that satisfies the given conditions.
// 3. Contract the window: Once you have a valid solution, move the left pointer to the right, contracting the window, to see if you can find a smaller valid solution or to continue searching for other valid solutions.
// 4. Repeat steps 2 and 3: Continue expanding and contracting the window until you have explored all possible windows in the array or string.
// 5. Keep track of the best solution: As you find valid solutions, keep track of the best one (e.g., longest substring, smallest subarray) according to the problem's requirements.
// The sliding window technique is efficient because it allows you to avoid unnecessary computations by only focusing on the relevant portion of the array or string at any given time. It typically has a time complexity of O(n) for most problems, making it a preferred approach for many algorithmic challenges.Here is an example implementation of the sliding window technique to find the longest substring without repeating characters in a given string:```javascript

// types of sliding window technique:

// 1. Fixed-size sliding window: In this type, the size of the window is fixed, and you move it across the array or string to find the desired solution. For example, finding the maximum sum of a subarray of size k.

// 2. Variable-size sliding window: In this type, the size of the window can change dynamically based on certain conditions. For example, finding the longest substring without repeating characters, where the window expands until a duplicate character is found and then contracts to remove the duplicate.

function maxSumSubarray(arr, k) {
    let maxSum = 0, windowSum = 0;
    
    // First window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    // Slide the window
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k]; // add new, remove old
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Output: 9

// explaination of the code:
// The maxSumSubarray function uses a fixed-size sliding window technique.
// It first calculates the sum of the first k elements.
// Then, it slides the window one element at a time, updating the sum by adding the new element and removing the old element.
// It keeps track of the maximum sum seen so far and returns it.










function minSubArrayLen(nums, target) {
    let left = 0, sum = 0, minLen = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)); // Output: 2 ([4,3])

// explaination of the code:
// The minSubArrayLen function uses a variable-size sliding window technique.
// It initializes two pointers, left and right, to represent the boundaries of the window, and a variable sum to keep track of the current sum of the elements in the window.
// As it iterates through the array with the right pointer, it adds the current element to the sum.
// When the sum is greater than or equal to the target, it checks if the current window size (right - left + 1) is smaller than the minimum length found so far (minLen). If it is, it updates minLen.
// Then, it contracts the window by subtracting the element at the left pointer from the sum and moving the left pointer to the right.
// This process continues until all possible windows have been evaluated. Finally, it returns the minimum length of a valid subarray or 0 if no such subarray exists.
