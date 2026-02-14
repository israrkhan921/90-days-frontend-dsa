// what is Insertion sort and explaination:
// Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It works by repeatedly taking the next unsorted element and inserting it into the correct position in the already sorted portion of the array. The algorithm maintains a sorted subarray on the left side of the array and iteratively expands it by inserting elements from the unsorted portion.

// The main idea behind insertion sort is to divide the array into a sorted and an unsorted part. Initially, the sorted part contains only the first element, and the unsorted part contains the rest of the elements. The algorithm then takes each element from the unsorted part and compares it with the elements in the sorted part, shifting larger elements to the right until it finds the correct position for the current element. This process continues until all elements are sorted.

// Insertion Sort Implementation

const InsertionSort = (arr) => {
    for(let i =1; i<arr.length;i++){
        let key = i
        let j = i -1
        if(j >=0 && arr[j] > key){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = key


    }
    return arr
    

}

console.log(InsertionSort([5,4,3,6,2,1,5,]))



// The insertion sort algorithm works by iterating through the array starting from the second element (index 1) and treating the first element as a sorted subarray. For each element (referred to as "key"), it compares it with the elements in the sorted subarray to its left. If the key is smaller than any of those elements, it shifts the larger elements one position to the right to make space for the key. This process continues until it finds the correct position for the key, at which point it inserts the key into that position. The algorithm repeats this process for each element in the array until the entire array is sorted. The time complexity of insertion sort is O(n^2) in the worst case (when the array is sorted in reverse order) and O(n) in the best case (when the array is already sorted). It is an in-place sorting algorithm, meaning it does not require additional space for another array, and it is also a stable sorting algorithm, preserving the relative order of equal elements.





// what is Merge sort and explaination:
// Merge sort is a divide-and-conquer algorithm that sorts an array by recursively dividing it into smaller subarrays until each subarray contains only one element (which is inherently sorted). Then, it merges those subarrays back together in a way that results in a sorted array.

// The merge sort algorithm consists of two main steps: the divide step and the merge step. In the divide step, the array is split into two halves until we reach subarrays of size one. In the merge step, we take two sorted subarrays and merge them together to form a single sorted array. This merging process involves comparing the elements of the two subarrays and arranging them in the correct order. The merge sort algorithm has a time complexity of O(n log n) in all cases (best, average, and worst), making it an efficient sorting algorithm for large datasets. It is also a stable sorting algorithm, meaning that it preserves the relative order of equal elements. However, it requires additional space for the temporary arrays used during the merging process, resulting in a space complexity of O(n).





// Merge Sort Implementation
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}





