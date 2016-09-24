'use strict';

const fs = require('fs');
const _ = require('lodash');

let numberlist = [];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < 100; i++) {
    numberlist.push(getRandomIntInclusive(0, 100));
}

numberlist = numberlist.sort((a, b) => a - b);


fs.writeFileSync('numberlist.txt', numberlist.join('\n'));
