const sumAll = function(x, y) {
    let sum = 0;
    if (typeof x === "number" && typeof y === "number") {
        if (x > y && y > 0) {
            for (;y <= x; y++) {
                sum += y;
            }
            return sum;
        } else if (x < y && x > 0) {
            for (;x <= y; x++) {
                sum += x;
            }
            return sum;
        } else return sum = 'ERROR';
    } else return sum = 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
