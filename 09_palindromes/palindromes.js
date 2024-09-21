const palindromes = function (string) {
    let cleanString = cleanUp(string);

    len = cleanString.length;
    halfLen = len/2;
    isPalindrome = false;

    for (let i = 0; i < halfLen; i++) {
        if (cleanString[i] != cleanString[(len-1)-i]) {
            console.log(i);
            return false;
        }
    }
    isPalindrome = true;
    return true;

};

function cleanUp(string) {
    newString = string.replace(/[!.',\s]/g,"");
    loweredString = newString.toLowerCase();
    return loweredString;
}

// Do not edit below this line
module.exports = palindromes;
