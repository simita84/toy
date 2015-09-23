/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // Your code here.
  var anagrams ={};
  var newArr = []
  var string = string.split("");
  console.log(string);
  var anagramsRecurse = function(myarray, anagram) {
    if(string === '') {
      anagrams[anagram] = 1;
    }
    for(var i=0; i< myarray.length; i++) {
      anagramsRecurse(anagram + str[i], str.slice(0, i) + str.slice(i + 1))
    }
    anagramsRecurse(string, '');
  }
return Object.keys(anagrams);
};