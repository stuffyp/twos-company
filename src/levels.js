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
        [null, null, 'green', 'wall', 'red'],
        ['blue', null, null, 'wall', null],
        [null, 'wall', null, 'wall', null],
        [null, 'wall', null, 'green', 'blue'],
        [null, 'red', null, null, null]
    ],
    [
        ['blue', 'wall', 'green', 'wall', null],
        [null, 'wall', null, 'wall', null],
        ['blue', 'wall', null, 'wall', null],
        ['wall', 'wall', null, 'wall', 'wall'],
        ['wall', 'red', null, 'red', 'green']
    ],
    [
        ['green', 'blue', null, 'wall', 'wall'],
        ['red', 'wall', null, 'wall', 'wall'],
        [null, null, null, null, null],
        ['wall', 'wall', null, 'wall', 'blue'],
        ['wall', 'wall', null, 'red', 'green'],
    ],
    [
        [null, null, 'wall', null, 'wall', null, null],
        [null, null, 'wall', null, 'wall', null, null],
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
        ['blue', null, null, null, 'red', 'green'],
        ['wall', 'wall', null, 'wall', 'wall', 'wall'],
        [null, null, null, 'neut', null, 'wall'],
        ['wall', null, null, null, null, 'wall'],
        ['wall', null, null, null, null, null],
        ['wall', 'wall', 'wall', null, 'wall', 'wall'],
        ['green', 'red', null, null, null, 'blue'],
    ],
    [
        ['wall', 'blue', 'wall', 'red', 'wall', 'green', 'wall'],
        ['wall', null, 'wall', null, 'wall', null, 'wall'],
        ['wall', null, 'neut', null, 'neut', null, null],
        ['wall', null, 'wall', null, 'wall', null, 'wall'],
        ['wall', 'red', 'wall', 'green', 'wall', 'blue', 'wall'],
    ],
    [
        [null, null, null, null, 'wall', null, 'blue', 'green', 'wall'],
        [null, null, null, null, 'wall', null, 'wall', null, 'wall'],
        [null, null, null, 'wall', 'wall', null, 'wall', null, 'wall'],
        [null, null, null, null, null, null, 'neut', null, null],
        [null, null, null, 'wall', 'wall', null, 'wall', null, 'wall'],
        [null, null, null, null, 'wall', null, 'wall', null, 'wall'],
        [null, null, 'green', 'blue', 'wall', null, null, null, 'wall'],
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
        [null, null, 'wall', 'red', 'wall', null, null],
        [null, null, 'wall', 'blue', 'wall', null, null],
        [null, null, 'wall', null, 'wall', null, null],
        [null, null, 'wall', null, 'wall', null, null],
        ['wall', 'wall', 'wall', null, 'wall', 'wall', 'wall'],
        ['green', null, 'orange-key', 'orange-door', null, null, 'green'],
        ['wall', 'wall', 'wall', null, 'wall', 'wall', 'wall'],
        [null, null, 'wall', null, 'wall', null, null],
        [null, null, 'wall', null, 'wall', null, null],
        [null, null, 'wall', 'blue', 'wall', null, null],
        [null, null, 'wall', 'red', 'wall', null, null],
    ],
    [
        [null, 'orange-door', null, null, null, null, null, null, null, 'wall'],
        [null, 'wall', null, null, null, null, null, null, null, 'wall'],
        [null, 'wall', null, null, null, null, null, null, null, 'wall'],
        ['blue', null, null, null, null, 'orange-key', null, null, null, null],
        ['blue', 'wall', null, null, null, null, null, null, null, 'wall'],
        ['green', 'wall', null, null, null, null, null, null, null, 'wall'],
        ['red', 'wall', 'red', null, null, null, null, null, 'green', 'wall'],
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
]

export const bestTimes = [
    1, 4, 5, 3, 9,
    5, 7, 11, 14, 14,
    10, 22, 17, 17, 9,
    9, 11, 13, 19, 21,
    10, 30, 21, 23, 16,
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