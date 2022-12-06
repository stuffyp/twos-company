export function key(i, j) { return 100 * i + j; }

export function handleClick(squares, i, j, highlight) {
    if (highlight[0] === -1) {
        return;
    }
    const old = squares.map((r) => r.slice());
    const moves = getMoves(squares, highlight[0], highlight[1]);

    let invalid = true;
    for (const m in moves) {
        if (moves[m][0] === i && moves[m][1] === j) {
            invalid = false;
        }
    }
    if (invalid) {
        return;
    }

    const squareType = old[highlight[0]][highlight[1]];

    old[highlight[0]][highlight[1]] = null;
    old[i][j] = squareType;
    return old;
}

export function getMoves(squares, i, j) {
    const iMax = squares.length;
    const jMax = squares[0].length;
    let left = [-1, -1];
    let right = [-1, -1];
    let up = [-1, -1];
    let down = [-1, -1];
    if (!squares[i][j] || squares[i][j] === 'wall') {
        return ({
            left: left,
            right: right,
            up: up,
            down: down,
        });
    }
    for (let k = i + 1; k < iMax; k++) {
        if (squares[k][j]) {
            break;
        }
        down = [k, j];
    }
    for (let k = i - 1; k >= 0; k--) {
        if (squares[k][j]) {
            break;
        }
        up = [k, j];
    }
    for (let k = j + 1; k < jMax; k++) {
        if (squares[i][k]) {
            break;
        }
        right = [i, k];
    }
    for (let k = j - 1; k >= 0; k--) {
        if (squares[i][k]) {
            break;
        }
        left = [i, k];
    }
    return ({
        left: left,
        right: right,
        up: up,
        down: down,
    });
}

export function checkWin(squares) {
    for (let i = 0; i < squares.length; i++) {
        for (let j = 0; j < squares[0].length; j++) {
            if (!hasNeighbors(squares, i, j)) {
                return false;
            }
        }
    }
    return true;
}

function hasNeighbors(squares, i, j) {
    let iMax = squares.length - 1;
    let jMax = squares[0].length - 1;
    let value = squares[i][j];
    if (!value || value === 'wall' || value === 'neut') {
        return true;
    }
    if (i > 0 && value === squares[i - 1][j]) {
        return true;
    } else if (j > 0 && value === squares[i][j - 1]) {
        return true;
    } else if (i < iMax && value === squares[i + 1][j]) {
        return true;
    } else if (j < jMax && value === squares[i][j + 1]) {
        return true;
    }
    return false;

}
