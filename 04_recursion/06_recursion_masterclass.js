/** ============================
 * Write a function fibonacci(n) that returns the F(n).
 * F(0) = 0,
 * F(1) = 1
 * F(n) = F(n - 1) + F(n - 2), for n > 1.
 * ============================ */

// Iterative Approach
function fibonacciWithLoop(n) {
  let first = 0;
  let second = 1;
  let sum = 0;

  // Iterate from 2 to n
  for (let i = 2; i <= n; i++) {
    // Update the sum by adding (i-1)th and (i-2)th sums
    sum = first + second;

    // Update the first and second values
    first = second;
    second = sum;
  }

  // Return the final sum
  return sum;
}

// Recursive Approach
function fibonacci(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test Cases
console.log(fibonacciWithLoop(5)); // Output: 5
console.log(fibonacciWithLoop(10)); // Output: 55
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(10)); // Output: 55
