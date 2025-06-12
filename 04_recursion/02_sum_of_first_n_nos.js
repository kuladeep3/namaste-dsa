/** ============================
 *  Write a function sum(n) that calculates the sum of the first n natural numbers using recursion.
 * ============================ */

function sum(n) {
  if (n === 0) return 0;

  return n + sum(n - 1);
}

// Test cases
console.log(sum(5)); // Output: 15
console.log(sum(10)); // Output: 55
