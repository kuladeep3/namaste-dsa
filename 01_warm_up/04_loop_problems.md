# 04. Loop Problems

```javascript
const arr1 = [4, 2, 0, 10, 8, 30, 3, 2];
const arr2 = [2, -9, 17, 0, 1, -10, -4, 8];
const arr3 = [5, 0, 10, 8, 17, 1, 5, 34];
const arr4 = [-5, -3, -5, -2, -434, -22];
```

## 1. Search for an Element in Array

### Logic Breakdown:

```javascript
function searchElement(arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    // Check if current element is equal to the element we're searching for
    if (arr[i] === ele) {
      // If found, return the index of the element
      return i;
    }
  }

  // If not found, return -1
  return -1;
}
```

### Test Cases:

```javascript
console.log(searchElement(arr1, 10)); // 3
console.log(searchElement(arr2, 10)); // -1
console.log(searchElement(arr3, 10)); // 2
console.log(searchElement(arr4, 10)); // -1
```

## 2. Count Negative Numbers in Array

### Logic Breakdown:

```javascript
function countNegativeElements(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    // Check if current element is negative
    if (arr[i] < 0) {
      // If found, increment count
      count++;
    }
  }

  // Return the count
  return count;
}
```

### Test Cases:

```javascript
console.log(countNegativeElements(arr1)); // 0
console.log(countNegativeElements(arr2)); // 3
console.log(countNegativeElements(arr3)); // 0
console.log(countNegativeElements(arr4)); // 6
```

## 3. Find the Largest Number in Array

### Logic Breakdown:

```javascript
function findLargest(arr) {
  // Assume the largest element is at negative infinity
  let largest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    // Check if current element is larger than the current largest element
    if (arr[i] > largest) {
      // If found, update largest element
      largest = arr[i];
    }
  }

  // Return the largest element
  return largest;
}
```

### Test Cases:

```javascript
console.log(findLargest(arr1)); // 30
console.log(findLargest(arr2)); // 17
console.log(findLargest(arr3)); // 34
console.log(findLargest(arr4)); // -2
```

## 4. Find the Smallest Number in Array

### Logic Breakdown:

```javascript
function findSmallest(arr) {
  // Assume the smallest element is at positive infinity
  let smallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    // Check if current element is smaller than the current smallest element
    if (arr[i] < smallest) {
      // If found, update smallest element
      smallest = arr[i];
    }
  }

  // Return the smallest element
  return smallest;
}
```

### Test Cases:

```javascript
console.log(findSmallest(arr1)); // 0
console.log(findSmallest(arr2)); // -10
console.log(findSmallest(arr3)); // 0
console.log(findSmallest(arr4)); // -434
```
