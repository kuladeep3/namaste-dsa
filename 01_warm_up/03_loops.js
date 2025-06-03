/** ============================
 *  For Loop in JavaScript
 *  For loops are used to iterate over a block of code
 * ============================ */

// Without loop (repetitive)
console.log("Hello World");
console.log("Hello World");

// With loop (efficient)
for (let i = 0; i < 2; i++) {
  console.log("Hello World");
}

/** ============================
 *  Loop Syntax
 *  for (initialization; condition; increment) { ... }
 * ============================ */

// Print numbers from 0 to 4
for (let i = 0; i < 5; i++) {
  console.log(i);
}

/** Dry Run:
 *  i = 0 -> print 0 -> i = 1
 *  i = 1 -> print 1 -> i = 2
 *  i = 2 -> print 2 -> i = 3
 *  i = 3 -> print 3 -> i = 4
 *  i = 4 -> print 4 -> i = 5
 *  i = 5 -> exit loop (5 < 5 is false)
 */

/** Example 2: Start from 3 to 4 */
for (let i = 3; i < 5; i++) {
  console.log(i);
}

/** Dry Run:
 *  i = 3 -> print 3 -> i = 4
 *  i = 4 -> print 4 -> i = 5
 *  i = 5 -> exit loop
 */

/** Example 3: Increment by 2 */
for (let i = 2; i < 9; i += 2) {
  console.log(i);
}

/** Dry Run:
 *  i = 2 -> print 2 -> i = 4
 *  i = 4 -> print 4 -> i = 6
 *  i = 6 -> print 6 -> i = 8
 *  i = 8 -> print 8 -> i = 10
 *  i = 10 -> exit loop (10 < 9 is false)
 */

/** Example 4: Countdown loop */
for (let i = 5; i > 0; i--) {
  console.log(i);
}

/** Dry Run:
 *  i = 5 -> print 5 -> i = 4
 *  i = 4 -> print 4 -> i = 3
 *  i = 3 -> print 3 -> i = 2
 *  i = 2 -> print 2 -> i = 1
 *  i = 1 -> print 1 -> i = 0
 *  i = 0 -> exit loop (0 > 0 is false)
 */

/** ============================
 *  Invalid or Infinite For Loops
 * ============================ */

// This loop will NOT run because the condition is false at the start (5 < 4 is false)
for (let i = 5; i < 4; i++) {
  console.log(i);
}

// This loop will run infinitely because i keeps increasing, and is always > 0
// for (let i = 1; i > 0; i++) {
//   console.log(i);
// }

/** ============================
 *  Function inside a Loop
 * ============================ */

// Define a reusable function
function greet(i) {
  console.log("Hello " + i);
}

// Call greet function inside a loop
for (let i = 0; i < 10; i++) {
  greet(i); // prints "Hello 0" to "Hello 9"
}

/** ============================
 *  Array and Loop
 * ============================ */

// Declare an array
let arr = [3, 5, 2, 6, 78, 2];

// Get length of array
let length = arr.length;

console.log("Second element:", arr[1]); // 5
console.log("Array length:", length); // 6

// Loop through entire array
for (let i = 0; i < arr.length; i++) {
  console.log("Element at index", i, ":", arr[i]);
}

// Print only even numbers from the array
console.log("Even numbers in the array:");
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}

/* ===========================
 *  While Loop Example
 *
 *  Syntax:
 *  initialization;
 *  while (condition) {
 *    // code block to be executed
 *    increment/decrement;
 *  }
 * ============================ */

// Print numbers from 0 to 4 using a while loop
let i = 0;

while (i < 5) {
  console.log(i); // prints current value of i
  i++; // increment i after each iteration
}

/** Dry Run Explanation:
 *  i = 0 -> 0 < 5 → true → print 0 → i++
 *  i = 1 -> 1 < 5 → true → print 1 → i++
 *  i = 2 -> 2 < 5 → true → print 2 → i++
 *  i = 3 -> 3 < 5 → true → print 3 → i++
 *  i = 4 -> 4 < 5 → true → print 4 → i++
 *  i = 5 -> 5 < 5 → false → exit loop
 */
