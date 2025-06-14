/** ============================
 *  Write a function isPowerOfTwo(n) that returns true if n is a power of two.
 * ============================ */

function isPowerOfTwo(n: number): boolean {
  // Base Case
  if (n === 1) return true;
  else if (n % 2 === 1 || n < 1) return false;

  // Recursive Case
  return isPowerOfTwo(n / 2);
}

// Test Cases
console.log(isPowerOfTwo(1)); // Output: true
console.log(isPowerOfTwo(16)); // Output: true
console.log(isPowerOfTwo(3)); // Output: false
