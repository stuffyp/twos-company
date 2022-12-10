const levels = [
    [
        ['green', null, null, 'green'],
    ],
    [
        [null, null, null, null, null],
        [null, 'wall', 'wall', 'wall', null],
        ['green', 'wall', 'green', null, null],
    ],
    [
        ['wall', null, null, null, 'wall'],
        ['wall', null, 'wall', null, 'wall'],
        ['green', null, null, null, null],
        ['wall', 'green', 'wall', null, null],
    ],
    [
        ['wall', 'blue', 'wall', 'wall', 'blue', 'wall'],
        ['wall', null, 'wall', 'wall', null, 'wall'],
        [null, null, null, null, null, null],
        ['green', 'wall', 'wall', 'wall', 'wall', 'green'],
    ],
    [
        [null, null, 'blue', 'green'],
        ['green', null, 'blue', 'wall'],
    ],
    [
        ['blue', null, null, null, 'green'],
        [null, 'wall', null, 'wall', null],
        ['green', null, null, null, 'blue'],
    ],
    [
        [null, 'green', 'wall', null, 'green'],
        [null, 'wall', 'wall', null, null],
        [null, 'neut', null, null, null],
        [null, 'wall', 'wall', null, null],
    ],
    [
        ['wall', 'red', null, 'blue', null, null],
        ['wall', null, null, null, null, 'green'],
        [null, null, 'wall', 'wall', null, null],
        ['green', null, null, null, null, 'wall'],
        [null, null, 'blue', null, 'red', 'wall'],
    ],
    [
        ['wall', 'green', 'wall', 'wall'],
        ['wall', null, 'wall', 'wall'],
        ['wall', null, 'wall', 'wall'],
        ['wall', null, 'wall', 'wall'],
        ['blue', null, 'blue', 'green']
    ],
    [
        [null, null, null, null],
        [null, 'wall', 'wall', null],
        [null, 'wall', 'wall', null],
        [null, null, null, null],
        ['blue', 'wall', 'wall', 'blue'],
        ['green', 'wall', 'wall', 'green']
    ],
    [
        ['green', 'blue', null, 'wall', 'wall'],
        ['red', 'wall', null, 'wall', 'wall'],
        [null, null, null, null, null],
        ['wall', 'wall', null, 'wall', 'blue'],
        ['wall', 'wall', null, 'red', 'green'],
    ],
    [
        ['wall', 'wall', 'wall', null, 'wall', 'wall', 'wall'],
        ['wall', 'wall', 'wall', null, 'wall', 'wall', 'wall'],
        ['wall', 'wall', 'wall', null, 'wall', 'wall', 'wall'],
        ['red', 'green', 'blue', null, 'red', 'green', 'blue'],
    ],
    [
        ['blue', null, 'wall', null, 'blue'],
        [null, null, 'wall', null, null],
        [null, 'wall', 'wall', 'wall', null],
        [null, null, 'neut', null, null],
        [null, 'wall', 'wall', 'wall', null],
        [null, null, 'wall', null, null],
        ['green', null, 'wall', null, 'green'],
    ],
    [
        ['wall', null, null, 'neut', null, null, 'wall'],
        ['wall', null, 'wall', 'wall', 'wall', null, 'wall'],
        ['blue', null, 'green', 'wall', 'green', null, 'blue'],
        ['wall', null, 'wall', 'wall', 'wall', null, 'wall'],
        ['wall', null, 'wall', 'wall', 'wall', null, 'wall'],
    ],
    [
        [null, null, null, 'green', 'wall', null, 'green'],
        [null, null, 'wall', 'wall', 'wall', null, null],
        [null, null, 'wall', null, null, null, null],
        [null, null, null, null, 'wall', null, null],
        [null, null, 'wall', null, null, null, null],
        [null, null, 'wall', 'wall', 'wall', null, null],
        [null, null, null, 'blue', 'wall', null, 'blue'],
    ],
    [
        ['blue', null, null, null, 'red', 'green'],
        ['wall', 'wall', null, 'wall', 'wall', 'wall'],
        [null, null, null, null, null, 'wall'],
        ['wall', null, null, null, null, 'wall'],
        ['wall', null, null, null, null, null],
        ['wall', 'wall', 'wall', null, 'wall', 'wall'],
        ['green', 'red', null, null, null, 'blue'],
    ],
    [
        ['green', 'wall', 'green', null, null, null],
        [null, 'wall', 'wall', null, 'wall', 'wall'],
        [null, null, null, null, null, 'neut'],
        [null, 'wall', 'wall', 'wall', null, 'wall'],
        ['blue', 'wall', null, null, null, 'blue'],
    ],
    [
        ['green', 'neut', 'red', 'neut', 'blue'],
        ['wall', 'wall', null, 'wall', 'wall'],
        ['wall', null, null, null, 'wall'],
        ['wall', 'wall', null, 'wall', 'wall'],
        ['green', 'neut', 'red', 'neut', 'blue'],
    ],
    [
        ['wall', 'blue', 'wall', 'red', 'wall', 'green', 'wall'],
        ['wall', null, 'wall', null, 'wall', null, 'wall'],
        [null, null, 'neut', null, 'neut', null, null],
        ['wall', null, 'wall', null, 'wall', null, 'wall'],
        ['wall', 'red', 'wall', 'green', 'wall', 'blue', 'wall'],
    ],
    [
        ['wall', 'orange-key', 'wall', 'wall', 'green'],
        ['wall', null, 'wall', 'wall', null],
        ['green', null, 'orange-door', null, null],
        ['wall', null, 'wall', null, null],
        ['wall', null, 'wall', null, null],
    ],
    [
        ['wall', 'orange-key', 'wall', 'blue', 'wall', 'green'],
        ['wall', null, 'wall', null, 'wall', 'blue'],
        ['green', null, 'orange-door', null, 'orange-door', null],
    ],
    [
        ['wall', 'wall', null, 'wall', null, 'green'],
        ['red', null, null, 'orange-door', 'blue', 'orange-key'],
        ['wall', 'wall', 'orange-door', 'wall', 'wall', 'wall'],
        ['red', null, null, 'orange-door', null, null],
        ['wall', 'wall', 'blue', 'wall', 'green', null],
    ],
    [
        ['wall', 'blue', null, null, 'wall'],
        ['wall', 'red', 'wall', null, 'wall'],
        ['wall', 'wall', 'wall', null, 'wall'],
        ['green', null, 'orange-key', 'orange-door', 'green'],
        ['wall', 'wall', 'wall', null, 'wall'],
        ['wall', 'red', 'wall', null, 'wall'],
        ['wall', 'blue', null, null, 'wall'],
    ],
    [
        [null, null, null, null, null, null, 'blue'],
        [null, null, null, null, null, null, null],
        [null, 'wall', 'wall', null, 'wall', 'wall', null],
        [null, 'wall', 'green', null, null, 'wall', null],
        [null, 'wall', 'wall', null, 'wall', 'wall', null],
        [null, null, null, null, null, null, null],
        ['blue', null, null, null, null, null, 'green'],
    ],
    [
        ['wall', 'wall', 'orange-door', 'wall', 'orange-door', null, 'wall', null],
        [null, null, 'orange-door', 'wall', 'orange-door', null, 'orange-door', null],
        ['green', 'orange-key', 'orange-door', 'orange-door', 'orange-door', null, null, 'orange-door'],
        ['wall', 'orange-door', 'wall', 'wall', 'orange-door', 'orange-door', 'wall', null],
        ['blue', null, null, 'wall', 'green', 'wall', 'wall', 'blue'],
    ],
    [
        ['wall', 'wall', 'wall', null, 'wall', 'wall', 'wall', null, 'wall'],
        ['green', null, null, null, null, null, null, 'orange-door', 'wall'],
        ['wall', 'wall', 'wall', 'orange-door', 'wall', 'wall', 'wall', null, 'wall'],
        ['green', null, null, null, null, null, 'wall', null, 'wall'],
        [null, null, 'orange-door', 'orange-door', 'orange-door', null, 'wall', null, 'wall'],
        [null, null, 'orange-door', 'orange-key', null, null, null, null, 'wall'],
        [null, null, null, null, 'orange-door', null, 'wall', null, 'wall'],
        [null, null, 'orange-door', 'orange-door', 'orange-door', null, 'wall', null, 'wall'],
        ['blue', null, null, null, null, null, 'wall', 'blue', 'wall'],
    ],
    [
        ['green', null, null, null, null, null],
        ['orange-door', 'orange-door', 'orange-door', null, null, null],
        [null, null, 'orange-door', 'orange-door', 'orange-key', null],
        [null, null, 'orange-door', null, 'pink-door', 'pink-door'],
        ['pink-key', null, 'orange-door', null, 'pink-door', 'green'],
    ],
    [
        [null, 'wall', 'green', null, 'pink-door', null, null, null, null],
        [null, 'wall', 'pink-door', 'pink-door', 'pink-door', 'pink-door', 'pink-door', 'pink-door', 'pink-door'],
        [null, 'wall', null, null, null, null, null, null, null],
        [null, null, null, null, null, 'orange-key', null, null, null],
        [null, 'wall', null, null, null, null, null, null, null],
        [null, 'wall', null, null, null, null, null, 'orange-door', 'orange-door'],
        ['pink-key', 'wall', 'blue', null, null, 'blue', null, 'orange-door', 'green'],
    ],
    [
        ['red', 'green', 'blue', 'wall', 'red', 'green', 'blue'],
        [null, null, null, 'wall', null, null, null],
        ['wall', 'orange-door', 'wall', 'wall', 'wall', 'pink-door', 'wall'],
        [null, null, 'neut', null, 'neut', null, null],
        ['wall', null, 'wall', 'wall', 'wall', null, 'wall'],
        [null, null, null, 'wall', null, null, null],
        [null, 'pink-key', null, 'wall', null, 'orange-key', null],
    ],
    [
        ['wall', 'wall', 'wall', null, 'wall', null, null],
        [null, null, 'wall', null, 'orange-door', 'orange-door', 'orange-door'],
        [null, null, 'orange-door', null, null, 'pink-door', null],
        ['green', null, 'wall', null, null, 'pink-door', 'blue'],
        ['wall', 'wall', 'wall', 'pink-door', 'wall', 'wall', 'wall'],
        ['wall', 'wall', 'wall', null, null, 'wall', 'wall'],
        ['orange-key', null, 'green', 'pink-key', 'orange-door', null, 'blue'],
        ['wall', 'wall', 'wall', null, 'orange-door', null, null],
        ['wall', 'wall', 'wall', 'pink-door', 'wall', 'wall', 'wall'],
    ],
    [
        ['blue', null, null, 'pink-door', null],
        [null, 'orange-key', null, 'pink-door', 'neut'],
        [null, null, null, 'pink-door', null],
        ['pink-door', 'pink-door', 'pink-door', 'pink-door', 'green'],
        [null, null, null, 'pink-door', null],
        ['wall', 'orange-door', 'wall', 'wall', 'wall'],
        [null, 'pink-key', null, 'green', 'blue'],
    ],
    [
        ['wall', 'red', 'wall', 'green', 'wall'],
        ['red', null, null, null, 'green'],
        ['wall', null, 'wall', null, 'wall'],
        ['wall', null, null, null, 'blue'],
        ['wall', 'wall', 'wall', 'blue', 'wall'],
    ],
    [
        ['wall', 'wall', 'wall', 'wall', null, null, 'wall', 'wall', 'wall', 'wall'],
        [null, 'orange-door', null,  'orange-door', null, null, 'orange-door', null, 'orange-door', null],
        [null, 'pink-door', null, 'orange-door', null, null, 'orange-door', null, 'pink-door', null],
        [null, 'pink-door', null, 'pink-door', null, null, 'pink-door', null, 'pink-door', null],
        ['pink-door', 'wall', 'wall', 'wall', null, null, 'wall', 'wall', 'wall', 'pink-door'],
        [null, 'wall', 'orange-key', 'wall', null, null, 'wall', 'blue', 'wall', null],
        [null, 'wall', null, null, null, null, 'orange-door', 'pink-door', 'wall', null],
        [null, 'wall', 'green', 'wall', null, null, 'wall', null, 'wall', null],
        ['neut', 'wall', 'pink-key', 'wall', null, null, 'wall', 'green', 'wall', 'blue'],
    ],
    [
        ['wall', 'wall', 'orange-key', 'wall', 'wall', 'pink-key', 'wall', 'wall'],
        ['green', 'red', null, null, null, null, 'red', 'blue'],
        ['wall', 'wall', 'pink-door', 'wall', 'wall', 'orange-door', 'wall', 'wall'],
        ['wall', 'wall', null, 'wall', 'wall', null, 'wall', 'wall'],
        ['wall', 'wall', 'orange-door', 'wall', 'wall', 'pink-door', 'wall', 'wall'],
        ['blue', null, null, null, null, null, null, 'green'],
    ],
    [
        ['wall', 'wall', null, 'wall', 'wall', 'wall', 'wall', null, 'wall', 'wall'],
        ['wall', 'green', null, 'wall', 'wall', 'wall', 'wall', null, 'green', 'wall'],
        [null, null, null, null, null, null, null, null, null, null],
        ['wall', 'wall', null, null, null, null, null, null, 'wall', 'wall'],
        ['wall', 'wall', null, null, 'orange-key', null, null, null, 'wall', 'wall'],
        ['wall', 'wall', null, null, null, 'pink-key', null, null, 'wall', 'wall'],
        ['wall', 'wall', null, null, null, null, null, null, 'wall', 'wall'],
        [null, null, null, null, null, null, null, null, null, null],
        ['wall', 'blue', null, 'wall', 'wall', 'wall', 'wall', null, 'blue', 'wall'],
        ['wall', 'wall', null, 'wall', null, null, 'wall', null, 'wall', 'wall'],
        ['wall', 'wall', 'wall', 'wall', null, null, 'wall', 'wall', 'wall', 'wall'],
        ['wall', 'red', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'red', 'wall'],
        ['orange-door', 'pink-door', 'orange-door', 'pink-door', 'orange-door', 'pink-door', 'orange-door', 'pink-door', 'orange-door', 'pink-door'],
    ],
    [
        ['red', null, null, 'pink-key', null, null, 'blue'],
        [null, 'wall', 'wall', 'wall', 'wall', 'wall', null],
        [null, 'wall', null, 'orange-key', null, 'wall', null],
        ['orange-door', 'wall', null, 'wall', null, 'wall', 'orange-door'],
        [null, null, null, null, null, null, null],
        ['wall', 'wall', null, 'orange-door', null, 'wall', 'wall'],
        [null, 'pink-door', null, null, null, 'pink-door', null],
        [null, 'wall', null, 'wall', null, 'wall', null],
        ['red', 'wall', 'green', 'wall', 'green', 'wall', 'blue']
    ],
]

export const bestTimes = [
    1, 4, 5, 5, 3,
    9, 5, 7, 10, 10,
    14, 14, 10, 22, 22,
    28, 16, 28, 19, 9,
    9, 11, 19, 22, 36,
    21, 10, 29, 21, 23,
    15, 11, 41, 21, 34,
    46, 100, 100, 100, 100
]

export function getLevel(i){
    let l = levels[i].map((r) => r.slice());
    for(let j = 0; j<l.length; j++){
        for(let k = 0; k<l[0].length; k++){
            if(l[j][k]==='orange-key'){
                l[j][k] = null;
            }
            if(l[j][k]==='pink-key'){
                l[j][k] = null;
            }
        }
    }
    return l;
}

export function numLevels(){
    return levels.length;
}

export function getOrange(i){
    const l = levels[i];
    let ans = []
    for(let i = 0; i<l.length; i++){
        for(let j = 0; j<l[0].length; j++){
            if(l[i][j]==='orange-door'||l[i][j]==='orange-key'){
                ans.push([i, j]);
            }
        }
    }
    return ans;
}

export function isOrangeKey(l, i, j){
    return levels[l][i][j]==='orange-key';
}

export function getPink(i){
    const l = levels[i];
    let ans = []
    for(let i = 0; i<l.length; i++){
        for(let j = 0; j<l[0].length; j++){
            if(l[i][j]==='pink-door'||l[i][j]==='pink-key'){
                ans.push([i, j]);
            }
        }
    }
    return ans;
}

export function isPinkKey(l, i, j){
    return levels[l][i][j]==='pink-key';
}