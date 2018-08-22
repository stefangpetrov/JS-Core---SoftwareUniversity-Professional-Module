function solve(car) {

    let model = car.model;
    let power = car.power;
    let color = car.color;
    let carriage = car.carriage;
    let wheelsize = car.wheelsize;
    if(wheelsize % 2 === 0){
        wheelsize -= 1;
    }
    let wheels = [wheelsize, wheelsize, wheelsize, wheelsize];

    let resultCar = {};
    resultCar.model = model;

    if(power <= 90){
        resultCar.engine = {power:90, volume:1800}

    } else if(power <= 120){
        resultCar.engine = {power:120, volume:2400}

    } else{
        resultCar.engine = {power:200, volume:3500}
    }

    resultCar.carriage = {type:carriage, color:color};
    resultCar.wheels = wheels;

    return resultCar;
}

console.log(solve(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));