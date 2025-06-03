# 03. Loops

Loops are used to execute a block of code repeatedly.

## For Loop

```javascript
// Without loop (repetitive)
console.log("Hello World");
console.log("Hello World");

// With loop (efficient)
for (let i = 0; i < 2; i++) {
  console.log("Hello World");
}
```

### Syntax

```javascript
for (initialization; condition; increment) {
  // code block
}
```

### Example: Print 0 to 4

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Output:
// 0
// 1
// 2
// 3
// 4
```

### Example: Start from 3 to 4

```javascript
for (let i = 3; i < 5; i++) {
  console.log(i);
}

// Output:
// 3
// 4
```

### Example: Increment by 2

```javascript
for (let i = 2; i < 9; i += 2) {
  console.log(i);
}

// Output:
// 2
// 4
// 6
// 8
```

### Example: Countdown loop

```javascript
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// Output:
// 5
// 4
// 3
// 2
// 1
```

## Invalid / Infinite Loops

### Example: Invalid Loop

```javascript
// Will not run (5 < 4 is false)
for (let i = 5; i < 4; i++) {
  console.log(i);
}
```

### Example: Infinite Loop

```javascript
// Infinite loop (keep on printing 1 forever)
for (let i = 1; i > 0; i++) {
  console.log(i);
}

// Output: 1 1 1 1 1 ...
```

## Function Inside Loop

```javascript
function greet(i) {
  console.log("Hello " + i);
}

for (let i = 0; i < 5; i++) {
  greet(i);
}

// Output:
// Hello 0
// Hello 1
// Hello 2
// Hello 3
// Hello 4
```

## Looping Through Arrays

```javascript
let arr = [3, 5, 2, 6, 78, 2];

console.log("Second element:", arr[1]); // 5
console.log("Array length:", arr.length); // 6

// Loop through entire array
for (let i = 0; i < arr.length; i++) {
  console.log("Element at index", i, ":", arr[i]);
}
// Output:
// Element at index 0 : 3
// Element at index 1 : 5
// Element at index 2 : 2
// Element at index 3 : 6
// Element at index 4 : 78
// Element at index 5 : 2

// Print only even numbers
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}
// Output:
// 2
// 6
// 78
// 2
```

## While Loop

### Syntax

```javascript
initialization;
while (condition) {
  // code block
  increment;
}
```

### Example: Print numbers from 0 to 4

```javascript
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

### Dry Run

```
i = 0 -> print 0 -> i = 1
i = 1 -> print 1 -> i = 2
i = 2 -> print 2 -> i = 3
i = 3 -> print 3 -> i = 4
i = 4 -> print 4 -> i = 5
i = 5 -> exit (5 < 5 is false)
```
