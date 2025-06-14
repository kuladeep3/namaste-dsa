/** ============================
 *  Write a function that returns the second largest number in an array.
 * ============================ */

function secondLargest(arr: number[]): number | null {
  // Special case: empty array has no second largest number
  if (arr.length < 2) return null;

  // Assume the first and second largest numbers are at negative infinity
  let firstLargest: number = -Infinity;
  let secondLargest: number = -Infinity;

  // Find the first and second largest numbers
  for (let i: number = 0; i < arr.length; i++) {
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
console.log(secondLargest([4, 9, 0, 2, 8, 7, 1])); // Output: 8
console.log(secondLargest([2])); // Output: null
console.log(secondLargest([5, 17, 10, 8, 17, 1, 5])); // Output: 10
console.log(secondLargest([-5, -3, -5, -2, -434, -22])); // Output: -3
