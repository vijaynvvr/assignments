/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    let start = 0, end = str.length-1;
    while (start < end) {
        let startChar = str.charAt(start).toLowerCase();
        let endChar = str.charAt(end).toLowerCase();
        if (startChar < 'a' || startChar > 'z') {
            start ++
            continue;
        }
        if (endChar < 'a' || endChar > 'z') {
            end--;
            continue;
        }
        if (startChar !== endChar) return false;
        start++;
        end--;
    }
    return true;
}

module.exports = isPalindrome;
