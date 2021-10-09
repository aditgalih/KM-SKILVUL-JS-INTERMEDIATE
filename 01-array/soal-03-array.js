console.log('Soal 3');

const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
];

function searchInArray(arr, num) {
    let arrIndex = []
    for (let a = 0; a < arr.length; a++) {
        const searchNum = arr[a];
        for (let b = 0; b < searchNum.length; b++) {
            arrIndex.push(searchNum[b])
        }
    }
    for (let c = 0; c < arrIndex.length; c++) {
        if (arrIndex[c] === num) {
            var index = c
            var value = true
        }
    }
    if (value) {
        return index
    } else {
        return null
    }
}

console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));