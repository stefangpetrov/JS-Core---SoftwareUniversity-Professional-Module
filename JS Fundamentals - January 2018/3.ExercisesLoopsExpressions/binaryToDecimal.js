function convertToDecimal(num) {

    let result = 0;

    for(let i = 0; i < num.length; i++){
        result += (Number(num[i]) * Math.pow(2, num.length - i - 1));
    }
    console.log(result);
}

convertToDecimal("00001001");