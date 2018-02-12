function calcInterest(arr) {

    let P = arr[0];
    let i = arr[1]/100;
    let n = 12/arr[2];
    let t = arr[3];

    let pow = n*t;

    let F = (P *Math.pow(1 + (i/n), pow)).toFixed(2);

    console.log(F);
}
calcInterest([1500, 4.3, 3, 6])
