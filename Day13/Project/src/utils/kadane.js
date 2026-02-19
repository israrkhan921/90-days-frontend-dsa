export const kadan = (arr) => {

    let currenSum = arr[0]
    let maxSum = arr[0]

    for(let i =1; i < arr.length; i++){
        currenSum = Math.max(arr[i], currenSum + arr[i])
        maxSum = Math.max(currenSum,maxSum)
    }
    return maxSum
}