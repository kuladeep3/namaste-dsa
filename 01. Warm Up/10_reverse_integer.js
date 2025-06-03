// Write a function that takes an integer as an argument and returns the reverse of that integer.

function reverseInteger(x) {
  const isNegative = x < 0;
  x = Math.abs(x);
  let reverse = 0;
  let limit = Math.pow(2, 31);

  // Reverse the digits of the number
  while (x > 0) {
    let rem = x % 10;
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
console.log(reverseInteger(123));
console.log(reverseInteger(-123));
console.log(reverseInteger(120));
console.log(reverseInteger(-2147483648));
