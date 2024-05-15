const findTheOldest = function(people) {
    let oldest = people[0];
    
    for (let i = 0; i < people.length; i++) {
        let current = people[i];
        if (getAge(current["yearOfBirth"], current["yearOfDeath"]) > getAge(oldest["yearOfBirth"], oldest["yearOfDeath"])) {
            oldest = current;
        }
    }
    return oldest;
};

function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
      }
      return death - birth;
}
// Do not edit below this line
module.exports = findTheOldest;
