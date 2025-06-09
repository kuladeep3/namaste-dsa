/** ============================
 *  Write a function to reverse a string.
 * ============================ */

function reverseString(s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    let temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }

  return s;
}

// Test cases
console.log(reverseString(["h", "e", "l", "l", "o"])); // Output: ['o','l','l','e','h']
console.log(reverseString(["H", "a", "n", "n", "a", "h"])); // Output: ['h','a','n','n','a','H']
