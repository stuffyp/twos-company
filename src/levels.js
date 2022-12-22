import { checkWin } from "./game-logic";

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
        ['wall', 'wall', 'wall', 'wall', null, 'wall', 'wall', 'wall', 'wall'],
        ['wall', 'wall', 'wall', 'blue', null, 'red', 'wall', 'wall', 'wall'],
        ['wall', 'wall', 'wall', 'wall', null, 'wall', 'wall', 'wall', 'wall'],
        ['wall', 'green', 'wall', 'wall', null, 'wall', 'wall', 'green', 'wall'],
        [null, null, null, null, null, null, null, null, null],
        ['wall', 'red', 'wall', null, 'wall', null, 'wall', 'blue', 'wall'],
        ['wall', 'wall', 'wall', null, 'neut', null, 'wall', 'wall', 'wall'],
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
        [null, 'orange-door', null, 'orange-door', null, null, 'orange-door', null, 'orange-door', null],
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
        ['pink-door', 'green', 'wall', 'green', null],
        ['orange-door',  'wall', 'wall', 'wall', 'pink-door'],
        [null, null, 'red', null, null],
        [null, 'wall', 'wall', 'wall', null],
        ['orange-key', 'wall', 'wall', 'wall', 'pink-key'],
        [null, 'wall', 'wall', 'wall', null],
        [null, null, 'red', null, null],
        ['orange-door', 'wall', 'wall', 'wall', 'pink-door'],
        [null, 'blue', 'wall', 'blue', 'orange-door']
    ],
    [
        [null, null, null, null, null, null, null, null, null, 'green'],
        [null, 'orange-door', 'orange-door', 'orange-door', 'orange-door', 'orange-door', null, 'wall', 'wall', null],
        [null, 'orange-door', 'orange-key', null, 'green', 'orange-door', null, 'pink-door', 'pink-door', null],
        [null, 'orange-door', null, null, null, 'orange-door', null, 'wall', 'wall', null],
        [null, 'orange-door', 'orange-door', 'orange-door', 'orange-door', 'orange-door', null, 'wall', 'wall', null],
        [null, null, null, null, null, null, null, 'wall', 'wall', null],
        ['wall', 'wall', 'wall', null, 'wall', 'wall', 'wall', 'wall', 'wall', null],
        ['blue', 'wall', 'wall', null, 'wall', 'wall', 'wall', 'red', null, null],
        [null, null, null, 'orange-door', null, null, 'wall', null, 'wall', null],
        [null, 'wall', 'wall', 'orange-door', 'wall', null, 'wall', null, 'wall', null],
        ['wall', 'wall', 'orange-door', null, null, null, 'orange-door', null, 'wall', null],
        ['wall', 'wall', 'wall', null, 'wall', 'wall', 'wall', null, null, 'blue'],
        ['wall', 'wall', 'wall', 'pink-door', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
        ['red', null, null, null, 'pink-key', 'wall', 'wall', 'wall', 'wall', 'wall']
    ],
    [
        ['wall', 'wall', 'green', 'pink-door', null, 'wall', 'wall', 'wall', 'wall'],
        ['wall', 'wall', 'wall', 'pink-door', 'wall', 'wall', 'wall', 'wall', 'wall'],
        ['wall', 'wall', null, 'pink-door', null, null, null, 'wall', 'wall'],
        ['wall', 'wall', 'pink-door', 'pink-door', 'pink-door', 'pink-door', 'pink-door', 'wall', 'wall'],
        ['orange-door', 'orange-door', 'orange-door', 'orange-door', 'orange-door', 'orange-door', 'orange-door', 'orange-door', 'orange-door'],
        ['pink-door', 'wall', null, null, 'orange-door', null, null, 'wall', 'orange-door'],
        ['wall', 'wall', 'wall', 'wall', 'orange-key', 'wall', 'wall', 'wall', 'orange-door'],
        ['pink-door', null, null, null, null, null, 'blue', 'wall', 'red'],
        ['wall', null, null, 'pink-key', null, null, null, 'pink-door', 'orange-door'],
        ['pink-door', 'green', null, null, null, null, 'blue', 'wall', 'red'],
        ['wall', 'pink-door', 'wall', 'wall', 'wall', 'wall', 'pink-door', 'wall', 'pink-door']
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
    [
        [null, null, null, null, 'wall', 'blue', null, 'green'],
        [null, 'wall', 'wall', null, 'wall', null, null, null],
        [null, 'wall', 'wall', null, 'pink-key', null, 'pink-door', 'pink-door'],
        [null, 'wall', 'wall', null, 'wall', 'red', 'pink-door', null],
        [null, null, 'orange-door', null, 'pink-door', 'pink-door', 'pink-door', 'wall'],
        ['wall', 'wall', 'pink-door', 'wall', 'wall', 'wall', 'pink-door', 'wall'],
        ['wall', 'pink-door', 'pink-door', 'pink-door', 'red', 'wall', null, 'wall'],
        ['orange-door', 'pink-door', null, null, 'pink-door', 'orange-door', null, 'orange-key'],
        ['wall', 'pink-door', null, null, 'pink-door', 'wall', null, 'wall'],
        ['wall', 'green', 'pink-door', 'pink-door', 'blue', 'wall', 'wall', 'wall'],
    ],
    [
        ['green', null, null, null, null, null, 'pink-key', null, null, 'blue'],
        [null, 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', null],
        [null, null, null, 'wall', 'wall', 'wall', 'wall', 'wall', null, null],
        ['wall', 'wall', null, 'wall', 'wall', 'wall', 'wall', 'wall', null, 'wall'],
        ['wall', 'wall', null, 'wall', 'wall', 'wall', 'wall', 'wall', null, 'wall'],
        ['pink-door', 'pink-door', null, 'pink-door', 'pink-door', 'orange-door', 'neut', 'wall', null, 'wall'],
        ['wall', 'wall', null, 'wall', 'wall', 'wall', 'wall', 'wall', null, 'wall'],
        ['wall', 'wall', null, 'wall', 'wall', 'wall', 'wall', 'wall', null, 'wall'],
        [null, null, null, 'wall', 'wall', 'wall', 'wall', 'wall', null, null],
        [null, 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', null],
        ['blue', null, null, null, null, null, 'orange-key', null, null, 'green']
    ],
    [
        ['orange-door', 'orange-door', 'orange-door', 'wall', 'wall', 'green', null, null, 'wall', 'wall'],
        [null, 'wall', 'orange-door', 'wall', 'wall', 'wall', 'pink-door', 'wall', 'wall', 'wall'],
        ['blue', 'wall', 'orange-door', 'orange-door', 'wall', 'wall', 'pink-door', 'wall', null, 'wall'],
        ['orange-door', null, 'orange-door', null, null, null, null, null, null, null],
        ['red', 'wall', 'orange-door', 'wall', null, 'wall', 'orange-door', 'wall', 'orange-door', 'wall'],
        ['wall', 'wall', 'orange-door', 'orange-door', null, null, 'orange-door', null, null, null],
        ['wall', 'wall', 'orange-door', 'wall', null, 'orange-door', 'orange-door', 'orange-door', null, 'wall'],
        ['orange-key', 'green', 'orange-door', 'pink-door', null, 'orange-door', 'pink-key', 'orange-door', null, 'wall'],
        ['wall', 'wall', 'wall', 'wall', null, 'orange-door', 'orange-door', 'orange-door', null, 'wall'],
        ['wall', 'wall', 'wall', 'wall', null, null, null, null, null, 'wall'],
        ['wall', 'wall', 'wall', null, 'red', null, null, null, 'blue', null],
        ['wall', 'wall', 'wall', 'wall', null, 'wall', 'wall', 'wall', null, 'wall']
    ],
    [
        ['wall', 'wall', 'wall', 'wall', 'wall', null, 'wall', 'wall', 'wall', 'wall'],
        ['wall', 'wall', 'wall', 'wall', 'wall', null, 'wall', 'wall', 'wall', 'wall'],
        ['wall', null, 'wall', 'wall', null, null, null, 'blue', 'wall', 'wall'],
        ['wall', 'orange-key', 'pink-door', 'wall', 'wall', 'pink-door', 'wall', 'wall', 'wall', 'wall'],
        ['wall', null, 'wall', 'wall', 'wall', null, 'wall', null, null, 'green'],
        ['wall', null, 'wall', 'wall', 'wall', null, 'wall', 'wall', null, 'wall'],
        [null, null, 'orange-door', 'pink-door', null, null, 'orange-door', 'orange-door', null, 'wall'],
        ['blue', null, 'wall', 'wall', 'wall', null, 'wall', null, 'wall', 'wall'],
        ['wall', null, 'wall', 'wall', 'wall', null, 'wall', null, 'wall', 'wall'],
        ['wall', null, 'wall', 'green', 'orange-door', 'pink-door', null, null, 'pink-key', 'pink-door'],
        ['wall', null, 'wall', 'wall', 'wall', 'wall', 'wall', null, 'wall', null],
        ['wall', null, 'pink-door', 'wall', 'wall', 'wall', 'pink-door', null, 'wall', null],
        ['red', null, null, null, null, null, null, 'red', 'wall', null],
        ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', null, null, null]
    ],
    [
        ['wall', 'wall', 'wall', 'blue', null, null, 'green', 'wall', 'wall', 'wall'],
        ['orange-door', 'wall', 'wall', null, 'wall', 'wall', null, 'wall', 'wall', 'wall'],
        ['orange-door', 'wall', 'orange-key', null, null, 'wall', null, 'pink-door', 'red', 'wall'],
        ['orange-door', 'wall', 'wall', null, 'wall', 'wall', null, 'pink-door', 'wall', 'wall'],
        ['orange-door', null, null, null, null, null, null, 'pink-door', 'pink-door', 'pink-door'],
        ['orange-door', 'wall', 'wall', 'pink-door', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
        ['orange-door', 'wall', 'wall', 'pink-door', 'wall', null, null, 'pink-door', null, 'wall'],
        ['orange-door', 'orange-door', 'wall', 'pink-door', null, 'pink-door', null, 'pink-key', null, 'pink-door'],
        ['wall', 'orange-door', 'wall', null, 'wall', null, null, null, null, 'wall'],
        ['wall', 'orange-door', 'wall', null, 'wall', 'wall', 'orange-door', 'pink-door', 'wall', 'wall'],
        ['blue', null, 'orange-door', 'orange-door', 'orange-door', 'orange-door', 'orange-door', null, 'orange-door', 'orange-door'],
        ['wall', null, 'wall', 'orange-door', 'orange-door', 'wall', 'wall', 'pink-door', 'wall', 'wall'],
        ['wall', 'wall', 'wall', 'orange-door', null, 'green', 'wall', 'wall', 'wall', 'wall'],
        ['wall', 'wall', 'wall', 'orange-door', 'wall', null, 'wall', 'wall', 'wall', 'wall'],
        ['wall', 'wall', 'wall', 'orange-door', 'wall', 'red', 'wall', 'wall', 'wall', 'wall']
    ],
    [
        ['blue', null, null, null, null, 'wall', 'wall', 'wall', 'wall', 'wall'],
        [null, null, null, null, null, 'wall', 'wall', 'wall', 'wall', 'wall'],
        [null, null, 'pink-key', null, null, 'wall', 'wall', 'wall', 'wall', 'wall'],
        [null, null, null, null, null, 'wall', 'wall', 'red', 'wall', 'wall'],
        [null, null, null, null, null, null, null, null, 'wall', 'wall'],
        [null, null, null, null, null, 'wall', null, null, 'wall', 'wall'],
        [null, null, 'orange-key', null, null, 'wall', 'wall', null, 'wall', 'wall'],
        [null, null, null, null, null, 'wall', 'wall', null, 'wall', 'wall'],
        ['blue', null, null, null, null, 'wall', null, 'orange-door', null, 'pink-door'],
        ['wall', 'wall', 'wall', null, 'wall', 'wall', 'wall', null, 'wall', null],
        [null, null, null, 'orange-door', 'pink-door', null, null, 'orange-door', 'pink-door', 'pink-door'],
        [null, 'wall', 'wall', 'orange-door', 'wall', 'wall', 'wall', null, 'wall', 'green'],
        [null, 'wall', 'wall', 'pink-door', 'wall', 'wall', 'wall', null, 'wall', 'wall'],
        [null, null, null, null, 'wall', 'wall', null, 'orange-door', 'red', 'wall'],
        ['wall', 'wall', 'wall', 'orange-door', 'green', 'wall', 'wall', 'wall', 'wall', 'wall']
    ],
    [
        ['wall', 'wall', 'wall', null, 'wall', 'orange-door', 'orange-door', 'orange-door', 'red'],
        ['wall', 'wall', 'wall', 'pink-door', 'wall', 'orange-door', 'wall', 'wall', 'orange-door'],
        ['wall', 'wall', 'wall', null, 'wall', 'green', 'wall', 'wall', 'orange-door', 'wall'],
        [null, 'orange-door', null, 'neut', 'orange-door', 'pink-key', 'blue', 'orange-door', 'orange-door'],
        ['wall', 'wall', 'wall', 'pink-door', 'wall', 'orange-door', 'wall', 'wall', 'wall'],
        ['pink-door', 'pink-door', 'green', 'orange-key', 'pink-door', 'neut', null, 'pink-door', null],
        ['pink-door', 'wall', 'wall', 'blue', 'wall', null, 'wall', 'wall', 'wall'],
        ['pink-door', 'wall', 'wall', 'pink-door', 'wall', 'orange-door', 'wall', 'wall', 'wall'],
        ['red', 'pink-door', 'pink-door', 'pink-door', 'wall', null, 'wall', 'wall', 'wall']
    ],
    [
        ['wall', 'wall', 'orange-door', 'orange-door', 'orange-door', 'wall', 'pink-door', 'orange-door', 'orange-door', 'wall'],
        ['wall', 'wall', 'orange-door', 'wall', 'orange-door', 'wall', 'pink-door', 'wall', null, 'wall'],
        ['orange-door', 'orange-door', 'orange-door', null, 'orange-door', null, 'pink-door', null, null, 'wall'],
        ['orange-door', 'wall', null, 'wall', 'orange-door', 'orange-door', 'orange-door', 'wall', null, 'wall'],
        ['orange-door', 'orange-door', 'orange-door', 'orange-door', 'orange-door', 'wall', 'pink-door', null, null, 'wall'],
        [null, 'wall', null, 'wall', 'orange-door', 'wall', 'pink-door', 'wall', 'wall', 'wall'],
        ['orange-key', 'wall', 'pink-key', 'pink-door', 'pink-door', 'pink-door', 'green', 'wall', 'wall', 'wall'],
        [null, 'wall', null, 'wall', 'orange-door', 'wall', 'wall', 'wall', 'wall', 'wall'],
        ['blue', null, 'red', 'wall', 'orange-door', 'wall', 'wall', 'orange-door', 'wall', 'wall'],
        ['wall', null, 'wall', 'wall', 'orange-door', 'pink-door', null, null, null, 'pink-door'],
        ['pink-door', 'pink-door', 'pink-door', 'wall', 'orange-door', 'orange-door', 'wall', 'pink-door', 'wall', 'wall'],
        ['pink-door', 'green', 'pink-door', 'pink-door', 'orange-door', 'wall', 'wall', null, 'wall', 'wall'],
        ['pink-door', 'pink-door', 'pink-door', 'wall', 'orange-door', 'wall', 'red', null, null, 'wall'],
        ['wall', 'wall', 'orange-door', 'wall', 'orange-door', 'wall', 'wall', 'orange-door', 'wall', 'wall'],
        ['wall', 'blue', 'orange-door', 'orange-door', 'orange-door', 'wall', 'wall', 'pink-door', 'wall', 'wall']
    ],
    [
        ['wall', 'wall', 'orange-door', 'orange-door', 'orange-door', 'orange-door', 'wall', 'wall', 'wall', 'wall'],
        ['wall', 'wall', 'orange-door', null, null, 'orange-door', 'wall', 'wall', 'wall', 'wall'],
        ['wall', 'wall', 'orange-door', null, null, 'orange-door', 'blue', 'neut', 'wall', 'wall'],
        ['pink-door', 'wall', 'orange-door', 'orange-door', 'orange-door', 'orange-door', 'wall', 'wall', 'wall', 'wall'],
        [null, 'wall', 'wall', 'wall', null, 'wall', 'wall', 'wall', 'wall', 'wall'],
        [null, 'orange-door', 'green', null, 'orange-door', null, null, null, 'wall', 'wall'],
        [null, 'wall', null, 'wall', 'orange-door', 'wall', 'wall', null, 'wall', 'wall'],
        ['red', 'wall', null, 'wall', 'orange-door', 'wall', 'wall', null, 'wall', null],
        [null, 'wall', null, 'orange-door', 'neut', null, null, 'orange-door', 'pink-door', 'pink-door'],
        [null, 'wall', null, 'wall', 'orange-key', 'wall', 'wall', null, 'wall', 'blue'],
        [null, 'wall', null, 'wall', 'orange-door', 'red', 'wall', 'pink-door', 'wall', 'wall'],
        ['pink-door', 'wall', null, 'wall', null, 'wall', 'wall', null, 'wall', 'wall'],
        [null, null, 'pink-key', null, 'wall', 'wall', 'wall', null, 'wall', 'wall'],
        [null, 'wall', 'wall', null, 'pink-door', null, null, 'green', 'wall', 'wall'],
        ['pink-door', null, null, null, 'wall', 'wall', 'wall', 'wall', 'wall', 'wall']
    ],
    [
        ['wall', null, 'blue', null, 'wall', 'wall', null, 'pink-door', null, 'wall'],
        ['wall', null, null, null, null, null, 'pink-door', 'pink-door', 'pink-door', null],
        ['wall', 'wall', 'wall', 'pink-door', 'pink-door', 'pink-door', 'pink-door', 'pink-key', 'pink-door', 'pink-door'],
        ['wall', null, 'wall', null, null, null, 'pink-door', null, 'pink-door', null],
        ['orange-door', 'pink-door', 'pink-door', 'pink-door', 'pink-door', 'pink-door', 'pink-door', 'red', 'pink-door', null],
        ['wall', 'green', 'wall', null, null, null, 'pink-door', 'pink-door', 'pink-door', null],
        ['wall', 'wall', 'wall', 'neut', null, null, null, 'pink-door', null, 'wall'],
        ['wall', 'wall', 'wall', 'wall', null, null, 'wall', 'wall', 'wall', 'wall'],
        ['wall', null, 'orange-door', null, null, null, 'neut', 'wall', 'wall', 'wall'],
        [null, 'orange-door', 'orange-door', 'orange-door', null, null, null, 'wall', 'green', 'wall'],
        [null, 'orange-door', 'blue', 'orange-door', 'orange-door', 'orange-door', 'orange-door', 'orange-door', 'orange-door', 'pink-door'],
        [null, 'orange-door', null, 'orange-door', null, null, null, 'wall', null, 'wall'],
        ['orange-door', 'orange-door', 'orange-key', 'orange-door', 'orange-door', 'orange-door', 'orange-door', 'wall', 'wall', 'wall'],
        [null, 'orange-door', 'orange-door', 'orange-door', null, null, null, null, null, 'wall'],
        ['wall', null, 'orange-door', null, 'wall', 'wall', null, 'red', null, 'wall']
    ],
]

let custom = [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
]

export const bestTimes = [
    1, 4, 5, 5, 3,
    9, 5, 7, 10, 10,
    14, 14, 10, 22, 22,
    28, 16, 28, 25, 14,
    9, 9, 11, 19, 22,
    36, 21, 10, 23, 21,
    23, 15, 11, 41, 21,
    34, 42, 26, 29, 46,
    43, 81, 56, 74, 68,
    71, 37, 81, 57, 64,
]

//deprecated
/*export const eloValues = [
    800, 800, 850, 900, 950,
    1000, 1000, 1050, 1100, 1100,
    1200, 1200, 1250, 1250, 1300,
    1400, 1350, 1400, 1500, 1500,
    1000, 1100, 1300, 1400, 1450,
    1500, 1600, 1150, 1550, 1400,
    1700, 1500, 1500, 1750, 1700,
    1800, 1700, 1800, 1900, 1750,
    2000, 1900, 1950, 2100, 2000,
    2050, 1900, 2200
]


export function performance(completedVals){
    let total = 0;

    let maxSolvedElo = 700;
    let secondMaxSolvedElo = 700;
    let thirdMaxSolvedElo = 700;
    for(let i = 0; i<completedVals.length; i++){
        if(completedVals[i]){
            if(eloValues[i]>maxSolvedElo){
                thirdMaxSolvedElo = secondMaxSolvedElo;
                secondMaxSolvedElo = maxSolvedElo;
                maxSolvedElo = eloValues[i];
            } else if(eloValues[i]>secondMaxSolvedElo){
                thirdMaxSolvedElo = secondMaxSolvedElo;
                secondMaxSolvedElo = eloValues[i];
            } else if(eloValues[i]>thirdMaxSolvedElo){
                thirdMaxSolvedElo = eloValues[i];
            }
        }
    }

    let baseline = Math.floor(maxSolvedElo/2+secondMaxSolvedElo/3+thirdMaxSolvedElo/6);

    for(let i = 0; i<completedVals.length; i++){
        if(completedVals[i]===0){
            total += Math.min(eloValues[i]-250, baseline);
            continue;
        }
        if(completedVals[i]===bestTimes[i]){
            total += Math.max(eloValues[i]+250, baseline);
            continue;
        }
        let ratio = completedVals[i]/bestTimes[i];
        if(ratio < 1){
            ratio = 1;
        } else if (ratio > 2){
            ratio = 2;
        }
        const efficiency = 3-2*ratio;
        total += eloValues[i]+250*efficiency;
    }
    return Math.floor(total/completedVals.length);
}*/

const levelNames = [
    "Two's Company",
    "First Steps",
    "Roundabout",
    "Seeing Double",
    "Traffic Jam",
    "Figure Eight",
    "A Helping Hand",
    "Three's a Crowd",
    "On the Stack (Part I)",
    "Suspicious Behavior",
    "Racetrack",
    "On the Stack (Part II)",
    "The Bridge",
    "Wishing Well",
    "Salmon Ladder",
    "Through the Looking-Glass",
    "Jailbreak",
    "Limiting Reactant",
    "Christmas Tree",
    "Bit Shift",
    "Door and Switch (Part I)",
    "Castle Gates",
    "Turbulence",
    "The Crane",
    "Nucleus",
    "Icebreaker",
    "Leapfrog",
    "Door and Switch (Part II)",
    "Puppet on a String",
    "Cocktail Shaker",
    "Down the Rabbit Hole",
    "Vending Machine",
    "Pocket Mirror",
    "Rhythm Game",
    "Rorschach Test",
    "Levitation",
    "Particle Accelerator",
    "Soap Bubble",
    "Polar Express",
    "Jellyfish",
    "Claustrophobia",
    "Modular Arithmetic",
    "Forbidden Fruit",
    "Smokestacks",
    "Ant Colony",
    "Table Tennis",
    "Butterfly",
    "Valentine's Day",
    "The Snowman",
    "Two's Company (Requiem)",
];







export function levelName(i){
    return levelNames[i];
}

export function getLevel(i) {
    let l;
    if (i === -1) {
        l = custom.map((r) => r.slice());
    } else {
        l = levels[i].map((r) => r.slice());
    }
    for (let j = 0; j < l.length; j++) {
        for (let k = 0; k < l[0].length; k++) {
            if (l[j][k] === 'orange-key') {
                l[j][k] = null;
            }
            if (l[j][k] === 'pink-key') {
                l[j][k] = null;
            }
        }
    }
    return l;
}

export function numLevels() {
    return levels.length;
}

export function getOrange(i) {
    const l = i === -1 ? custom : levels[i];
    let ans = []
    for (let i = 0; i < l.length; i++) {
        for (let j = 0; j < l[0].length; j++) {
            if (l[i][j] === 'orange-door' || l[i][j] === 'orange-key') {
                ans.push([i, j]);
            }
        }
    }
    return ans;
}

export function isOrangeKey(l, i, j) {
    const lv = l === -1 ? custom : levels[l];
    return lv[i][j] === 'orange-key';
}

export function getPink(i) {
    const l = i === -1 ? custom : levels[i];
    let ans = []
    for (let i = 0; i < l.length; i++) {
        for (let j = 0; j < l[0].length; j++) {
            if (l[i][j] === 'pink-door' || l[i][j] === 'pink-key') {
                ans.push([i, j]);
            }
        }
    }
    return ans;
}

export function isPinkKey(l, i, j) {
    const lv = l === -1 ? custom : levels[l];
    return lv[i][j] === 'pink-key';
}

export function writeSquare(i, j, val) {
    const ret = custom[i][j] !== val;
    custom[i][j] = val;
    return ret;
}

export function customLevelValid() {
    let greenCount = 0;
    let blueCount = 0;
    let redCount = 0;
    let orangeKeyCount = 0;
    let pinkKeyCount = 0;
    for (let i = 0; i < custom.length; i++) {
        for (let j = 0; j < custom[i].length; j++) {
            const value = custom[i][j];
            if (value === 'green') {
                greenCount += 1;
            } else if (value === 'blue') {
                blueCount += 1;
            } else if (value === 'red') {
                redCount += 1;
            } else if (value === 'orange-key') {
                orangeKeyCount += 1;
            } else if (value === 'pink-key') {
                pinkKeyCount += 1;
            }
        }
    }
    if (redCount + greenCount + blueCount === 0) {
        return false;
    }
    if (redCount === 1) {
        return false;
    }
    if (greenCount === 1) {
        return false;
    }
    if (blueCount === 1) {
        return false;
    }
    if (pinkKeyCount > 1 || orangeKeyCount > 1) {
        return false;
    }
    return !checkWin(custom);
}

export function loadCode(str){
    const strMap = {
        'e': null,
        'w': 'wall',
        'g': 'green',
        'b': 'blue',
        'r': 'red',
        'n': 'neut',
        'o': 'orange-door',
        'p': 'pink-door',
        'k': 'orange-key',
        'q': 'pink-key',
    }

    if(!/^[ewgbrnopkqEWGBRNOPKQ0-9]+$/.test(str)){
        throw new Error('invalid level code :(');
    }

    let temp = custom.slice();
    if(!/\d/.test(str.charAt(0))){
        throw new Error('invalid level code :(');
    }
    let j = parseInt(str.charAt(0));
    if (j===0){
        j = 10;
    }
    let idxStart = 1;
    let idxEnd = 1;
    while(/\d/.test(str.charAt(idxEnd))){
        idxEnd++;
    }
    let i = parseInt(str.substring(idxStart, idxEnd));
    if(i<1||i>15){
        throw new Error('invalid level code :(');
    }

    for(let i1 = 0; i1<custom.length; i1++){
        for(let j1 = 0; j1<custom[0].length; j1++){
            if(i1<i&&j1<j){
                temp[i1][j1] = null;
            } else {
                temp[i1][j1] = 'wall';
            }
        }
    }

    let i1 = 0;
    let j1 = 0;
    while(idxStart < str.length){
        idxStart = idxEnd;
        const c = str.charAt(idxStart);
        const val = strMap[c.toLowerCase()];
        let num;
        if(/[A-Z]/.test(c)){
            num = 2;
            idxEnd++;
        } else if(idxStart===str.length-1||/[a-zA-Z]/.test(str.charAt(idxStart+1))){
            num = 1;
            idxEnd++;
        } else {
            idxStart++;
            idxEnd++;
            while(idxEnd < str.length && /\d/.test(str.charAt(idxEnd))){
                idxEnd++;
            }
            num = parseInt(str.substring(idxStart, idxEnd));
        }
        for(let k=0; k<num; k++){
            temp[i1][j1] = val;
            j1++;
            if(j1===j){
                j1 = 0;
                i1++;
            }
        }
    }
    custom = temp;
}

//format: maps square type to letter, followed by number of repetitions
//if once, then number omitted, if twice, then number ommited and letter capitalized
//first 2-3 numbers represent dimension
//[last digit of horizontal dimension][digits of vertical dimension]
export function levelCode(k) {
    const l = k === -1 ? custom : levels[k];

    let curr = -1;
    let count = 0;
    let ans = String(l[0].length % 10) + String(l.length);

    const strMap = {
        'wall': 'w',
        'green': 'g',
        'blue': 'b',
        'red': 'r',
        'neut': 'n',
        'orange-door': 'o',
        'pink-door': 'p',
        'orange-key': 'k',
        'pink-key': 'q',
    }
    curr = l[0][0];
    for (let i = 0; i < l.length; i++) {
        for (let j = 0; j < l[i].length; j++) {
            if (l[i][j] !== curr) {
                let temp = curr === null ? 'e' : strMap[curr];
                if (count === 1) {
                    ans += temp;
                } else if (count === 2) {
                    ans += temp.toUpperCase();
                } else {
                    ans += temp;
                    ans += String(count);
                }
                count = 0;
                curr = l[i][j];
            }
            count += 1;
        }
    }
    let temp = curr === null ? 'e' : strMap[curr];
    if (count === 1) {
        ans += temp;
    } else if (count === 2) {
        ans += temp.toUpperCase();
    } else {
        ans += temp;
        ans += String(count);
    }
    return ans;
}