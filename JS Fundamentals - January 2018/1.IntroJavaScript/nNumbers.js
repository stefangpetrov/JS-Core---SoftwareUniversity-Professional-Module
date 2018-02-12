function nNumbers(num) {
    let number = Number(num);
    var result = '';
    for(let i = 1; i <= number; i++){
        result += i
    }
    console.log(result);
}

nNumbers(11);