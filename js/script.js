"use strict";
let num = 50;

if (num == 5) {
    console.log('yes');
} else {
    console.log('no');
}

(num == 5) ? console.log('yes') : console.log('no');

switch (num) {
    case 49:
        console.log('no');
    break;
    case 50:
        console.log('yes');
    break;
    default:
        console.log('no');
    break;
}