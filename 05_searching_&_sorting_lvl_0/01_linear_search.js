/** ============================
 * Write a function that takes an array and a target value as arguments and returns the index of the target value in the array if it exists, or -1 otherwise.
 * ============================ */

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

// Test Cases
console.log(linearSearch([2, 4, 7, 10], 10));
console.log(linearSearch([6, 8, 0, 3], 5));
