function distanceCalc(arr) {

    let convS = arr[2]/3600;
    let firstS = arr[0] * convS;
    firstS *= 1000;
    let secondS = arr[1] * convS;
    secondS *= 1000;
    console.log(Math.abs(firstS - secondS));
}