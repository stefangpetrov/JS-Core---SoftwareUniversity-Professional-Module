function cookingByNumbers(arr) {

    let n = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let op = arr[i];
        

        if(op == "chop"){

            cook((n) => n/2);
            n= n/2;
        }
        else if(op == "dice"){
            cook((n) => Math.sqrt(n));
            n = Math.sqrt(n);
        }
        else if(op == "spice"){

            cook((n) => n+1);
            n = n+1;
        }
        else if(op == "bake"){

            cook((n) => n*3);
            n = n*3;
        }
        else if(op == "fillet"){

            cook((n) => n - ((n/100)*20));
            n =  n - ((n/100)*20);
        }

    }


    function cook(operation) {
        console.log(operation(n));
    }
}

cookingByNumbers([32, "chop", "chop", "chop", "chop", "chop"]);