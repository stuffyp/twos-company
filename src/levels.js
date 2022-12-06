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
]

export function getLevel(i){
    return levels[i];
}

export function numLevels(){
    return levels.length;
}