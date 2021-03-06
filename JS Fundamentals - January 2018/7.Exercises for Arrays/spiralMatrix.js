function getMatrix(rows, cols) {

    function isFilled(matrix) {
        for (let rows = 0; rows < matrix.length; rows++) {
            for (let cols = 0; cols < matrix[rows].length; cols++) {
                if(matrix[rows][cols] === 0){
                    return false;
                }
            }
        }
        return true;
    }

    let currentRow = 0;
    let currentCol = 0;


    let matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix.push('0'.repeat(cols).split('').map(Number));
    }

    let num = 1;



    while(!isFilled(matrix)){

        for(let i =currentCol; i<cols-currentCol; i++){
            matrix[currentRow][i] = num++;
        }
        //fill Right
        for(let i = currentRow+1; i<rows-currentRow; i++){
            matrix[i][cols-currentRow-1] = num++;
        }
        //fill Bottom
        for(let i=cols-currentCol-2; i>=currentCol; i--){
            matrix[cols-currentRow-1][i] = num++;
        }
        //fill Left
        for(let i = rows-currentRow-1; i > currentRow+1; i--){
            matrix[i-1][currentRow] = num++;
        }
        currentRow++;
        currentCol++;
    }

    for (let obj of matrix) {

        console.log(obj.join(" "));
    }




}

getMatrix(3,3);