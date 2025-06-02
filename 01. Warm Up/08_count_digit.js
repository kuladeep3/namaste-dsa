// Write a function that returns the count of digits in a number

function countDigit(n) {
  // Convert to absolute value to handle negative numbers
  n = Math.abs(n);

  // Special case: 0 has 1 digit
  if (n === 0) return 1;

  let count = 0;

  // Divide the number by 10 repeatedly until it becomes 0
  while (n > 0) {
    n = Math.floor(n / 10); // Remove the last digit
    count++; // Increment the digit count
  }

  return count;
}

console.log(countDigit(259)); // Output: 3
console.log(countDigit(4948394)); // Output: 7
console.log(countDigit(0)); // Output: 1
console.log(countDigit(12312)); // Output: 5
console.log(countDigit(-1232)); // Output: 4
