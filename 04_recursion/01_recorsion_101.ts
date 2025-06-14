const a = 5;

/**
 * Recursion Example
 */
function fun(num: number): void {
  // Base Case to stop recursive calls and return from the function
  if (num === 0) return;

  console.log(num);
  num -= 1;

  // Recursive Case: Function will call itself again with modified parameters
  fun(num);
}

fun(5);

/**
 * Print n to 1 using Recursion
 */
function printNto1(n: number): void {
  if (n < 1) return;

  console.log(n);
  printNto1(n - 1);
}

printNto1(5);

/**
 * Print 1 to n using Recursion
 */
function print1toN(x: number, n: number): void {
  if (x > n) return;

  console.log(x);
  print1toN(x + 1, n);
}

print1toN(1, 10);
