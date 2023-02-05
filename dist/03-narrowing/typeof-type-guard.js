"use strict";
function printAll(param) {
    if (param && typeof param === 'object') {
        for (var _i = 0, param_1 = param; _i < param_1.length; _i++) {
            var iterator = param_1[_i];
            console.log(iterator);
        }
    }
    else if (typeof param === 'string') {
        console.log(param);
    }
    else {
        console.log(null);
    }
}
function multiplyAll(values, factor) {
    if (!values)
        return values;
    return values.map(function (value) { return value * factor; });
}
function multiplyValue(container) {
    if (container.value) {
        console.log(container.value);
    }
}
multiplyValue({ value: undefined });
multiplyValue({ value: null });
multiplyValue({ value: 100 });
function move(animal) {
    if ('swim' in animal)
        return animal.swim();
    return animal.fly();
}
function padLeft(padding, input) {
    if (typeof padding === 'number')
        return new Array(padding + 1).join(' ') + input;
    return padding + input;
}
console.log(padLeft(3, 'def'));
