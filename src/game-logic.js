export function key(i, j){ return 100*i+j;}

export function handleClick(squares, i, j, highlight){
    if(highlight[0]===-1){
        return;
    }
    const old = squares.map((r) => r.slice());
    if(old[i][j] || !old[highlight[0]][highlight[1]]){
        return;
    }
    if(!path(squares, highlight[0], highlight[1], i, j)){
        return;
    }
    let squareType = old[highlight[0]][highlight[1]];
    if(squareType==='wall'){
        return;
    }
    old[highlight[0]][highlight[1]] = null;
    old[i][j] = squareType;
    return old;
}

export function checkWin(squares){
    for(let i = 0; i<squares.length; i++){
        for(let j = 0; j<squares[0].length; j++){
            if(!hasNeighbors(squares, i, j)){
                return false;
            }
        }
    }
    return true;
}

function hasNeighbors(squares, i, j){
    let iMax = squares.length-1;
    let jMax = squares[0].length-1;
    let value = squares[i][j];
    if(!value||value==='wall'||value==='neut'){
        return true;
    }
    if(i>0&&value===squares[i-1][j]){
        return true;
    } else if (j>0&&value===squares[i][j-1]){
        return true;
    } else if (i<iMax&&value===squares[i+1][j]){
        return true;
    } else if (j<jMax&&value===squares[i][j+1]){
        return true;
    }
    return false;

}

function path(squares, i1, j1, i2, j2){
    if (i1===i2) {
        if (j1<j2){
            for(let k = j1+1; k<j2; k++){
                if (squares[i1][k]){
                    return false;
                }
            }
            if(j2+1<squares[0].length&&!squares[i1][j2+1]){
                return false;
            }
            return true;
        } else {
            for(let k = j1-1; k>j2; k--){
                if (squares[i1][k]){
                    return false;
                }
            }
            if(j2>0&&!squares[i1][j2-1]){
                return false;
            }
            return true;
        }
    } else if (j1===j2){
        if (i1<i2){
            for(let k = i1+1; k<i2; k++){
                if (squares[k][j1]){
                    return false;
                }
            }
            if(i2+1<squares.length&&!squares[i2+1][j1]){
                return false;
            }
            return true;
        } else {
            for(let k = i1-1; k>i2; k--){
                if (squares[k][j1]){
                    return false;
                }
            }
            if(i2>0&&!squares[i2-1][j1]){
                return false;
            }
            return true;
        }
    }
    return false;

}