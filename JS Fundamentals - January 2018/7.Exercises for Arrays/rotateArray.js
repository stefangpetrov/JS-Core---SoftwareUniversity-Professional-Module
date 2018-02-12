function rotateArray(arr) {

    let rotate = Number(arr.pop()) % arr.length;

    for (let i = 0; i < Number(rotate); i++) {
        let last = arr[arr.length - 1];

        arr.unshift(last);
        arr.remove(arr[arr.length - 1]);

    }

    console.log(arr.join(' '))
}