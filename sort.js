function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
     
        let key = arr[i];
        
        while (i - 1 >= 0 && arr[i - 1] > key) {
            arr[i ] = arr[i - 1];
            i--
        }
        
        arr[i] = key;
    }
    return arr;
}

const array = [12, 11, 13, 5, 6];
console.log(insertionSort(array)); // Output: [5, 6, 11, 12, 13]
