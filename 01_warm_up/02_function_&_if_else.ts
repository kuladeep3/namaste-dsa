/** ============================
 *  Functions in JavaScript
 *  Functions are reusable blocks of code
 * ============================ */

// Function declaration
function printGreetings(name: string): void {
  console.log("Hello " + name);
}

printGreetings("John"); // Hello John
printGreetings("Sam"); // Hello Sam

// Function to print sum of two numbers
function sum(a: number, b: number): void {
  const result = a + b;
  console.log(result);
}

const a1: number = 10;
const b1: number = 20;
const c1: number = 30;

sum(a1, b1); // 30
sum(a1, c1); // 40

// Function to return square of a number
function square(num: number): number {
  return num * num;
}

const value: number = square(5);
console.log(value); // 25

/** ============================
 *  If-Else in JavaScript
 *  If-else statements are used to make decisions
 * ============================ */

// Function to check if a number is even or odd
function checkEvenOdd(num: number): void {
  if (num % 2 === 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}

checkEvenOdd(4); // Even Number
checkEvenOdd(5); // Odd Number

// Function to check if a person is eligible to vote
function isEligibleToVote(age: number): void {
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
