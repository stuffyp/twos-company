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
]

export const bestTimes = [1, 4, 5, 3, 9, 5, 7, 11, 14, 14, 11, 22]

export function getLevel(i){
    return levels[i];
}

export function numLevels(){
    return levels.length;
}