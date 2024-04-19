const removeFromArray = function(userArray, ...elementsToRetrieve) {
    for (let element of elementsToRetrieve) {
        for (let i = 0 ; i < userArray.length+1 ; i++) {
            if (userArray[i] === element) {
            userArray.splice(i,1);
            i--;
            }
        }
    }
return userArray;
};

// Do not edit below this line
module.exports = removeFromArray;
