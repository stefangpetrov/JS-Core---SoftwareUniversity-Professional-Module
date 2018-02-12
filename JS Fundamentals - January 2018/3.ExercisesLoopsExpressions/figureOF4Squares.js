function figure(n) {

    let result = "";

    if(n % 2 == 0){


        for(let i = 1; i < n; i++){

            if(n > 4){
                if(i == 1 || i == n/2 || i == n - 1) {
                    for (let j = 1; j < 2 * n; j++) {
                        if (j == 1 || j == n || j == n * 2 - 1) {

                            result += "+";
                        }
                        else {
                            result += "-";
                        }
                    }
                }
                else{
                    for (let j = 1; j <= 2*n;  j++) {

                        if (j == 1 || j == n || j == n * 2 - 1) {

                            result += "|";
                        }
                        else{
                            result += " ";
                        }

                    }
                }
            }
            else{
                for (let j = 1; j < 2 * n; j++) {
                    if (j == 1 || j == n || j == n * 2 - 1) {

                        result += "+";
                    }
                    else {
                        result += "-";
                    }
                }
            }

            result += "\n";





        }


    }
    else{
        for(let i = 1; i <= n; i++){

                if(i == 1 || i == Math.ceil(n/2) || i == n) {
                    for (let j = 1; j < 2 * n; j++) {
                        if (j == 1 || j == n || j == n * 2 - 1) {

                            result += "+";
                        }
                        else {
                            result += "-";
                        }
                    }
                }
                else{
                    for (let j = 1; j <= 2*n;  j++) {

                        if (j == 1 || j == n || j == n * 2 - 1) {

                            result += "|";
                        }
                        else{
                            result += " ";
                        }

                    }
                }

            result += "\n";

        }






        }



    console.log(result);

}

figure(5);