

const createGrid = (callBack) => {
    let columns = Array.fill(10)
    for (let row = 0; row <= columns.length; row++) {
        columns[row] = Array.fill(10)
    }
    return columns;
}