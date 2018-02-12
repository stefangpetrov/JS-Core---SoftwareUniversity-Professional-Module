function getSeqence(n, k) {


    let newArr = [];
    newArr[0] = 1;
    let index = 0;

    for (let i = 1; i < n; i++) {

        if(newArr.length - k <= 0){
            index = 0;
        }
        else {
            index = newArr.length - k;
        }
        let sum = 0;
        for(index; index < newArr.length; index++){
            sum += newArr[index];
        }

        newArr.push(sum);


    }


    console.log(newArr.join(' '));
}

getSeqence(6, 3);