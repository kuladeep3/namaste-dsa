/** ============================
 *  Write a function sum(n) that calculates the sum of the first n natural numbers using recursion.
 * ============================ */

function sumOfFirstN(n: number): number {
  if (n === 0) return 0;

  return n + sumOfFirstN(n - 1);
}

// Test cases
console.log(sumOfFirstN(5)); // Output: 15
console.log(sumOfFirstN(10)); // Output: 55
