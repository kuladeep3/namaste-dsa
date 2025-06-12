# [05. Power of Two](https://leetcode.com/problems/power-of-two/description/)

## Problem Statement:

### Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`.

### An integer `n` is a power of two, if there exists an integer `x` such that `n == 2^x`.

Example 1:

- Input: n = 1
- Output: true
- Explanation: 20 = 1

Example 2:

- Input: n = 16
- Output: true
- Explanation: 24 = 16

Example 3:

- Input: n = 3
- Output: false

## Approach:

This approach keeps dividing `n` by 2 until it reaches 1 (valid power of two) or an odd number or number less than 1 (invalid case).

1. **Base Case:**

   - If `n === 1`, return `true`. This means `n` is `2⁰`.
   - If `n` is odd (`n % 2 === 1`) or `n < 1`, return `false`. Powers of two are always positive even numbers (except for `1`).

2. **Recursive Case:**

   - If `n` is divisible by 2, recursively check `isPowerOfTwo(n / 2)`.

## Complexity:

- **Time Complexity:** `O(log n)` The input is divided by 2 in each recursive step.

- **Space Complexity:** `O(log n)` Recursive calls are stored in the call stack until the base case is reached.

## Logic Breakdown:

```javascript
function isPowerOfTwo(n) {
  // Base Case
  // If n is 1, it is a power of two
  if (n === 1) return true;
  // If n is odd or less than 1, it is not a power of two
  else if (n % 2 === 1 || n < 1) return false;

  // Recursive Case
  // If n is divisible by 2, recursively check isPowerOfTwo(n / 2)
  return isPowerOfTwo(n / 2);
}
```

## Test Cases:

```javascript
console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(3)); // false
```
