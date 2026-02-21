// rotate Array by k steps to the right:

const rotatedArray = (arr,k) => {
    k = k % arr.length

    reverse(arr,0,arr.length-1)
    reverse(arr,0,k-1)
    reverse(arr,k,arr.length-1)

    return arr




    function reverse(arr,left,right){
        while(left<right){
            [arr[left],arr[right]] = [arr[right],arr[left]]

            left++
            right--
                }
                

    }



}



console.log(rotatedArray([1,2,3,4,5],2))