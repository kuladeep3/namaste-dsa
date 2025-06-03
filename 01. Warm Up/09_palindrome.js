// Write a function that takes a number as an argument and returns true if the number is a palindrome, otherwise false.

function isPalindrome(x) {
  if (x < 10 && x >= 0) return true;
  if (x < 0) return false;

  const num = x;
  let reverse = 0;

  while (x > 0) {
    let rem = x % 10;
    reverse = 10 * reverse + rem;
    x = Math.floor(x / 10);
  }

  return reverse === num;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-210));
console.log(isPalindrome(12321));
console.log(isPalindrome(8));
