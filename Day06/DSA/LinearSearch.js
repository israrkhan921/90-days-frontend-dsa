// what is Linear Search?
// Linear search is a simple searching algorithm that checks each element in a list sequentially until the desired element is found or the end of the list is reached. It is also known as sequential search. The algorithm starts at the first element and compares it with the target value. If a match is found, it returns the index of the element. If not, it continues to the next element until it either finds a match or reaches the end of the list. Linear search has a time complexity of O(n), where n is the number of elements in the list.Here is an example implementation of linear search in JavaScript:


const LinearSearch = (arr,target) =>{

    for(let i = 0; i <arr.length; i++){
        if(arr[i] === target){
            return arr[i]
        }
    }
    return false
}

console.log(LinearSearch([1,2,3,4,5,6,7,8,9],5))


    