/** ============================
 *  Write a function that takes a number as an argument and returns true if the number is a palindrome, otherwise false.
 * ============================ */

function isPalindrome(x: number): boolean {
  // Special case: single digit numbers are palindromes
  if (x < 10 && x >= 0) return true;

  // Special case: negative numbers are not palindromes
  if (x < 0) return false;

  const num: number = x;
  let reverse: number = 0;

  // Reverse the digits of the number
  while (x > 0) {
    let rem: number = x % 10;
    reverse = 10 * reverse + rem;
    x = Math.floor(x / 10);
  }

  // Check for equality
  return reverse === num;
}

// Test cases
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-210)); // Output: false
console.log(isPalindrome(12321)); // Output: true
console.log(isPalindrome(8)); // Output: true
