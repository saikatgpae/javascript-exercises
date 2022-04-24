const findTheOldest = function(people) {
    const date = new Date();
    const y = date.getFullYear();
    const oldest = people.reduce((a, b) => {
        if (a.yearOfDeath == undefined || b.yearOfDeath == undefined) {
            const oldest = y - a.yearOfBirth;
            const youngest = y - b.yearOfBirth;
            return oldest > youngest ? a : b;
        }
        else{
            const oldest = a.yearOfDeath - a.yearOfBirth;
            const youngest = b.yearOfDeath - b.yearOfBirth;
            return oldest > youngest ? a : b;
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
