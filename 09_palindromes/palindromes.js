const palindromes = function (str) {
    let strippedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let revStr = strippedStr.split("").reverse().join("");
    return strippedStr === revStr;
};

// Do not edit below this line
module.exports = palindromes;
