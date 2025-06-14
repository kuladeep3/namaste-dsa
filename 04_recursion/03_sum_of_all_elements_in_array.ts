/** ============================
 *  Write a function sum(arr, n) that calculates the sum of all the elements present in array.
 * ============================ */

function sum(arr: number[], n: number): number {
  if (n === 1) return arr[0];

  return arr[n - 1] + sum(arr, n - 1);
}

// Test cases
console.log(sum([1, 2, 3], 3)); // Output: 6
console.log(sum([1, 3, 4, 23, 5, 2], 6)); // Output: 38

/** ============================
 *  Write a function oddSum(arr, n) that calculates the sum of all the odd elements present in array.
 * ============================ */

function oddSum(arr: number[], n: number): number {
  const isOdd = arr[n - 1] % 2 !== 0;

  if (n === 1) return isOdd ? arr[0] : 0;

  return (isOdd ? arr[n - 1] : 0) + oddSum(arr, n - 1);
}

// Test cases
console.log(oddSum([1, 2, 3], 3)); // Output: 4
console.log(oddSum([2, 3, 4, 23, 5, 2], 6)); // Output: 31
