"use strict";
function printText(text, alignment) {
}
printText('hello', 'left');
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(x) { }
configure({
    width: 100
});
configure('auto');
var b1 = true;
var oMap = {
    count: 0,
};
if (true) {
    oMap.count = 1;
}
function handleRequest(url, method) {
    console.log(url, method);
}
var req = {
    url: 'http://www.example.cn',
    method: 'GET',
};
handleRequest(req.url, req.method);
