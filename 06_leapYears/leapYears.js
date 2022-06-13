const leapYears = function(yeah) {
    const fourYears = yeah % 4;
    const oneCentury = yeah % 100;
    const fourCentury = yeah % 400;

    if (fourCentury === 0) {
        return true; 
    } else if (oneCentury === 0) {
        return false;
    } else if (fourYears === 0) {
        return true;
    } else return false;
};

// Do not edit below this line
module.exports = leapYears;
