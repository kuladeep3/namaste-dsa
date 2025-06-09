# [03. Reverse String](https://leetcode.com/problems/reverse-string/description/)

## Problem Statement:

### Write a function that reverses a string. The input string is given as an array of characters `s`.

### You must do this by modifying the input array **_in-place_** with `O(1)` extra memory.

Example 1:

- Input: s = ["h","e","l","l","o"]
- Output: ["o","l","l","e","h"]

Example 2:

- Input: s = ["H","a","n","n","a","h"]
- Output: ["h","a","n","n","a","H"]

## Approach:

1. **Input:**
   A character array `s`, e.g., `['h', 'e', 'l', 'l', 'o']`.

2. **Loop Halfway:**
   Iterate from the start of the array up to its midpoint using:

   ```js
   for (let i = 0; i < Math.floor(s.length / 2); i++)
   ```

   This ensures that each character is swapped only once.

3. **Swapping Logic:**
   For each `i` in the loop:

   - Store the character at index `i` in a temporary variable.
   - Assign the character at the corresponding index from the end (`s.length - 1 - i`) to `s[i]`.
   - Assign the stored temporary value to the end index.

4. **Return:**
   Return the modified (reversed) array.

## Complexity:

- **Time Complexity:** `O(n)` Each element is visited at most once (only the first half), so it's linear with respect to the length of the array.

- **Space Complexity:** `O(1)` Only a single temporary variable is used for swapping.

## Logic Breakdown:

```javascript
function reverseString(s) {
  // Loop through the first half of the array and swap characters symmetrically
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    // Store the character at the current index temporarily
    let temp = s[i];

    // Replace the character at the current index with the character from the opposite end
    s[i] = s[s.length - 1 - i];

    // Place the stored character at the opposite end
    s[s.length - 1 - i] = temp;
  }

  // Return the reversed array
  return s;
}
```

## Test Cases:

```javascript
console.log(reverseString(["h", "e", "l", "l", "o"])); // Output: ['o','l','l','e','h']
console.log(reverseString(["H", "a", "n", "n", "a", "h"])); // Output: ['h','a','n','n','a','H']
```
