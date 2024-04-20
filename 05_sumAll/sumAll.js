const sumAll = function(firstNumber, secondNumber) {
    let sum = 0;
    if (typeof firstNumber != 'number' || typeof secondNumber != 'number' || firstNumber < 0 || secondNumber < 0){
        sum = "ERROR";
    }
    else {
        if (firstNumber === secondNumber){
            sum = firstNumber;
        }
        else {
            if (firstNumber < secondNumber){
                for (let i = firstNumber ; i < secondNumber+1 ; i++){
                    sum += i;
                }
            }
            else {
                for (let j = secondNumber ; j < firstNumber+1 ; j++){
                    sum +=j;
                }
            }
        }
    }
return sum;
};



// Do not edit below this line
module.exports = sumAll;
