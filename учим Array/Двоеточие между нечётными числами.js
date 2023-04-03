let result = '55639217';

function convertDv(str) {
    let arr = str.split('');
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] % 2 != 0 && arr[i + 1] % 2 != 0)
            result.push(arr[i], ':');
        else 
            result.push(arr[i]);
    }
    result.push(arr[arr.length - 1]);
    return result.join('');
}

console.log(convertDv(result));