function rounding(arr) {

    let[num, precision] = arr;

    let denominator = Math.pow(10, precision);

    num = Math.round(num*denominator)/denominator;

    console.log(num);
}



rounding([3.16054424242343, 2]);

