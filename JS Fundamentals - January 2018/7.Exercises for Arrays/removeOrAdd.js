function getArr(arr) {

    let newArr = [];
    let save = 1;
    for (let command of arr) {

        if(command == 'add'){
            newArr.push(save);
            save = save + 1;

        }
        else{
            newArr.pop();
            save = save + 1;
        }

    }


    if(newArr.length == 0){
        console.log('Empty')
    }
    else {
        for (let obj of newArr) {

            console.log(obj);
        }
    }

}

getArr(['add','add','add','add']);