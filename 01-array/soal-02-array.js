console.log('Soal 2');

const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
    let sum = 0
    let count = 0

    for (let a = 0; a < arr.length; a++) {
        sum += arr[a]
    }

    let average = sum / arr.length
    for (let b = 0; b < arr.length; b++) {
        if (arr[b] > average) {
            count++
        }
    }
    return count
}

console.log(getAverage(arr1))
console.log(getAverage(arr2))