const reverseString = function(str) {
    let reverseWordArr = str.split(" ").reverse().map(word => word.split("").reverse().join(""));
    return reverseWordArr.join(" ");
};

// Do not edit below this line
module.exports = reverseString;
