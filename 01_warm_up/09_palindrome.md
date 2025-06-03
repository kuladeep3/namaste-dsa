# 09. Palindrome

## Given an integer x, return true if x is a palindrome, and false otherwise.

1. Example 1:

   - Input: x = 121
   - Output: true
   - Explanation: 121 reads as 121 from left to right and from right to left.

2. Example 2:

   - Input: x = -121
   - Output: false
   - Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

3. Example 3:
   - Input: x = 10
   - Output: false
   - Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

### Logic Breakdown:

```javascript
function isPalindrome(x) {
  // Special case: single digit numbers are palindromes
  if (x < 10 && x >= 0) return true;

  // Special case: negative numbers are not palindromes
  if (x < 0) return false;

  const num = x;
  let reverse = 0;

  // Reverse the digits of the number
  while (x > 0) {
    // Get the remainder and divide by 10
    let rem = x % 10;

    // Add the remainder to the reversed number
    reverse = 10 * reverse + rem;

    // Divide by 10
    x = Math.floor(x / 10);
  }

  // Check for equality
  return reverse === num;
}
```

### Test Cases:

```javascript
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-210)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(8)); // true
```
