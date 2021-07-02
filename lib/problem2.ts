// ****** Optimisation problem 2 ******** //
// Try to solve this problem with the best level of complexity (ie. with a mimimum of computation) while still passing the tests.

//  A board is a (N x N) matrix, with N ∈ [0, +∞]. Each case holds a certain amount of grains of rice.
// Visual example:
// | 1 | 4 | 2 |
// | 5 | 1 | 3 |
// | 1 | 2 | 7 |
// Coding Example: new Board(3, [[1,4,2],[5,1,3],[1,2,7]])

// Rules: You can only go through the board by moving to the right or down, and you must finish the travel in the bottom right.

// Goal: Obtain the maximum grains of rice you can get from the board in one travel.
// Example: for the visual example above, the result will be 17

// Formalisation: Board is a class, and the values are stored in cases of type Array<Array<uInteger>>
// meaning you can access the last 2 of the second line through `board.cases[1][3]`.
// Every integers are positive.

// Assignment:
// Complete the function in order to return the maximum grains of rice that you can get in a travel.
// Moreover you should implement the class correctly in order to pass all the tests,
// ie. when you call board.setMaxHarvest(), board.maxHarvest should be set with the correct max number.

class Board {
    public size: number;
    public cases: Array<Array<number>>;
    private maxHarvest: number;

    // Example: new Board(3, [[1,4,2],[5,1,3],[1,2,7]])
    constructor(size: number, cases: number[][]) {
        // TODO: Should set cases and size
        // TODO: Should verify that cases is well shaped
        this.size = size;
        this.cases = cases;
    }

    public getMaxHarvest() {
        // TODO: Write the getter
        if(!this.cases.length || this.size === 0) return 0

        let maxPathholder: number[] = []

        const getPossibleHarvest = (matrix: number[][], m:number, n:number, i:number, j:number, path:Array<number>, index:number) => {
            let Pathholder = []
            path[index] = matrix[i][j];

            // Reached the bottom of the matrix so we are left with
            // only option to move right
            if (i == m - 1) {
                for (let k = j + 1; k < n; k++) {
                    path[index + k - j] = matrix[i][k];
                }

                for (let l = 0; l < index + n - j; l++) {
                    Pathholder.push(path[l])
                }
                
                if(!maxPathholder.length){
                    maxPathholder = [...Pathholder]
                }
                else if(Pathholder.reduce((a, b) => a + b) > maxPathholder.reduce((a, b) => a + b)){
                    maxPathholder = [...Pathholder] 
                }
                return;
            }

            // Reached the right corner of the matrix we are left with
            // only the downward movement.
            if (j == n - 1) {
                for (let k = i + 1; k < m; k++) {
                    path[index + k - i] = matrix[k][j];
                }

                for (let l = 0; l < index + m - i; l++) {
                    Pathholder.push(path[l])
                }

                if(!maxPathholder.length){
                    maxPathholder = [...Pathholder]
                }
                else if(Pathholder.reduce((a, b) => a + b) > maxPathholder.reduce((a, b) => a + b)){
                    maxPathholder = [...Pathholder] 
                }

                return;
            }

            // get all the paths that are possible after moving right
            getPossibleHarvest(matrix, m, n, i + 1, j, path, index + 1);

            // get all the paths that are possible after moving down
            getPossibleHarvest(matrix, m, n, i, j + 1, path, index + 1);
        }

        let v = this.size
        let h = this.size
        let maxLengthOfPath = new Array(v + h - 1) 
        getPossibleHarvest(this.cases, v, h, 0, 0, maxLengthOfPath, 0)

        return maxPathholder.reduce((a, b) => a + b)
    }

    public setMaxHarvest() {
        // TODO: Should compute the maximum amount of grains of rices we can harvest in one go through and set it to the instance
        this.maxHarvest = this.getMaxHarvest()
    }

    // private computeMaxHarvest(): number {
    // // TODO: Should compute the maximum amount of grains of rices we can harvest in one go through
    //     return 0;
    // }
}
  