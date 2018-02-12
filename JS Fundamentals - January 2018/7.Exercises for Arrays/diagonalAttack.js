function diagonalAttack(arr) {



    function checkDiagonalSums(matrix) {

        let col1 = 0;
        let col2 = matrix[0].length - 1;
        let sum1 = 0;
        let sum2 = 0;

        for (let i = 0; i < matrix.length; i++) {

            sum1 += matrix[i][col1];
            sum2 += matrix[i][col2];
            col1++;
            col2--;
        }

        if(sum1 == sum2)
            return true;
        else
            return false;
    }



    let matrix = [];
    for (let i = 0; i < arr.length; i++) {
        matrix.push(arr[i].split(' ').map(Number));
    }

    if(checkDiagonalSums(matrix)) {
        let col1 = 0;

        let sum = 0;

        for (let i = 0; i < matrix.length; i++) {


            sum += matrix[i][col1];
            col1++;

        }
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if(row !== col && col !== matrix.length-1-row){
                    matrix[row][col] = sum;
                }
            }
        }


        for (let obj of matrix) {

            console.log(obj.join(" "));
        }


    } else{
        for (let obj of matrix) {
            console.log(obj.join(" "));
        }
    }


}