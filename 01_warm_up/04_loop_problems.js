const arr1 = [4, 2, 0, 10, 8, 30, 3, 2];
const arr2 = [2, -9, 17, 0, 1, -10, -4, 8];
const arr3 = [5, 0, 10, 8, 17, 1, 5, 34];
const arr4 = [-5, -3, -5, -2, -434, -22];

/** ============================
 *  Write a function that searches for an element in an array and returns the index of the element if found, or -1 if not found.
 * ============================ */

function searchElement(arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      return i;
    }
  }

  return -1;
}

// Test cases
console.log(searchElement(arr1, 10)); // Output: 3
console.log(searchElement(arr2, 10)); // Output: -1
console.log(searchElement(arr3, 10)); // Output: 2
console.log(searchElement(arr4, 10)); // Output: -1

console.log("\n");

/** ============================
 *  Write a function that returns the number of negative numbers in an array.
 * ============================ */

function countNegativeElements(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }

  return count;
}

// Test cases
console.log(countNegativeElements(arr1)); // Output: 0
console.log(countNegativeElements(arr2)); // Output: 3
console.log(countNegativeElements(arr3)); // Output: 0
console.log(countNegativeElements(arr4)); // Output: 6

console.log("\n");

/** ============================
 *  Write a function that returns the largest number in an array.
 * ============================ */

function findLargest(arr) {
  let largest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

// Test cases
console.log(findLargest(arr1)); // Output: 30
console.log(findLargest(arr2)); // Output: 17
console.log(findLargest(arr3)); // Output: 34
console.log(findLargest(arr4)); // Output: -2

console.log("\n");

/** ============================
 *  Write a function that returns the smallest number in an array.
 * ============================ */

function findSmallest(arr) {
  let smallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

// Test cases
console.log(findSmallest(arr1)); // Output: 0
console.log(findSmallest(arr2)); // Output: -10
console.log(findSmallest(arr3)); // Output: 0
console.log(findSmallest(arr4)); // Output: -434
