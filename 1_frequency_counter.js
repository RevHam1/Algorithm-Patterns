// FREQUENCY COUNTERS
// What is the “Frequency Counter” pattern?
// •This pattern uses an object/set to collect values & the frequency of those values.
// •This pattern is often used with an array/string, to avoid nested loops; O(n²) time

// When should I use the Frequency Counter pattern?
// •The Frequency Counter pattern is helpful when having multiple inputs to compare

// Steps to preform
// 1) What is the expected outcome?
// 2) Create function with parameters
// 3) Check edge cases
// 4) Build a "dictionary" to avoid nested loops
// 5) Compare array values
// 6) Wrapping up - What to return if function works

// //****A FREQUENCY COUNTER Followin Steps REFACTORED SOLUTION O(n)****//
// // Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// 1) What is the expected outcome?
// if array1 = [2, 3, 4] then array2 = [4, 9, 16];
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

// 2) Create function with parameters
function sameSquared(firstArr, secondArr) {
  // 3) Check edge cases
  if (!firstArr || !secondArr) return false;
  if (firstArr.length !== secondArr.length) return false;

  // 4) Build a "dictionary" to avoid nested loops
  const lookup = {};
  for (value of firstArr) {
    lookup[value * value] = (lookup[value * value] || 0) + 1;
  }

  // 5) Compare array values
  for (secondValue of secondArr) {
    if (!lookup[secondValue]) return false;
    lookup[secondValue] -= 1;
  }
  // 6) Wrapping up - What to return if function works
  return true;
}

////*********A.1) FREQUENCY COUNTER NAIVE SOLUTION N^2************//
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2); //sqrs val at i
//     if (correctIndex === -1) {
//       return false;
//     }
//     console.log(arr2);
//     arr2.splice(correctIndex, 1); //remove from arr2 at index one
//   }
//   return true;
// }

// array1 = [1, 2, 3, 2];
// array2 = [9, 1, 4, 4];

// console.log(same(array1, array2));

// //*******A.2) FREQUENCY COUNTER REFACTORED SOLUTION O(n)******//
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   let frequencyCounter1 = {};//track # of times a key is in array
//   let frequencyCounter2 = {};//track # of times a key is in array
//   for (let val of arr1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }
//   for (let val of arr2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }
//   for (let key in frequencyCounter1) {
//     if (!(key ** 2 in frequencyCounter2)) {
//       return false; //is there that key in 2nd object
//     }
//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//       return false; //compare number of values
//     }
//   }
//   console.log(frequencyCounter1);
//   console.log(frequencyCounter2);
//   return true;
// }

// console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

//**********B) FREQUENCY COUNTER ANAGRAMS O(n)****************//
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {}; //track # of times a key is in array

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
console.log(validAnagram("anagrams", "nagaramm")); // false
console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false) // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
