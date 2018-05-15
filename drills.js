'use strict';

function isEven(value){
  if (value % 2 == 0){
    return true;
  }
  else
    return false;
}

// Even or Odd
// O(1) - constant
// because it is one of two answers that are found in a one-step check




function areYouHere(arr1, arr2) {
  for (let i=0; i<arr1.length; i++) {
      const el1 = arr1[i];
      for (let j=0; j<arr2.length; j++) {
          const el2 = arr2[j];
          if (el1 === el2) return true;
      }
  }
  return false;
}

// Are you here?
// O(n^2) - polynomial
// Because the nested loop creates an exponential data return, but only to the second degree




function doubleArrayValues(array) {
  for (let i=0; i<array.length; i++) {
      array[i] *= 2;
  }
  return array;
}

// Doubler
// O(n) - linear
// Because you go through each item in the array one at a time




function naiveSearch(array, item) {
  for (let i=0; i<array.length; i++) {
      if (array[i] === item) {
          return i;
      }
  }
}

// Naive Search
// O(n) - linear
// Because you go through each item in the array, one at a time, until you get to item





function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
      for(let j = i+1; j < arr.length; j++) {
          console.log(arr[i] + ", " +  arr[j] );
      }
  }
}

// Creating pairs
// O(n^2) - polynomial
// because there is one nested loop




function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}

// Computing fibonaccis
// O(n) - linear
// Because you go through the numbers one at a time, adding the first to the subsequent number and returning it.






function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
      currentIndex = Math.floor((minIndex + maxIndex) / 2);
      currentElement = array[currentIndex];

      if (currentElement < item) {
          minIndex = currentIndex + 1;
      }
      else if (currentElement > item) {
          maxIndex = currentIndex - 1;
      }
      else {
          return currentIndex;
      }
  }
  return -1;
}

// An Efficient Search
// O(logn) - logarithmic 
// Because you are able to knock out half the data set making it pretty darn efficient





function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Random element
// O(1) - constant
// it returns a random item from the array in a one step process





function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {
      return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
      if (n % i == 0) return false;
  }
  return true;
}

// Is it prime?
// O(n) - linear
// Because it has to check if n meets the conditions, one increment at a time, until it finds the right answer




// =====================
// Recursive Exercises
// =====================


function countSheep(num){
  //stopping condition of base case
  if(num === 0){
      console.log(`All sheep jumped over the fence`);
  } 
  //this is the recursive case
  //this will be executed until it reaches base case
  else{
      console.log(`${num}: Another sheep jump over the fence`);
      countSheep(num-1);
  }
}

// Counting Sheep
// O(n) - linear
// Because it counts down sheep, one at a time, until there are no more sheep





function double_all(arr) {
  if (!arr.length) {
      return [];
  }
  return [arr[0] * 2, ...double_all(arr.slice(1))];
}

// Array Double
// O(n) - linear
// Because it goes through each item in the array one at a time






function reverseString(str) {
  if (str.length < 2) {
      return str;
  }
  return reverseString(str.slice(1)) + str[0];
}

// Reverse String
// O(n) - linear
// Because it goes through each letter in the string one at a time






function triangle(n) {
  if (n < 2) 
      return n;
  return n + triangle(n - 1);
}

// Triangular Number
// O(n) - linear
// Because you go through each row in the triangle, one at a time





function split(str, sep) {
  var idx = str.indexOf(sep);
  if (idx == -1) 
      return [str];
  //you don't have to return an array, you can return a string as an array of 
  //character 
  //return str;
  return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep))
//all these are valid syntax
//return (str.slice(0,idx) + (split(str.slice(idx + sep.length), sep)))
//return str.slice(0,idx).concat(split(str.slice(idx + sep.length), sep))
}

// String Splitter
// O(logn) - logarithmic
// Because it splits the data making it decently efficient






function convertToBinary(num){
  if(num>0){
      let binary = Math.floor(num%2); //save the reminder in binary
  //divide the number by 2 and send that to the function again
  //carry the reminder to the next recursion call
      return (convertToBinary(Math.floor(num/2))+ binary);
  }else{
      return ''; //base case - at some point the divisions will lead to 0
  }
}

// Binary Representation 
// O(logn) - logarithmic
// Because you divide by two, this makes a large data set only a little bit more inefficient than a small data set
// ****




function factorial(n) {  
  // Base Case - when n is equal to 0, we stop the recursion
  if (n === 0) {
    return 1;
  }
  // This is our Recursive Case
  // It will run for all other conditions except when n is equal to 0
  return n * factorial(n - 1);
}

// Factorial
// O(n) - linear
// Because it decrements n, one at a time until n is 0





function fibonacci(n) {
  // Base case
  if (n <= 0) {
    return 0;
  }
  // Base case
  if (n <= 2) {
    return 1;
  }	
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);	
}

// Fibonacci
// O(n) - linear
// Because it goes through the fibonacci sequence by creating one number in the sequence at a time.
// ****




function anagrams(prefix, str){
  if(str.length <= 1){
      console.log(`The anagram is ${prefix}${str}`);
  } else {
      for(let i=0; i<str.length; i++){
          let currentLetter = str.substring(i, i+1); 
          let previousLetters = str.substring(0,i);
          let afterLetters = str.substring(i+1);
          anagrams(prefix+currentLetter, previousLetters+afterLetters);
      }
  }
}
function printAnagram(word){
  //console.log(`The word for which we will find an anagram is ${word}`);
  anagrams(' ', word);

}

// Anagrams
// o(2^n) - exponential
// Because you have recursion within a loop