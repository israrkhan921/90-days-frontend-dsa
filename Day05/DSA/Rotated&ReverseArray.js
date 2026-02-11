// Rotated & Reverse Array

// 1:Reverse an Array
const reverseArray = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    while(start< end){
       [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;  
    }
    return arr
}

console.log(reverseArray([1,2,3,4,5]))




// 2: Rotate an Array

const rotatedArray = (arr,k) => {

    k = k % arr.length-1
    
    reverse(arr,0,arr.length-1)
    reverse(arr,0,k-1)
    reverse(arr,k,arr.length)

    return arr

}

const reverse = (arr,start,end) => {
    start =0
    end = arr.length-1

    while(start<end){
        [arr[start],arr[end]] = [arr[end],arr[start]]
        start++
        end--
    }
    return arr

}

console.log(rotatedArray([1,2,3,4,5],1))
