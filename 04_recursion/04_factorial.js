/** ============================
 *  Write a recursive function factorial(n) that returns the factorial of a given positive integer n.
 * ============================ */

function factorial(n) {
  if (n === 1) return 1;

  return n * factorial(n - 1);
}

// Test Cases
console.log(factorial(5)); // Output: 120
console.log(factorial(10)); // Output: 3628800
