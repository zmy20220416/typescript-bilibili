"use strict";
var x = undefined;
var y = null;
// let z: string = undefined;
function doSomething(x) {
    if (x === null) {
        // ...
    }
    else {
        console.log(x.toUpperCase());
    }
}
function liveDangerously(x) {
    console.log(x.toFixed());
}
