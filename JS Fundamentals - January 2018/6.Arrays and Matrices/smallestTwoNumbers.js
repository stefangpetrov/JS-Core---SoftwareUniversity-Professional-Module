function getSmallest(arr) {

    arr.sort((a, b) => a - b);
    console.log(`${arr[0]} ${arr[1]}`);
}

getSmallest([1, 200,4, -5]);