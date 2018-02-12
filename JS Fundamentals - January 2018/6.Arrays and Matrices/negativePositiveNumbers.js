function getNumbers(arr) {


    let newArr = [];

    for (let num of arr) {

        if(num < 0){
            newArr.unshift(num);
        }
        else{
            newArr.push(num);
        }
    }

    for (let obj of newArr) {
        console.log(obj);
    }
}

getNumbers([7, -2, 8, 9]);