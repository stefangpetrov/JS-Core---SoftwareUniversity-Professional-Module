function equalNeighbours(matrix) {
    let pairs = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            let currentEl = matrix[i][j];

            if(i<matrix.length-1){
                if(currentEl === matrix[i+1][j]){
                    pairs++;
                }
            }
            if(i>0){
                if(currentEl === matrix[i-1][j]){
                    pairs++;
                }
            }
            if(j<matrix[i].length){
                if(currentEl === matrix[i][j+1]){
                    pairs++;
                }
            }
            if(j>0){
                if(currentEl === matrix[i][j-1]){
                    pairs++;
                }
            }
        }
    }
    console.log(pairs/2);
}