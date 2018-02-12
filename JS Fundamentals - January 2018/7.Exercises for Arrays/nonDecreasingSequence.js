function getSequence(arr) {

    let newArr = arr.filter((e,i) => e >= arr[i - 1]);
    newArr.unshift(arr[0]);

    console.log(newArr.join('\n'));
}

getSequence([1,3,8,4,10,12,3,2,24]);