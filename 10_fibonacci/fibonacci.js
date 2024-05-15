const fibonacci = function(num) {
    const intNum = Number(num);
    if (intNum < 0) { return "OOPS";}
    else {
        if (intNum === 0 || intNum === 1) {return intNum;}
        else {
            return (fibonacci(intNum -1)) + (fibonacci(intNum -2));
        }
    }
};

// Do not edit below this line
module.exports = fibonacci;
