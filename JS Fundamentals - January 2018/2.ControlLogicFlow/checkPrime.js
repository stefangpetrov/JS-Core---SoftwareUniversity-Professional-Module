function isPrime(num) {

    let bool = true;

    if(num > 1 && num != 2){
        for (var i = 2;  i < num/2; i++) {

            if (num % i == 0 ) {
                bool = false
            }
        }
        console.log(bool);
    }



    if(num == 0 || num == 1 || num < 0)
        console.log("false");
    else if (num == 2) {
        console.log("true");
    }



}

isPrime(7);
