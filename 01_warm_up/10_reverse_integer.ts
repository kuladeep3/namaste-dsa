/** ============================
 *  Write a function that takes an integer as an argument and returns the reverse of that integer.
 * ============================ */

function reverseInteger(x: number): number {
  const isNegative: boolean = x < 0;
  x = Math.abs(x);

  // 2^31 is the largest integer that can be stored in a 32-bit signed integer
  let limit: number = Math.pow(2, 31);

  let reverse: number = 0;

  // Reverse the digits of the number
  while (x > 0) {
    let rem: number = x % 10;
    reverse = 10 * reverse + rem;
    x = Math.floor(x / 10);
  }

  // Check for overflow
  if (reverse < -limit || reverse > limit) {
    return 0;
  }

  // Return negative if original was negative
  return isNegative ? -reverse : reverse;
}

// Test cases
console.log(reverseInteger(123)); // Output: 321
console.log(reverseInteger(-123)); // Output: -321
console.log(reverseInteger(120)); // Output: 21
console.log(reverseInteger(-2147483648)); // Output: 0
