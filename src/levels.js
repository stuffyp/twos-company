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
        ['blue', null, null, null, 'green'],
        [null, 'wall', null, 'wall', null],
        ['green', null, null, null, 'blue'],
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
]

export function getLevel(i){
    return levels[i];
}

export function numLevels(){
    return levels.length;
}