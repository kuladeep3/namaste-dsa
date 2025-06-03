# 08. Count Digit

## Given an integer x, return the number of digits in x.

1. Example 1:

   - Input: x = 123
   - Output: 3

2. Example 2:

   - Input: x = 1234
   - Output: 4

3. Example 3:
   - Input: x = 0
   - Output: 1

### Logic Breakdown:

```javascript
function countDigit(n) {
  // Special case: 0 has 1 digit
  if (n === 0) return 1;

  // Convert to absolute value to handle negative numbers
  n = Math.abs(n);

  let count = 0;

  // Divide the number by 10 repeatedly until it becomes 0
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }

  return count;
}
```

### Test Cases:

```javascript
console.log(countDigit(123)); // 3
console.log(countDigit(1234)); // 4
console.log(countDigit(0)); // 1
console.log(countDigit(-1232)); // 4
```
