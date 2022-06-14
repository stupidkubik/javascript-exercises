const fibonacci = function(number) {
    if (number <= 0) {
        return "OOPS";
    } else {
        let fib = [1, 1];
        for (let i = 2; i < 30; i++) {
            fib.push(fib[i - 2] + fib[i - 1]);
        }
        return fib[number - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
