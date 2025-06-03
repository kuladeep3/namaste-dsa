# 02. Function & If Else

## Functions

Functions are reusable blocks of code. They allow you to encapsulate logic that can be executed whenever needed.

### Function Declaration

```javascript
function printGreetings(name) {
  console.log("Hello " + name);
}

printGreetings("John"); // Hello John
printGreetings("Sam"); // Hello Sam
```

### Example: Function to Print Sum of Two Numbers

```javascript
function sum(a, b) {
  const result = a + b;
  console.log(result);
}

const a = 10;
const b = 20;
const c = 30;

sum(a, b); // 30
sum(a, c); // 40
```

### Example: Function to Return Square of a Number

```javascript
function square(num) {
  return num * num;
}

const value = square(5);
console.log(value); // 25
```

## If-Else Statements

If-else statements are used to make decisions in JavaScript.

### Example: Check If a Number is Even or Odd

```javascript
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}

checkEvenOdd(4); // Even Number
checkEvenOdd(5); // Odd Number
```

### Example: Check Voting Eligibility

```javascript
function isEligibleToVote(age) {
  if (age < 1) {
    console.log("Invalid input");
  } else if (age < 18) {
    console.log("Not eligible to vote");
  } else {
    console.log("Eligible to vote");
  }
}

isEligibleToVote(20); // Eligible to vote
isEligibleToVote(16); // Not eligible to vote
isEligibleToVote(-1); // Invalid input
```
