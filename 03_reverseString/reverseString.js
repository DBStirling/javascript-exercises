const reverseString = function(input) {
    let length = input.length;
    let characters = [];
    let character;

    for (let i = 0; i < length; i++){
        character = input.slice(i, i+1);
        characters[i] = character;
    };

    let output = '';

    for (let i = length; i > 0; i--) {
        output += characters[i-1];
    };   
    
    return output;
}

// Do not edit below this line
module.exports = reverseString;
