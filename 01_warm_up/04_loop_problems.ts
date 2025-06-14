/** ============================
 *  Write a function that searches for an element in an array and returns the index of the element if found, or -1 if not found.
 * ============================ */

function searchElement(arr: number[], ele: number): number {
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      return i;
    }
  }

  return -1;
}

// Test cases
console.log(searchElement([4, 2, 0, 10, 8, 30, 3, 2], 10)); // Output: 3
console.log(searchElement([2, -9, 17, 0, 1, -10, -4, 8], 10)); // Output: -1
console.log(searchElement([5, 0, 10, 8, 17, 1, 5, 34], 10)); // Output: 2
console.log(searchElement([-5, -3, -5, -2, -434, -22], 10)); // Output: -1

console.log("\n");

/** ============================
 *  Write a function that returns the number of negative numbers in an array.
 * ============================ */

function countNegativeElements(arr: number[]): number {
  let count: number = 0;

  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }

  return count;
}

// Test cases
console.log(countNegativeElements([4, 2, 0, 10, 8, 30, 3, 2])); // Output: 0
console.log(countNegativeElements([2, -9, 17, 0, 1, -10, -4, 8])); // Output: 3
console.log(countNegativeElements([5, 0, 10, 8, 17, 1, 5, 34])); // Output: 0
console.log(countNegativeElements([-5, -3, -5, -2, -434, -22])); // Output: 6

console.log("\n");

/** ============================
 *  Write a function that returns the largest number in an array.
 * ============================ */

function findLargest(arr: number[]): number {
  let largest: number = -Infinity;

  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

// Test cases
console.log(findLargest([4, 2, 0, 10, 8, 30, 3, 2])); // Output: 30
console.log(findLargest([2, -9, 17, 0, 1, -10, -4, 8])); // Output: 17
console.log(findLargest([5, 0, 10, 8, 17, 1, 5, 34])); // Output: 34
console.log(findLargest([-5, -3, -5, -2, -434, -22])); // Output: -2

console.log("\n");

/** ============================
 *  Write a function that returns the smallest number in an array.
 * ============================ */

function findSmallest(arr: number[]): number {
  let smallest: number = Infinity;

  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

// Test cases
console.log(findSmallest([4, 2, 0, 10, 8, 30, 3, 2])); // Output: 0
console.log(findSmallest([2, -9, 17, 0, 1, -10, -4, 8])); // Output: -10
console.log(findSmallest([5, 0, 10, 8, 17, 1, 5, 34])); // Output: 0
console.log(findSmallest([-5, -3, -5, -2, -434, -22])); // Output: -434
