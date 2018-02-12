function getKElements(arr) {

    let k = arr[0];
    let firstK = [];
    let lastK = [];

    for (let i = 1; i <= k; i++) {

        firstK.push(arr[i]);

    }

    for (let i = arr.length - k; i < arr.length; i++) {

        lastK.push(arr[i]);

    }

    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}

getKElements([2,7, 8, 9]);