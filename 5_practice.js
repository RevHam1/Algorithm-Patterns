////**************for (const x of myArray.___())****************//
// for (const x of Array(5).keys()) {
//   console.log(x, String.fromCharCode("5".charCodeAt(0) + x));
// }

// const myArray = ["chicken", "beef", "pork", "fish"];

// for (const x of myArray.keys()) {
//   console.log(x); // 0 1 2 3
// }

// for (const x of myArray.values()) {
//   console.log(x); // chicken beef pork fish
// }

// for (const x of myArray.entries()) {
//   console.log(x); // 0 chicken, 1 beef, 2 pork, 3 fish
// }

// for (const x of Array(5).keys()) {
//   console.log(x); // 0 1 2 3 4
// }

////***************for (const char of sentence)*******************//
const sentence = "hello world";

// for (const char of sentence) {
//   console.log(char); // h e l l o  w o r l d
// }

// for (char of sentence) {
//   console.log(sentence[0]); // h h h h h h  h h h h h
//   console.log(char.toUpperCase()); // H  E  L L O   W O R L D
// }

// for (char of sentence) {
//   if (sentence[0]) {
//     firstChar = sentence[0];
//     console.log(firstChar.toUpperCase());
//     break;
//   }
// }

////************************FizzBuzz***************************//
// Print integers 1 to N;  print “Fizz” if an integer is divisible by 3, “Buzz” if an integer is divisible by 5, and “FizzBuzz” if an integer is divisible by both 3 and 5.
function fizz_buzz(interger) {
  nums = [];
  for (let i = 1; i <= interger; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FIZBUZZ");
      nums.push(i);
    } else if (i % 3 === 0) {
      console.log("Fiz");
      nums.push(i);
    } else if (i % 5 === 0) {
      console.log("Buzz");
      nums.push(i);
    } else {
      console.log(i);
    }
  }
  //   console.log(nums);
  return nums;
}
console.log(fizz_buzz(100));

// //******HASH TABLE O(n)******//
// function pairEqualSum3(numArr, sum) {
//   let obj = {};
//   for (let i = 0; i < numArr.length; i++) {
//     if (!obj[numArr[i]]) {
//       //const item = numArr[i];
//       //obj[item] = sum - numArr[i];
//       // console.log({ obj });
//       map[item] = true;
//       return true;
//     }
//     obj[item] = sum - numArr[i];
//   }
//   return false;
// }

// //******USE SET O(n)******//
function hasPairWithSum(arr, sum) {
  let mySet = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) {
      console.log("has  i   1, 2, 3, 4, 5, 6");
      console.log("sum:    " + sum);
      console.log("i:      " + arr[i]);
      console.log("sum-i: ", sum - arr[i]);
      return true;
    }
    mySet.add(sum - arr[i]); //10: 9 8 7 6 5; 7: 6 5 4; 5: 4 3
    console.log(mySet);
  }
  return false;
}

// let arr = [11, 20, 30, 40, 50, 60];
let arr = [1, 2, 3, 4, 5, 6];
let arr1 = [1, 2, 3, 6, 4, 5, 7];

console.log(hasPairWithSum(arr, 10));
// console.log(hasPairWithSum(arr1, 10));
