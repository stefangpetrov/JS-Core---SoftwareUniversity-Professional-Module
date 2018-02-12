function sumVat(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }

    console.log(`sum = ${sum}`);
    console.log(`VAT = ${(sum*0.2).toFixed(2)}`);
    console.log(`total = ${(sum + sum*0.2).toFixed(2)}`);
}

sumVat([1, 2, 3]);