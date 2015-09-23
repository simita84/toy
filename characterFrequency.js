/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

var characterFrequency = function(string) {
  var frequency = {};
  var result = [];

  for(var i = 0; i < string.length; i++) {
    if(frequency[string[i]] === undefined) {
      frequency[string[i]] = 1;
    } else {
      frequency[string[i]] += 1;
    }
  }

  for (var key in frequency) {
    result.push([key, frequency[key]]);
  }
    
  result.sort(function(a, b) { 
      return a[1] < b[1] ? 1 : -1;
  });
  // console.log(result);
  return result;
};

//used insertion sort also, didn't work as intended...need to re-try
var insertionSort = function(array) {
  // Your code goes here. Feel free to add helper functions if needed.
   for (var i = 1; i < array.length; i++) {
     var temp = array[i];
     var index = i;

     while(index > 0 && array[index-1] >= temp) {
      array[index] = array[index-1];
      index--;
     }
     array[index] = temp;
   }
      
  return array;
};


ECHO is on.
