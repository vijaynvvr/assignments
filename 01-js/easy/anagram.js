/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    // str1obj = {}
    // str2obj = {}
    // for (let i = 0; i < str1.length; i++) {
    //     if (str1obj[str1[i]]) str1obj[str1[i]]++;
    //     else str1obj[str1[i]] = 1;
    //     if (str2obj[str2[i]]) str2obj[str2[i]]++;
    //     else str2obj[str2[i]] = 1;
    // }
    // console.log(str1obj);
    // console.log(str2obj);
    // return str1obj === str2obj;
    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')
}

isAnagram('listen', 'silent');

module.exports = isAnagram;
