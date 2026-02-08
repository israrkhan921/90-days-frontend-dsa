// sum of Array Elements
function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;     
}

sumOfArray([1, 2, 3, 4, 5]); // returns 15





// min and max of Array Elements
function minMaxOfArray(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return { min, max };
}

minMaxOfArray([3, 1, 4, 1, 5, 9, 2, 6]); // returns { min: 1, max: 9 }

