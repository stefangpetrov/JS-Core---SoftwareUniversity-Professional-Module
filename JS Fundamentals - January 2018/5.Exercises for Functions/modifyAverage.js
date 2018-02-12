function modifyAverage(number) {

    number = number.toString();
    let sum = 0;

    for (let obj of number) {
        sum += Number(obj);
    }

    while(sum / (number.length) <= 5){

        sum += 9;
        number += "9";
    }

    console.log(number);
}