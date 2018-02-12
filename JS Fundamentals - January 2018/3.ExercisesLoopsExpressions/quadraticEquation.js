function getSolutions(a, b, c) {

    let D = b*b - (4*a*c);

    if(D >= 0){
        let firstX = (-b + Math.sqrt(D))/(2*a);
        let secondX = (-b - Math.sqrt(D))/(2*a);

        if(firstX > secondX){
            console.log(secondX);
            console.log(firstX);
        }
        else if(secondX > firstX){
            console.log(firstX);
            console.log(secondX);
        }
        else {
            console.log(firstX);
        }

    }
    else{
        console.log("No");
    }
}

