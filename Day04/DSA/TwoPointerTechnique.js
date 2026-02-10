// what is Two Pointer Technique?
// Two Pointer Technique is a common algorithmic approach used to solve problems that involve searching for pairs or triplets of elements in a sorted array. The idea is to use two pointers, one starting at the beginning of the array and the other starting at the end, and move them towards each other based on certain conditions.


// Example: Given a sorted array of integers and a target sum, find all pairs of integers that add up to the target sum.
const twoPointerTechnique = (arr,target) =>{
    let left =0
    let right =arr.length-1
    let result = []
    while(left<right){
        let sum = arr[left] + arr[right]
        if (sum === target){
            result.push([arr[left],arr[right]])
            left++
            right--
        }else if(sum<target){
            left++
        }else{right--}

    }
    return result


}


let arr=[1,2,3,4,5,6,7,8,9,10]
let target=8
console.log(twoPointerTechnique(arr,target))

// explaination:

// 1. We initialize two pointers, `left` at the start of the array and `right` at the end.
// 2. We calculate the sum of the elements at these two pointers.
// 3. If the sum equals the target, we add the pair to our result and move both pointers inward.
// 4. If the sum is less than the target, we move the left pointer to the right to increase the sum.
// 5. If the sum is greater than the target, we move the right pointer to the left to decrease the sum.
// 6. We continue this process until the two pointers meet, ensuring that we find all pairs that add up to the target sum efficiently.


