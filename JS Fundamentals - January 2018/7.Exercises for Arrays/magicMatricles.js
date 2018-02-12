function getMagicMatricles(matrix) {



    function getFirstSum(row){
        let sum = 0;
        for(let i = 0; i< row.length; i++){
            sum += row[i];
        }
        return sum;
    }

    let firstSum = getFirstSum(matrix[0]);
    let isMagic = true;
    let currCol = 0;
    let currRow = 0;


    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            currRow += matrix[i][j];

        }

        if(currRow != firstSum){
            isMagic = false;
        }
        currRow = 0;

    }

    let colLength = matrix[0].length;

    for (let i = 0; i < colLength; i++) {
        for (let j = 0; j < matrix.length; j++) {
            currCol += matrix[j][i];

        }

        if(currCol != firstSum){
            isMagic = false;
        }
        currCol = 0;

    }

    console.log(isMagic);




}

getMagicMatricles([[1, 2, 3],
    [5, 0, 1],
    [0, 0, 6],
    [0, 6, 0],
    [0, 6, 0],
    [0, 6, 0]
]);