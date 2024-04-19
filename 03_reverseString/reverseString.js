const reverseString = function(initialString) {
    let i = initialString.length-1;
    let newString = '';
    while (i > -1){
        newString += initialString[i];
        i--;
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
