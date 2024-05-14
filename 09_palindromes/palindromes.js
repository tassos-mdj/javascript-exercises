const palindromes = function (str) {
    str.toLowerCase().replace(/[^a-z]/gi, '');
    let revStr = str.split("").reverse().join("");
    return str === revStr;
};

// Do not edit below this line
module.exports = palindromes;
