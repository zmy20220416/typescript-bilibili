"use strict";
function printCoord(pt) {
    return {
        x: Math.pow(pt.x, 4),
        y: Math.pow(pt.y, 4)
    };
}
printCoord({
    x: 100,
    y: 200
});
var w = {
    title: 'hello js',
    count: 200
};
// unique array with ES5
function unique(ary) {
    var res = [];
    for (var i = 0; i < ary.length; i++) {
        if (res.indexOf(ary[i]) === -1) {
            res.push(ary[i]);
        }
    }
    return res;
}
