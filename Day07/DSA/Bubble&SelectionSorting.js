// Sorting Basics:
// 1. Bubble Sort:
// - Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.
// - The process is repeated until the list is sorted.
// - Time Complexity: O(n^2) in the worst and average case, O(n) in the best case (when the array is already sorted).
// - Space Complexity: O(1) (in-place sorting).

const BubbleSorting =(arr) => {

    for(i = 0; i<arr.length; i++){
        for(j = 0; j<arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr

}

console.log(BubbleSorting([9,5,7,1,2,8,6,3,4]))

// explain this:
// The BubbleSorting function takes an array as input and sorts it in ascending order using the bubble sort algorithm. 
// It uses two nested loops: the outer loop iterates through each element of the array, while the inner loop compares adjacent elements and swaps them if they are in the wrong order. 
// The process is repeated until the entire array is sorted. 
// Finally, the sorted array is returned. In this example, the input array [9,5,7,1,2,8,6,3,4] will be sorted to [1,2,3,4,5,6,7,8,9].  
// step by step explanation of the BubbleSorting function:

// 1. The function takes an array `arr` as input.
// 2. The outer loop runs from `i = 0` to `i < arr.length`, which means it will iterate through each element of the array.
// 3. The inner loop runs from `j = 0` to `j < arr.length - 1`, which means it will compare adjacent elements in the array.
// 4. Inside the inner loop, there is a condition that checks if the current element `arr[j]` is greater than the next element `arr[j + 1]`. If so, the elements are swapped using array destructuring assignment `[arr[j], arr[j+1]] = [arr[j+1], arr[j]]`.
// 5. After each iteration of the inner loop, the largest unsorted element "bubbles up" to its correct position at the end of the array.
// 6. The process continues until no more swaps are needed in a full pass through the array, indicating that the array is sorted.

// if no swap happen in a full pass through the array, it means that the array is already sorted. In this case, the algorithm can be optimized by adding a flag to track whether any swaps were made during the inner loop. If no swaps were made, the algorithm can break out of the loop early, improving efficiency in cases where the array is already sorted or nearly sorted.

const BubbleSortOptomized = (arr) => {
    for (i = 0 ; i<arr.length; i++ ){
        let swapped = false;
        for (j = 0; j<arr.length-1;j++){
            if (arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                swapped= true
            }
            
        }
        if (!swapped) break
    }
    return arr
}

console.log(BubbleSortOptomized([3,5,2,4,1]))

// fully step by step explain this optimized BubbleSort function:
// 1. The function takes an array `arr` as input.
// 2. The outer loop runs from `i = 0` to `i < arr.length`, which means it will iterate through each element of the array.
// 3. Inside the outer loop, a boolean variable `swapped` is initialized to `false`. This variable will be used to track whether any swaps were made during the inner loop.
// 4. The inner loop runs from `j = 0` to `j < arr.length - 1`, which means it will compare adjacent elements in the array.
// 5. Inside the inner loop, there is a condition that checks if the current element `arr[j]` is greater than the next element `arr[j + 1]`. If so, the elements are swapped using array destructuring assignment `[arr[j], arr[j+1]] = [arr[j+1], arr[j]]`, and the `swapped` variable is set to `true` to indicate that a swap has occurred.
// 6. After the inner loop completes, there is a check to see if the `swapped` variable is still `false`. If it is, this means that no  swaps were made during the inner loop, which indicates that the array is already sorted. In this case, the algorithm breaks out of the outer loop early, improving efficiency.
// 7. If swaps were made, the outer loop continues to the next iteration, allowing the algorithm to continue sorting the array until it is fully sorted.
// 8. Finally, the sorted array is returned. In this example, the input array [3,5,2,4,1] will be sorted to [1,2,3,4,5].    






// 2. Selection Sort:
// - Divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list.
// - Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, swapping it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.
// - Time Complexity: O(n^2) in all cases.
// - Space Complexity: O(1) (in-place sorting).


const SelectionSorting = (arr) => {
    for(let i=0; i<arr.length; i++){
        let minIndex = i

    for(let j=i+1; j<arr.length; j++){
        if (arr[j]< arr[minIndex]){
            minIndex = j
        }
    }
    if(minIndex !== i){
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    }
    return arr
} 
console.log(SelectionSorting([5,4,1,2,9,7,3,6,8]))

