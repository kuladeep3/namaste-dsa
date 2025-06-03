const arr1 = [4, 9, 0, 2, 8, 7, 1];
const arr2 = [2];
const arr3 = [5, 17, 10, 8, 17, 1, 5];
const arr4 = [-5, -3, -5, -2, -434, -22];

/** ============================
 *  Write a function that returns the second largest number in an array.
 * ============================ */

function secondLargest(arr) {
  // Special case: empty array has no second largest number
  if (arr.length < 2) return null;

  // Assume the first and second largest numbers are at negative infinity
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  // Find the first and second largest numbers
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] !== firstLargest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

// Test cases
console.log(secondLargest(arr1)); // Output: 8
console.log(secondLargest(arr2)); // Output: null
console.log(secondLargest(arr3)); // Output: 10
console.log(secondLargest(arr4)); // Output: -3
