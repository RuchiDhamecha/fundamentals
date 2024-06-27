// spiral matrix

const createSpiralMatrix = (n) => {
    const matrix = [];
    let [row, col] = position;
    let currentDirection = "R";

    for (let count = 1; count <= n * n; count++) {
        matrix[row] = matrix[row] || [];
        matrix[row][col] = count;

        if (currentDirection === "R") {
            if (col === n - 1 || matrix[row][col + 1]) {
                currentDirection = "D";
                row += 1;
                continue;
            }

            col += 1;
        }
        if (currentDirection === "L") {
            if (col === 0 || matrix[row][col - 1]) {
                currentDirection = "U";
                row -= 1;
                continue;
            }

            col -= 1;
        }

        if (currentDirection === "D") {
            if (row === n - 1 || (matrix[row + 1] && matrix[row + 1][col])) {
                currentDirection = "L";
                col -= 1;
                continue;
            }

            row += 1;
        }

        if (currentDirection === "U") {
            if (row === 0 || (matrix[row - 1] && matrix[row - 1][col])) {
                currentDirection = "R";
                col += 1;
                continue;
            }

            row -= 1;
        }
    }
    return matrix;
}


const someObj = {
    person: {
        eyeSight: 20,
        isWorking: true,
        practice: [
            { day: "1", hrs: undefined, goal: null },
            { day: "2", hrs: 2, goal: true },
            { day: "3", hrs: 1, goal: false },
        ],
        address: {
            company: null,
            home: {
                city: "Pune",
                country: "India",
                coords: {
                    lat: 1,
                    long: 2
                }
            }
        }
    },
    age: null,
    height: undefined
}