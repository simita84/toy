/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:                           
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/
//obj[i] = arr[i]

//Qustion is Given an array itms occur odd times, and even times, 
//find the all the items that ocuur even items, and from that return the first item that ocuured even items
//XOR is a binary operation, it stands for "exclusive or", that is to say the resulting bit 
//evaluates to one if only exactly one of the bits is set.
//each number XOR with itseld returns 0
//[1, 7, 2, 4, 5, 6, 8, 9, 6, 4]

var evenOccurrence = function(arr) {
  //XOR method: needs work
  // var count = 0
  // var result = [];
  // for(var i = 0; i < arr.length; i++) {
  //   for(var j = 0; j < i; j++) {
  //     if(arr[i] === arr[j]) {
  //       console.log(arr[j]);
  //         result.push(arr[i]);
  //     }
  //   }     
  // }
  // result.sort();
  // console.log(result);

  // arr = arr.concat(result).sort();
  // console.log(arr);
  // for(var i =0; i < arr.length; i++) {
  //   count = count ^ arr[i];  
      
  // }
  // console.log(count);  

  //Hash Table method: WORKS
   //iterate over the array, and set the obj key to 0 + 1
   var obj ={};
   arr.forEach(function(val) {       
    obj[val] = (obj[val] ? obj[val] : 0) + 1; //this will set values to 1 || 2
    // obj[val] = obj[val] + 1;
    console.log(val + ":" + obj[val]); 
   });
//go look for keys with 2's as there values
   for(var i=0; i < arr.length; i++) {
    if(obj[arr[i]] % 2 === 0) {
      console.log(obj[arr[i]]);
      console.log(arr[i]);
      return arr[i];      
    }
   }
   return false;
};
//console.log(onlyeven);
//returns 4

ECHO is on.
