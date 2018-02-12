function radioCristals(arr) {


    let desiredThickness = arr[0];

    for (let i = 1; i < arr.length; i++) {

        let chunk = arr[i];

        console.log(`Processing chunk ${chunk} microns`)

        let newSize = cut(chunk);

        if(chunk != newSize){
            console.log(`Cut x${(chunk/newSize)/4}`);
        }


        

    }


    function cut(crystal) {
        return crystal/4;
    }
    function lap(crystal) {
        crystal -=crystal*0.2;
        return crystal;
    }
    function grind(crystal) {
        return crystal-20;
    }
    function etch(crystal) {
        return crystal-2;
    }
    function xRay(crystal) {
        return ++crystal;
    }
    function transportAndWash(crystal) {
        return Math.floor(crystal);
    }





}

radioCristals([1375, 50000]);