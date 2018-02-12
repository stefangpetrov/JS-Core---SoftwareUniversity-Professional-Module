function gradsToDegrees(grads) {

    let degrees = grads * 0.9;

    degrees %= 360;


    if(degrees < 0){
        degrees = 360 + degrees;
    }
    else if(degrees > 360){
        degrees = 0 + degrees;
    }


    console.log(degrees);
}

