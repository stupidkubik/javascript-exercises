const palindromes = function (palString) {
    let newPalString1 = palString.replaceAll(/[^\w]/g, "").toLowerCase();
    let newPalString2 = newPalString1.split("").reverse().join("");

    if (newPalString1 === newPalString2) {
        return true;
    } else return false;
}

// Do not edit below this line
module.exports = palindromes;
