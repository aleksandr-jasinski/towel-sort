
// You should implement your task here.

module.exports = function towelSort(matrix) {

    if (!matrix || matrix.length == 0) {
        return [];
    }
    else {
        let arr = [];

        for (let row = 0; row < matrix.length; row++) {

            if (row === 0 || row % 2 === 0) {
                for (let col = 0; col < matrix[row].length; col++) {
                    arr.push(matrix[row][col]);
                }
            }
            else {
                for (let col = 0; col < matrix[row].length; col++) {
                    while (matrix[row].length > 0) {
                        let maximum = matrix[row][0];
                        for (let m = 0; m < matrix[row].length; m++) {
                            if (maximum < matrix[row][m]) maximum = matrix[row][m];
                        }
                        arr.push(maximum);
                        matrix[row].splice(matrix[row].indexOf(maximum), 1);
                    }
                }
            }
        }
        return arr;
    }
}
