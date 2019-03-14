'use strict';

function myFavoriteNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(myFaveriteNumber());

if (myFavoriteNumber > 5) {
    console.log(`Higher`);
} else if (myFavoriteNumber < 5) {
    console.log(`Lower`);
} else {
    console.log(myFavoriteNumber());
}
